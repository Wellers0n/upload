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

- For clone the project `git clone https://github.com/Wellers0n/upload.git`
- Enter in the folder `cd upload/`

## Install dependencies

```sh
yarn
```

## Avoid conflict

- WARNIGN: If starting the application with docker-compose, avoid conflicts

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

## Init application

Init frontend, backend and postgres with docker-compose or via script

At the root directory, run the following command:

### Using docker

```sh
 docker-compose up --build -d
```

### Or locally via script

- NOTE: If starting the application locally your need postgres installed in your machine

you need to create a database and give access

inside postgres:

```ql
 CREATE DATABASE postgres;
 
 CREATE ROLE postgres;
 
 ALTER ROLE "postgres" WITH LOGIN;
```

run application:
```sh
 yarn dev
```


## Run migrations

- NOTE: Wait for docker-compose or start postgres locally, to run the following command

```sh
yarn migrate:server up
```

## Listening in

frontend port: `http://localhost:5173`

backend port: `http://localhost:3001`

## API Docs

Visit [http://localhost:3001/docs/](http://localhost:3001/docs/) for more information about the documentation

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
