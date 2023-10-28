# KOMODO Books exercise app

## Demo

A live demo is available at http://komodo.arclight.industries/

![My Books page](./img/my_books.png)
![My Lists page](./img/my_lists.png)
![Add To List dialog](./img/add_to_list.png)

## Rationale

The goal was to use the technologies KOMODO is using, where that was
known and practical. To that extent, the exercise uses:

- Node.js
- TypeScript
- Prisma
- Express
- Jest
- Vue3 with Vue Router and the Pinia data store
- Vuetify component library
- pnpm package manager
- Postgres
- Docker and docker compose

In some cases choices were made based on familiarity, and in others
novelty. I wanted to learn Prisma, see how pnpm handled a monorepo, and
try the Vue3 composition API. In some cases these caused hiccups in
development, but what I learned was well worth the effort.

The project is divided into four containers - frontend, backend,
database, and "models". The first three don't need explanation or
justification. With models, I wanted to share type definitions across
the front and back ends using a single schema definition. The way Prisma
works out of the box coupled with how pnpm manages monorepo packages
makes for something fun to talk about in the post-mortem. The models
container is in charge of setting up the db structure and seeding the
data.

Everything is running in dev mode, not as a production-ready service.
Local files are mounted into the running containers and hot reloading is
enabled for exploration.

### Assumptions
- A single user - no sessions, login, etc.
- `books.json` is the full list of the user's books, not the system
catalog, of which the user's library is a subset.
- The same book can be in multiple lists

## Setup

Assuming you have [git](https://git-scm.com/downloads),
[docker](https://docs.docker.com/get-docker/), and
[docker compose](https://docs.docker.com/compose/install/linux/) installed:

#### Clone the repo
```shell
git clone https://github.com/arcli/komodo-books.git
```
#### Set up the `.env` file

```shell
cp .env{.sample,}
```

#### Start the containers

```shell
docker compose up
```

## Out of scope

Concerns intentionally left out, generally to simplify.

- Sessions
- GraphQL
- Production build
- Deployment
- CI/CD
- Internationalization

## Known issues

Dockerization of the multiple projects within the repo has been
problematic and fragile. Some time would be well spent cleaning this up,
possibly with a different approach than the layer-sharing one currently
used.

Initial rendering speed of the My Books page isn't good. There's a
couple things we could do to improve and/or mask that.

The codebase is not particularly well typed. We could do a lot more with
type safety across the board.

Tests are minimal.

