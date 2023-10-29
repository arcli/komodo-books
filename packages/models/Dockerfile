FROM node:21-bookworm-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable
COPY . /app
WORKDIR /app

# openssl is needed for prisma
RUN apt-get update -y && apt-get -y upgrade && apt-get install -y openssl

RUN SHELL=/bin/bash pnpm setup
RUN pnpm add -g prisma ts-node
RUN pnpm install

# ensure the db is up to date. wouldn't do it this way in prod.
CMD pnpm exec prisma db push --skip-generate && pnpm exec prisma db seed
