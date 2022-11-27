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
  
  ##### [Frontend](https://github.com/Wellers0n/4fun-upload/tree/master/packages/client)
  ##### [Backend](https://github.com/Wellers0n/4fun-upload/tree/master/packages/server)


## Node version

Use node `v18.12.1`
## Initing in the your PC

- For clone the project `git clone https://github.com/Wellers0n/4fun-upload.git`
- Enter in the folder `cd 4fun-upload/`
- To install project dependency: `yarn`


## API Docs

Visit [http://localhost:3001/docs/](http://localhost:3001/docs/) for more information about the documentation

## File test

send [sales.txt](https://github.com/Wellers0n/4fun-upload/blob/main/packages/server/sales.txt)

## Init database

### init docker-componse (postgres)

At the root directory, run the following commands:

```sh
docker-compose up --build -d
```

Wait 15 sec to run the following commands:

```sh
DATABASE_URL=postgres://postgres:postgres@localhost:5431/uploaddb yarn migrate:server up
```

## kill docker-compose

```sh
docker-compose down -v
```

## Stack used

[ReactJS](https://reactjs.org/)<br/>
[KoaJS](https://koajs.com/)<br/>
[Postgresql](https://www.postgresql.org/)<br/>
[Docker](https://www.docker.com/)<br/>
[Docker-compose](https://docs.docker.com/compose/)<br/>
[Yarn](https://yarnpkg.com/en/)<br/>
[WorkSpaces](https://yarnpkg.com/lang/en/docs/workspaces/)<br/>
[Styled-Components](https://www.styled-components.com/)<br/>
