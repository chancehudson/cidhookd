#!/bin/sh

set -e

# Initialize IPFS if path is empty
if [ -z "$(ls -A /root/.ipfs 2> /dev/null)" ]; then
  ipfs init
fi
# Initialize IPFS if path is empty
if [ -z "$(ls -A /root/.jsipfs 2> /dev/null)" ]; then
  jsipfs init
fi

ipfs daemon --migrate &
GO_PID=$!
jsipfs daemon &
JS_PID=$!
sleep 10

ipfs swarm connect /ip4/127.0.0.1/tcp/4002/ipfs/$(jsipfs config Identity.PeerID)
jsipfs swarm connect /ip4/127.0.0.1/tcp/4001/ipfs/$(ipfs config Identity.PeerID)

node /src &
CIDHOOK_PID=$!

while true;
do
  ps ax | grep $GO_PID | grep -v grep > /dev/null
  ps ax | grep $JS_PID | grep -v grep > /dev/null
  ps ax | grep $CIDHOOK_PID | grep -v grep > /dev/null
  sleep 10;
done
