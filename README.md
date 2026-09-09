# Hostinger

This repository is configured to run in Alloy with Docker Compose.

## Development

Start the site with:

```sh
docker compose -f docker-compose.alloy.yaml up -d
```

The frontend listens on port `3000`. Alloy proxies it at `http://localhost:8080`.
