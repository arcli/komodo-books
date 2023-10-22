FROM node:21-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable
COPY . /app
WORKDIR /app

FROM base AS backend
WORKDIR /app/backend
EXPOSE 8000
CMD [ "pnpm", "-F", "backend", "dev" ]

FROM base AS frontend
WORKDIR /app/frontend
EXPOSE 3000
CMD [ "pnpm", "-F", "frontend", "dev" ]
