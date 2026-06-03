# Nominatim

Self-hosted geocoding via [mediagis/nominatim](https://github.com/mediagis/nominatim-docker).
Uses the Geofabrik Sul region extract (RS + SC + PR, ~395MB), which covers Porto Alegre.

## First run

The first `docker compose up` will:
1. Download the Sul OSM extract (~395MB) from Geofabrik
2. Import it into a local Postgres instance inside the container

**This takes 10–30 minutes.** The API service will wait for Nominatim to be healthy
before starting (via `depends_on` + healthcheck).

Subsequent starts are instant — the database is persisted in the `nominatim-data`
Docker volume.

## If you need to reimport

```bash
docker compose down -v   # removes the volume — data will be lost
docker compose up
```

## API

Once running, Nominatim is available at http://localhost:8080.

Forward geocoding example:
```
GET http://localhost:8080/search?q=Av.+Paulo+Gama+110+Porto+Alegre&format=json&limit=1
```
