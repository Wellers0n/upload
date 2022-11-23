# UPLOAD
### Prerequisites

- Node
- Yarn
- PSQL
- postgres

### Postgres init

At the root directory, run the following commands:

```sh
docker-compose up --build -d
```

```sh
 DATABASE_URL=postgres://postgres:postgres@localhost:5431/uploaddb  npm run migrate up
```

## Built With

- Node.JS
- Typescript

## Versioning

We use [Git](https://git-scm.com/doc) for versioning with [git-flow](https://medium.com/trainingcenter/utilizando-o-fluxo-git-flow-e63d5e0d5e04)
