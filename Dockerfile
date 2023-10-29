FROM node:21-bookworm-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable
COPY . /app
WORKDIR /app

# needed for prisma
RUN apt-get update -y && apt-get -y upgrade && apt-get install -y openssl

RUN SHELL=/bin/bash pnpm setup
RUN pnpm install

RUN pnpm -F models exec prisma generate

FROM base AS backend
WORKDIR /app
RUN pnpm add -g ts-node-dev
EXPOSE 8000
# start in dev mode for ease of use.
CMD pnpm -F backend dev

FROM base AS frontend
WORKDIR /app
RUN pnpm add -g vite
EXPOSE 3000
# start in dev mode for ease of use.
CMD pnpm -F frontend dev

# models gets its own dockerfile now
# FROM base AS models
# WORKDIR /app/packages/models
# RUN pnpm add -g prisma ts-node
# RUN pnpm install
# # ensure the db is up to date. wouldn't do it this way in prod.
# CMD pnpm exec prisma db push --skip-generate && pnpm -F models exec prisma db seed
