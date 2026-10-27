# Self-hosting

Prefer your data on your own machine? Yinian also runs as a self-hosted Docker deployment — the same source, the same pipeline, per-user workspaces backed by a local SQLite store.

::: info Distribution status
The hosted edition at [yinian.avalidigital.ca](https://yinian.avalidigital.ca) is the fastest way to start. Access to the self-hosted distribution (source or image) is currently by request — reach out to the team if you want to run your own.
:::

## What you'll need

- **Docker** with the compose plugin
- A **Supabase project** (the free tier works) for user accounts — Yinian uses Supabase auth for sign-up, sign-in, and password recovery
- Optionally, your own **video generation gateway** endpoint

## Run it

A minimal `docker-compose.yml`:

```yaml
services:
  yinian-web:
    build: .
    restart: always
    ports:
      - "127.0.0.1:3000:3000"
    environment:
      # Static assets live on the data volume so lazy-loaded chunks
      # survive container rebuilds
      MUSE_STATIC_DIR: /data/static
      # Supabase auth (anon key is a public value)
      MUSE_SUPABASE_URL: ${MUSE_SUPABASE_URL:?set in .env}
      MUSE_SUPABASE_ANON_KEY: ${MUSE_SUPABASE_ANON_KEY:?set in .env}
      # Optional: comma-separated allowlist; empty = all users of the
      # Supabase project may sign in
      MUSE_ALLOWED_EMAILS: ${MUSE_ALLOWED_EMAILS:-}
      # Optional: video gateway endpoint override
      MUSE_INFINMAG_BASE: ${MUSE_INFINMAG_BASE:-}
    volumes:
      - yinian-web_data:/data

volumes:
  yinian-web_data:
```

Put `MUSE_SUPABASE_URL` and `MUSE_SUPABASE_ANON_KEY` in a `.env` file next to the compose file, then:

```bash
docker compose up -d
```

The app listens on `127.0.0.1:3000` — put your own HTTPS reverse proxy (Caddy, Nginx, Traefik…) in front of it before exposing it to the internet.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `MUSE_SUPABASE_URL` | yes | Supabase project URL for authentication |
| `MUSE_SUPABASE_ANON_KEY` | yes | Supabase anon key (public value) |
| `MUSE_ALLOWED_EMAILS` | no | Comma-separated login allowlist; empty allows all users of the Supabase project |
| `MUSE_INFINMAG_BASE` | no | Video gateway endpoint override |
| `MUSE_STATIC_DIR` | recommended | Where built static assets are served from (keep it on the data volume) |

## Where your data lives

Everything — projects, media, settings, API keys — persists in the `yinian-web_data` volume. Back up that volume and you've backed up your studio. Each user gets an isolated workspace; no user can read another's data.
