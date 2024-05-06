# Curso NodeJS e MongoDB- Curso 1 Inicial


## Curso que estou a seguir pelo youtube para conhecer o NodeJS

Estou a seguir um curso no Youtube de NodeJs e MongoDB, durante o percurso de estudo existe um nivelamento de Javascript, obviamente irei complementando com outras pesquisas e v�deos este meu estudo.

Aqui neste Git ficar�o os apontamentos e lista de exerc�cios e tarefas que feitas durante as aulas
Os c�digos est�o divididos por Aulas ex.: Aula1, Aula2, ...
Sempre que houver enunciados, estar�o juntamente com o c�digo.

- Aula 1 - O que � NodeJS
- Aula 2 - Ambiente NodeJS e MongoDB
    - Ferramentas: VS Code, NodeJS e MongoDB
    - Instala��o: Windows, Linux e MAC
- Aula 3 - O que � JavaScript
    - Criei um c�digo JS para teste e rodei com o NodeJS
    - Nomes dos arquivos iniciais para projetos por convers�o s�o: main.js ou index.js
- Aula 4 - Revis�o de JavaScript - Nivelamento
    - const, let, var
    - logical, relational e arithmetic operators
    - functions e anonymous/arrow functions
- Aula 5 - Revis�o JavaScript II
    - operadores relacionais, fun��o normal e objeto
- Aula 6 - Revis�o JavaScript III
    - Estruturas de controle e repeti��o
    - Number, String, Boolean, Array, Object e Function
        - Strings: lenght, indexOf, toString, toUpperCase, ToLowerCase
        - Strings: endsWith, startsWith, replace, trim, parseFloat, parseInt
        - Strings: split, charAt, slice
        - Arrays: lenght, push, forEach, splice, indexOf
    - Coment�rios
- Aula 7 - O que � NodeJS - Hist�ria, funcionamento, interpretador e caracter�sticas.
- Aula 8 -  NodeJS na pr�tica I - terminal e execu��o do c�digo
- Aula 9 -  NodeJS na pr�tica II - m�dulos, bibliotecas e classses
    - require, module.exports, ass�ncrono(executa em background)
    - Cada arquivo js dentro do projeto � um m�dulo
- Aula 10 - Event Loop de NodeJS
    - V8 single thread
    - libuv(C++) multi thread
    - 1 ping = 88M instru��es CPU
- Aula 11 - Callbacks, Promises e Async/Await
    - Servem para organizar o c�digo ass�ncrono
- Aula 12 - O que � ExpressJS
    - Web framework
    - npm install -g express-generator (cria alguns templates para facilitar o design)
    - npx express-generator (NodeJS 8.2.0) contorna o erro: mkdirp 1.x
    - express -e aula12
    - cd aula12
    - npm install && npm start
- Aula 13 - ExpressJS na pr�tica I
- Aula 14 - ExpressJS na pr�tica II
- Aula 15 - ExpressJS na pr�tica III
    - nova model, view, rota
    - rota com par�metro
    - EJS Embebed JavaScript
        - HTML + JS Server Side (Node.js)
        - Renderiza HTML
        - Server Tag <%= %>
        - Model
        - forEach
- Aula 16 - MongoDB
    - Free e open-source, 10gen(2009), C++, Multiplataforma, Orientado a Documentos (NoSQL)
    - BSON, sem JOINS e FKs, documentos independentes, schemaless, JavaScript
- Aula 17 - Quando usar o MongoDB
    - Big Data
    - Dados desestruturados ou com estrutura din�mica
    - JavaScript Full-Stack
    - Cache
- Aular 18 - Como rodar o servidor MongoDB
    - Instalei a vers�o msi install do W11
    - Configurei o caminho at� a pasta bin no register do W11
    - Saquei no site do MongoDB o MongoDB Shell e adicionei a pasta bin
    - no terminal: mongod (executa o servidor), mongosh (roda o shell e conecta a db)
- Aula 19 - CRUD MongoDB no Terminal
    - com o shell aberto:
        - show databases (nome j� indica)
        - use dbname (tanto conecta, como cria)
        - db.dbname.count() (nome j� indica)
        - db.dbname.find()
        - db.dbname.insert({nome: "Mar", idade: 40, cidade: "Seixal"}) (funciona tanto com "" ou '')