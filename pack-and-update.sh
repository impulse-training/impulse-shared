#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SHARED_DIR="$SCRIPT_DIR"

ALL_NAMES="tools native functions voice-agent website admin"

resolve_dir() {
  case "$1" in
    tools)       echo "$SCRIPT_DIR/../impulse-tools" ;;
    native)      echo "$SCRIPT_DIR/../impulse-native" ;;
    functions)   echo "$SCRIPT_DIR/../impulse-functions" ;;
    voice-agent) echo "$SCRIPT_DIR/../impulse-voice-agent" ;;
    website)     echo "$SCRIPT_DIR/../impulse-website-tailwind" ;;
    admin)       echo "$SCRIPT_DIR/../impulse-admin-next" ;;
    *) echo ""; return 1 ;;
  esac
}

# Parse --only flag (comma-separated list of short names)
ONLY_TARGETS=""
while [[ $# -gt 0 ]]; do
  case "$1" in
    --only)
      ONLY_TARGETS="$2"
      shift 2
      ;;
    *)
      echo "Unknown argument: $1"
      echo "Usage: $0 [--only tools,native,functions,voice-agent,website,admin]"
      exit 1
      ;;
  esac
done

# Generate a timestamp-based prerelease version to bust npm cache
TIMESTAMP=$(date +%s)
VERSION="0.1.1-${TIMESTAMP}"
TARBALL_NAME="impulse-shared-${VERSION}.tgz"

echo "==> Setting impulse-shared version to ${VERSION}"
cd "$SHARED_DIR"
npm version "$VERSION" --no-git-tag-version --allow-same-version

echo "==> Building impulse-shared"
npm run build

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

# Determine which consumers to update
TARGETS="${ONLY_TARGETS:-$ALL_NAMES}"
IFS=',' read -r -a TARGET_LIST <<< "$(echo "$TARGETS" | tr ' ' ',')"

for target in "${TARGET_LIST[@]}"; do
  target=$(echo "$target" | xargs) # trim whitespace
  DIR=$(resolve_dir "$target") || {
    echo "Unknown consumer: $target"
    echo "Available: $ALL_NAMES"
    exit 1
  }
  update_consumer "$DIR"
done

rm -f "$SHARED_DIR/$TARBALL_NAME"

echo ""
echo "✅ impulse-shared ${VERSION} installed in: ${TARGET_LIST[*]}"
