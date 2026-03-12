#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SHARED_DIR="$SCRIPT_DIR"
NATIVE_DIR="$SCRIPT_DIR/../impulse-native"
FUNCTIONS_DIR="$SCRIPT_DIR/../impulse-functions"
TOOLS_DIR="$SCRIPT_DIR/../impulse-tools"
VOICE_AGENT_DIR="$SCRIPT_DIR/../impulse-voice-agent"
WEBSITE_DIR="$SCRIPT_DIR/../impulse-website-tailwind"
ADMIN_DIR="$SCRIPT_DIR/../impulse-admin-next"

# Generate a timestamp-based prerelease version to bust npm cache
TIMESTAMP=$(date +%s)
VERSION="0.1.1-${TIMESTAMP}"
TARBALL_NAME="impulse-shared-${VERSION}.tgz"
STABLE_TARBALL_NAME="impulse-shared.tgz"

echo "==> Setting impulse-shared version to ${VERSION}"
cd "$SHARED_DIR"
npm version "$VERSION" --no-git-tag-version --allow-same-version

echo "==> Building impulse-shared"
npm run build

echo "==> Packing to all consumers"
npm pack --pack-destination "$NATIVE_DIR"
npm pack --pack-destination "$FUNCTIONS_DIR"
npm pack --pack-destination "$TOOLS_DIR"
npm pack --pack-destination "$VOICE_AGENT_DIR"
npm pack --pack-destination "$WEBSITE_DIR"
npm pack --pack-destination "$ADMIN_DIR"

# Update a consumer package to use the local tarball
update_consumer() {
  local DIR="$1"
  local NAME=$(basename "$DIR")
  echo "==> Updating ${NAME}"

  # Remove old tarballs (but not the new one)
  find "$DIR" -maxdepth 1 \( -name "impulse-shared-*.tgz" -o -name "$STABLE_TARBALL_NAME" \) ! -name "$TARBALL_NAME" -delete

  cp "$DIR/$TARBALL_NAME" "$DIR/$STABLE_TARBALL_NAME"

  # Update package.json to use the local tarball
  if [[ "$(uname)" == "Darwin" ]]; then
    sed -i '' "s|\"impulse-shared\": \"[^\"]*\"|\"impulse-shared\": \"file:${STABLE_TARBALL_NAME}\"|" "$DIR/package.json"
  else
    sed -i "s|\"impulse-shared\": \"[^\"]*\"|\"impulse-shared\": \"file:${STABLE_TARBALL_NAME}\"|" "$DIR/package.json"
  fi

  echo "==> Cleaning npm cache and reinstalling in ${NAME}"
  cd "$DIR"
  rm -rf node_modules/impulse-shared
  npm install

  # npm install rewrites package.json with resolved parent-relative paths for file: deps.
  # Re-apply the correct local path after install.
  local FINAL_REF="file:${STABLE_TARBALL_NAME}"
  if [[ "$(uname)" == "Darwin" ]]; then
    sed -i '' "s|\"impulse-shared\": \"file:[^\"]*\\.tgz\"|\"impulse-shared\": \"${FINAL_REF}\"|" "$DIR/package.json"
  else
    sed -i "s|\"impulse-shared\": \"file:[^\"]*\\.tgz\"|\"impulse-shared\": \"${FINAL_REF}\"|" "$DIR/package.json"
  fi
}

update_consumer "$TOOLS_DIR"
update_consumer "$NATIVE_DIR"
update_consumer "$FUNCTIONS_DIR"
update_consumer "$VOICE_AGENT_DIR"
update_consumer "$WEBSITE_DIR"
update_consumer "$ADMIN_DIR"

echo ""
echo "✅ impulse-shared ${VERSION} installed in all consumers"
