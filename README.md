<p align="center">
    <img src="./upload.png" height="130"/>
</p>
<p align="center">
    <img src="https://img.shields.io/github/package-json/v/wellers0n/4fun-upload?style=flat-square"/>
    <img src="https://img.shields.io/github/last-commit/wellers0n/4fun-upload?style=flat-square"/>
    <img src="https://img.shields.io/github/license/wellers0n/4fun-upload?style=flat-square"/>
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
  my skills with graphql and relay.
  
  ##### [Frontend](https://github.com/Wellers0n/4fun-upload/tree/master/packages/client)
  ##### [Backend](https://github.com/Wellers0n/4fun-upload/tree/master/packages/server)
  
## Initing in the your PC

- For clone the project `git clone https://github.com/Wellers0n/4fun-upload.git`
- Enter in the folder `cd 4fun-upload/`
- To install project dependency: `yarn install`
- After the installation of the dependencies `yarn start` in the default directory

## Stack used

[ReactJS](https://reactjs.org/)<br/>
[KoaJS](https://koajs.com/)<br/>
[MongoDB](https://www.mongodb.com/)<br/>
[GraphQL](https://graphql.org/)<br/>
[Relay](https://relay.dev/)<br/>
[Yarn](https://yarnpkg.com/en/)<br/>
[WorkSpaces](https://yarnpkg.com/lang/en/docs/workspaces/)<br/>
[Styled-Components](https://www.styled-components.com/)<br/>


# Desafio de programação

O objetivo desse teste é avaliar as suas habilidades em programação.

## Descrição do projeto

Surgiu uma nova demanda urgente e precisamos de uma área exclusiva para fazer o
upload de um arquivo das transações feitas na venda de produtos por nossos
clientes.

Nossa plataforma trabalha no modelo criador-afiliado, sendo assim um criador
pode vender seus produtos e ter 1 ou mais afiliados também vendendo esses
produtos, desde que seja paga uma comissão por venda.

Sua tarefa é construir uma interface web que possibilite o upload de um arquivo
de transações de produtos vendidos, normalizar os dados e armazená-los em um
banco de dados relacional.

Você deve utilizar o arquivo [sales.txt](sales.txt) para fazer o teste da
aplicação. O formato esá descrito na seção "Formato do arquivo de entrada".

## Configurando Seu Ambiente

1. No diretório onde você descompactou o arquivo do desafio crie um repo git e
   uma branch:
   ```bash
   git init --initial-branch=main
   git checkout -b desafio
   ```
2. Desenvolva o desafio fazendo commits no repositório. 

## Requisitos Funcionais

Sua aplicação deve:

1. Ter uma tela (via formulário) para fazer o upload do arquivo
2. Fazer o parsing do arquivo recebido, normalizar os dados e armazená-los em um
   banco de dados relacional, seguindo as definições de interpretação do arquivo
3. Exibir a lista das transações de produtos importadas por produtor/afiliado,
   com um totalizador do valor das transações realizadas
4. Fazer tratamento de erros no backend, e reportar mensagens de erro amigáveis
   no frontend.

## Requisitos Não Funcionais

1. Escreva um README descrevendo o projeto e como fazer o setup.
2. A aplicação deve ser simples de configurar e rodar, compatível com ambiente
   Unix. Você deve utilizar apenas bibliotecas gratuitas ou livres.
3. Utilize docker para os diferentes serviços que compõe a aplicação para
   que funcione facilmente fora do seu ambiente pessoal.
4. Use qualquer banco de dados relacional.
5. Use commits pequenos no Git e escreva uma boa descrição para cada um.
6. Escreva unit tests tanto no backend quanto do frontend.
7. Faça o código mais legível e limpo possível.
8. Escreva o código (nomes e comentários) em inglês. A documentação pode ser em
   português se preferir.

## Requisitos Bônus

Sua aplicação não precisa, mas ficaremos impressionados se ela:

1. Tiver documentação das APIs do backend.
2. Utilizar docker-compose para orquestar os serviços num todo.
3. Ter testes de integração ou end-to-end.
4. Tiver toda a documentação escrita em inglês fácil de entender. 
5. Lidar com autenticação e/ou autorização.

## Formato do arquivo de entrada

| Campo    | Início | Fim | Tamanho | Descrição                      |
| -------- | ------ | --- | ------- | ------------------------------ |
| Tipo     | 1      | 1   | 1       | Tipo da transação              |
| Data     | 2      | 26  | 25      | Data - ISO Date + GMT          |
| Produto  | 27     | 56  | 30      | Descrição do produto           |
| Valor    | 57     | 66  | 10      | Valor da transação em centavos |
| Vendedor | 67     | 86  | 20      | Nome do vendedor               |

### Tipos de transação

Esses são os valores possíveis para o campo Tipo:

| Tipo | Descrição         | Natureza | Sinal |
| ---- | ----------------- | -------- | ----- |
| 1    | Venda produtor    | Entrada  | +     |
| 2    | Venda afiliado    | Entrada  | +     |
| 3    | Comissão paga     | Saída    | -     |
| 4    | Comissão recebida | Entrada  | +     |

## Avaliação

Seu projeto será avaliado de acordo com os seguintes critérios:

1. Documentação do setup do ambiente e execução que rode a aplicação com
   sucesso.
2. Cumprimento dos [requisitos funcionais](#Requisitos-Funcionais) e
   [não funcionais](#Requisitos-Nao-Funcionais).
3. Boa estruturação do componentes e layout de código, mas sem over engineering.
3. Legibilidade do código.
4. Boa cobertura de testes.
5. Claridade e extensão da documentação.
6. Cumprimento de algum [requisito bônus](#Requisitos-Bonus).

## Entregando a Resposta do Desafio

1. Crie um [git bundle](https://git-scm.com/docs/git-bundle) com o seu trabalho:
   ```bash
   git bundle create nome-sobrenome.bundle HEAD desafio
   ```
2. Envie o arquivo do bundle para nós via email, para a mesma pessoa que te
   enviou o desafio.

#### Verificar o bundle

Para verificar o arquivo antes de enviar utilize o seguinte comando:

```
git clone nome-sobrenome.bundle hubla-take-home
```

A cópia do seu trabalho vai estar em `hubla-take-home`.

## Boa Sorte!!!
