#!/usr/bin/env bash
set -euo pipefail

if [ ! -f api/.env ]; then
  echo "Error: api/.env not found."
  echo "  Hint: cp api/.env.example api/.env"
  exit 1
fi

if [ ! -f client/.env ]; then
  echo "Error: client/.env not found."
  echo "  Hint: cp client/.env.example client/.env"
  exit 1
fi

docker network create gat4-net 2>/dev/null || true

docker compose -f services/nominatim/docker-compose.yml --env-file api/.env up -d

docker compose up --build
