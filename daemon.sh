#!/bin/sh

set -e

# Detect custom IPFS_PATH configurations
if [[ -z "$IPFS_PATH" ]]; then
  IPFS_PATH="/root/.ipfs"
fi

# Initialize IPFS if path is empty
if [ -z "$(ls -A $IPFS_PATH 2> /dev/null)" ]; then
  ipfs init
fi
ipfs daemon --migrate &

GO_PID=$!

node /src &

CIDHOOK_PID=$!

while true;
do
  ps ax | grep $GO_PID | grep -v grep > /dev/null
  ps ax | grep $CIDHOOK_PID | grep -v grep > /dev/null
  sleep 10;
done
