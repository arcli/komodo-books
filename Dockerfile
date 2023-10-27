FROM node:21-bookworm-slim AS base

RUN corepack enable
COPY . /app
WORKDIR /app
# needed for prisma
RUN apt-get update -y && apt-get -y upgrade && apt-get install -y openssl
RUN pnpm install
RUN pnpm -F models exec prisma generate

FROM base AS backend
# WORKDIR /app/backend
EXPOSE 8000
# start in dev mode for ease of use.
CMD [ "pnpm", "-F", "backend", "dev" ]

FROM base AS frontend
# WORKDIR /app/frontend
EXPOSE 3000
# start in dev mode for ease of use.
CMD [ "pnpm", "-F", "frontend", "dev" ]

FROM base AS models
# WORKDIR /app/packages/models
# ensure the db is up to date. wouldn't do it this way in prod.
CMD [ "pnpm", "-F", "models", "exec", "prisma", "db", "push", "--skip-generate" ]
