#!/usr/bin/env bash
set -euo pipefail

if [ ! -f api/.env ]; then
  echo "Error: api/.env not found."
  echo "  Hint: cp api/.env.example api/.env"
  exit 1
fi

docker compose up --build
