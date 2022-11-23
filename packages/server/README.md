# Server

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

### Connect postgres

```sh
USER=postgres
PASSWORD=postgres
DB=uploaddb
URL=postgres://postgres:postgres@localhost:5431/uploaddb
```

<p align="center">
    <img src="./connect-postgres.png" />
</p>

## Built With

- Node.JS
- Typescript

## Versioning

We use [Git](https://git-scm.com/doc) for versioning with [git-flow](https://medium.com/trainingcenter/utilizando-o-fluxo-git-flow-e63d5e0d5e04)
