#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SHARED_DIR="$SCRIPT_DIR"

ALL_NAMES="tools native functions voice-agent website admin dashboard"

# --- Where do consumers live? ------------------------------------------------
# Consumers used to be derived as "$SCRIPT_DIR/../impulse-<name>". That silently
# assumes this script always sits directly under the monorepo root, which stops
# being true the moment it runs from a git worktree: SCRIPT_DIR becomes
# <impulse-shared>/.claude/worktrees/<name>, every consumer resolves to a
# sibling of the worktree that does not exist, and the run dies on the first
# `find` (set -e) — after already bumping the version and rebuilding.
#
# Anchor to the PRIMARY monorepo root instead. `--git-common-dir` points at the
# primary repo's .git from any worktree, so its grandparent is the root.
MONOREPO_ROOT=""
WORKTREE_NAME=""

if common_dir=$(git -C "$SCRIPT_DIR" rev-parse --git-common-dir 2>/dev/null); then
  # From a subdirectory git may return this relative — resolve before using it.
  case "$common_dir" in
    /*) ;;
    *) common_dir="$(cd "$SCRIPT_DIR/$common_dir" && pwd)" ;;
  esac
  MONOREPO_ROOT="$(cd "$(dirname "$common_dir")/.." && pwd)"

  # If we are packing FROM a worktree, prefer consumer worktrees of the same
  # name (see resolve_target_dir).
  abs_git_dir="$(git -C "$SCRIPT_DIR" rev-parse --absolute-git-dir 2>/dev/null || echo "")"
  case "$abs_git_dir" in
    */.git/worktrees/*) WORKTREE_NAME="${abs_git_dir##*/}" ;;
  esac
fi
# Not a git checkout at all (e.g. an extracted tarball): fall back to the old
# sibling assumption rather than failing outright.
[ -n "$MONOREPO_ROOT" ] || MONOREPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

resolve_dir() {
  case "$1" in
    tools)       echo "$MONOREPO_ROOT/impulse-tools" ;;
    native)      echo "$MONOREPO_ROOT/impulse-native" ;;
    functions)   echo "$MONOREPO_ROOT/impulse-functions" ;;
    voice-agent) echo "$MONOREPO_ROOT/impulse-voice-agent" ;;
    website)     echo "$MONOREPO_ROOT/impulse-website-tailwind" ;;
    admin)       echo "$MONOREPO_ROOT/impulse-admin" ;;
    dashboard)   echo "$MONOREPO_ROOT/impulse-dashboard" ;;
    *) echo ""; return 1 ;;
  esac
}

# A run started from worktree "foo" installs into each consumer's "foo" worktree
# when one exists, so parallel branches don't overwrite each other's tarball
# refs. Consumers without a matching worktree fall back to their primary
# checkout — which is correct, but IS a write outside your branch, so every
# resolved path is printed before anything is written.
resolve_target_dir() {
  local base
  base=$(resolve_dir "$1") || return 1
  if [ -n "$WORKTREE_NAME" ] && [ -d "$base/.claude/worktrees/$WORKTREE_NAME" ]; then
    echo "$base/.claude/worktrees/$WORKTREE_NAME"
  else
    echo "$base"
  fi
}

usage() {
  echo "Usage: $0 [--only tools,native,functions,voice-agent,website,admin,dashboard]"
  echo "          [--dry-run] [--target-root <dir>]"
  echo
  echo "  --dry-run      resolve and print targets, write nothing"
  echo "  --target-root  override the monorepo root consumers are resolved against"
}

ONLY_TARGETS=""
DRY_RUN=0
while [[ $# -gt 0 ]]; do
  case "$1" in
    --only)
      ONLY_TARGETS="$2"
      shift 2
      ;;
    --dry-run)
      DRY_RUN=1
      shift
      ;;
    --target-root)
      MONOREPO_ROOT="$(cd "$2" && pwd)"
      shift 2
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown argument: $1"
      usage
      exit 1
      ;;
  esac
done

# Resolve every target BEFORE mutating anything. Previously an unresolvable
# consumer was only discovered after the version bump, rebuild and pack had
# already run.
TARGETS="${ONLY_TARGETS:-$ALL_NAMES}"
IFS=',' read -r -a TARGET_LIST <<< "$(echo "$TARGETS" | tr ' ' ',')"

RESOLVED_DIRS=()
echo "==> Monorepo root: $MONOREPO_ROOT${WORKTREE_NAME:+  (packing from worktree: $WORKTREE_NAME)}"
for target in "${TARGET_LIST[@]}"; do
  target=$(echo "$target" | xargs)
  [ -z "$target" ] && continue
  DIR=$(resolve_target_dir "$target") || {
    echo "Unknown consumer: $target"
    echo "Available: $ALL_NAMES"
    exit 1
  }
  if [ ! -d "$DIR" ]; then
    echo "    $target -> $DIR  [MISSING]"
    echo "Aborting: consumer directory does not exist."
    exit 1
  fi

  note=""
  # Writing into a primary checkout while working on a branch is the case that
  # causes cross-branch surprises, so call it out rather than doing it quietly.
  case "$DIR" in
    */.claude/worktrees/*) note="  (worktree)" ;;
    *) [ -n "$WORKTREE_NAME" ] && note="  (PRIMARY checkout — no '$WORKTREE_NAME' worktree here)" ;;
  esac
  if git -C "$DIR" status --porcelain package.json 2>/dev/null | grep -q .; then
    note="$note  [package.json already modified]"
  fi

  echo "    $target -> $DIR$note"
  RESOLVED_DIRS+=("$DIR")
done

if [ "$DRY_RUN" = "1" ]; then
  echo ""
  echo "Dry run — nothing built, packed or written."
  exit 0
fi

# Generate a timestamp-based prerelease version to bust npm cache
TIMESTAMP=$(date +%s)
VERSION="0.1.1-${TIMESTAMP}"
TARBALL_NAME="impulse-shared-${VERSION}.tgz"

clean_local_artifacts() {
  find "$SHARED_DIR" -maxdepth 1 -name "impulse-shared-*.tgz" -delete
}

echo "==> Setting impulse-shared version to ${VERSION}"
cd "$SHARED_DIR"
npm version "$VERSION" --no-git-tag-version --allow-same-version

echo "==> Building impulse-shared"
npm run build

echo "==> Cleaning old local impulse-shared artifacts"
clean_local_artifacts

echo "==> Packing impulse-shared"
PACK_OUTPUT=$(npm pack --pack-destination "$SHARED_DIR")
PACKED_TARBALL_NAME=$(echo "$PACK_OUTPUT" | tail -n 1 | tr -d '\r')

if [[ "$PACKED_TARBALL_NAME" != "$TARBALL_NAME" ]]; then
  echo "Expected tarball $TARBALL_NAME but got $PACKED_TARBALL_NAME"
  exit 1
fi

# Update a consumer package to use the local tarball
update_consumer() {
  local DIR="$1"
  local NAME=$(basename "$DIR")
  echo "==> Updating ${NAME}"

  find "$DIR" -maxdepth 1 -name "impulse-shared*.tgz" -delete

  cp "$SHARED_DIR/$TARBALL_NAME" "$DIR/$TARBALL_NAME"

  local FINAL_REF="file:${TARBALL_NAME}"

  if [[ "$(uname)" == "Darwin" ]]; then
    sed -i '' "s|\"impulse-shared\": \"[^\"]*\"|\"impulse-shared\": \"${FINAL_REF}\"|" "$DIR/package.json"
  else
    sed -i "s|\"impulse-shared\": \"[^\"]*\"|\"impulse-shared\": \"${FINAL_REF}\"|" "$DIR/package.json"
  fi

  echo "==> Cleaning npm cache and reinstalling in ${NAME}"
  cd "$DIR"
  rm -rf node_modules/impulse-shared
  npm install --package-lock-only "impulse-shared@${FINAL_REF}"
  npm install "impulse-shared@${FINAL_REF}"

  if [[ "$(uname)" == "Darwin" ]]; then
    sed -i '' "s|\"impulse-shared\": \"file:[^\"]*\\.tgz\"|\"impulse-shared\": \"${FINAL_REF}\"|" "$DIR/package.json"
  else
    sed -i "s|\"impulse-shared\": \"file:[^\"]*\\.tgz\"|\"impulse-shared\": \"${FINAL_REF}\"|" "$DIR/package.json"
  fi
}

# Targets were resolved and validated above.
for DIR in "${RESOLVED_DIRS[@]}"; do
  update_consumer "$DIR"
done

rm -f "$SHARED_DIR/$TARBALL_NAME"

echo ""
echo "✅ impulse-shared ${VERSION} installed in: ${TARGET_LIST[*]}"
