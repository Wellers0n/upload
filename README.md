<p align="center">
    <img src="./upload.png" height="130"/>
</p>
<p align="center">
    <img src="https://img.shields.io/github/package-json/v/wellers0n/4fun-upload?style=flat-square"/>
    <img src="https://img.shields.io/github/last-commit/wellers0n/4fun-upload?style=flat-square"/>
    <a href="https://twitter.com/wellers0n_" target="_blank">
        <img src="https://img.shields.io/twitter/url/https/wellers0n_.svg?style=social"/>
    </a>
</p>

<p>
   <h1 align="center">4fun-upload</h1>
<p/>
    
<br/>

## Fullstack typescript/javascript

4fun-upload uses a stack full `JS/TS` on the frontend and backend, I'm making this project to improve
my skills!

## Node version

Use node `v18.12.1`

## Initing in the your PC

- For clone the project `git clone https://github.com/Wellers0n/4fun-upload.git`
- Enter in the folder `cd 4fun-upload/`

## Install dependencies

```sh
yarn
```

## Init application

Init frontend, backend and postgres with docker-compose

At the root directory, run the following command:

```sh
 docker-compose up --build -d
```

## Avoid conflict

- WARNIGN: stop your machine's postgres to avoid conflict:

#### Mac

```sh
brew services stop postgresql
```

#### Linux

```sh
sudo service postgresql stop
```

#### Windows

```sh
pg_ctl -D "C:\Program Files\PostgreSQL\<Version>\data" stop
```

## Run migrations

- NOTE: Wait for docker-compose, to execute the following commands

```sh
yarn migrate:server up
```

## Listening in

frontend port: `http://localhost:5173`

backend port: `http://localhost:3001`

## API Docs

Visit [http://localhost:3001/docs/](http://localhost:3001/docs/) for more information about the documentation

## kill docker-compose

```sh
docker-compose down -v
```

## Stack used

[ReactJS](https://reactjs.org/)<br/>
[KoaJS](https://koajs.com/)<br/>
[Postgresql](https://www.postgresql.org/)<br/>
[Docker](https://www.docker.com/)<br/>
[Jest](https://jestjs.io/pt-BR/)<br/>
[Swagger](https://swagger.io/)<br/>
[Docker-compose](https://docs.docker.com/compose/)<br/>
[Yarn](https://yarnpkg.com/en/)<br/>
[WorkSpaces](https://yarnpkg.com/lang/en/docs/workspaces/)<br/>
[Styled-Components](https://www.styled-components.com/)<br/>
[Material-IU](https://mui.com/)<br/>
