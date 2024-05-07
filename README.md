# Curso NodeJS e MongoDB- Curso 1 Inicial


## Curso que estou a seguir pelo youtube para conhecer o NodeJS

Estou a seguir um curso no Youtube de NodeJs e MongoDB, durante o percurso de estudo existe um nivelamento de Javascript, obviamente irei complementando com outras pesquisas e vídeos este meu estudo.

Aqui neste Git ficarão os apontamentos e lista de exercícios e tarefas que feitas durante as aulas
Os códigos estão divididos por Aulas ex.: Aula1, Aula2, ...
Sempre que houver enunciados, estarão juntamente com o código.

- Aula 1 - O que é NodeJS
- Aula 2 - Ambiente NodeJS e MongoDB
    - Ferramentas: VS Code, NodeJS e MongoDB
    - Instalação: Windows, Linux e MAC
- Aula 3 - O que é JavaScript
    - Criei um código JS para teste e rodei com o NodeJS
    - Nomes dos arquivos iniciais para projetos por conversão são: main.js ou index.js
- Aula 4 - Revisão de JavaScript - Nivelamento
    - const, let, var
    - logical, relational e arithmetic operators
    - functions e anonymous/arrow functions
- Aula 5 - Revisão JavaScript II
    - operadores relacionais, função normal e objeto
- Aula 6 - Revisão JavaScript III
    - Estruturas de controle e repetição
    - Number, String, Boolean, Array, Object e Function
        - Strings: lenght, indexOf, toString, toUpperCase, ToLowerCase
        - Strings: endsWith, startsWith, replace, trim, parseFloat, parseInt
        - Strings: split, charAt, slice
        - Arrays: lenght, push, forEach, splice, indexOf
    - Comentários
- Aula 7 - O que é NodeJS - História, funcionamento, interpretador e características.
- Aula 8 -  NodeJS na prática I - terminal e execução do código
- Aula 9 -  NodeJS na prática II - módulos, bibliotecas e classses
    - require, module.exports, assíncrono(executa em background)
    - Cada arquivo js dentro do projeto é um móduloó
- Aula 10 - Event Loop de NodeJS
    - V8 single thread
    - libuv(C++) multi thread
    - 1 ping = 88M instruções CPU
- Aula 11 - Callbacks, Promises e Async/Await
    - Servem para organizar o código assíncrono
- Aula 12 - O que é ExpressJS
    - Web framework
    - npm install -g express-generator (cria alguns templates para facilitar o design)
    - npx express-generator (NodeJS 8.2.0) contorna o erro: mkdirp 1.x
    - express -e aula12
    - cd aula12
    - npm install && npm start
- Aula 13 - ExpressJS na prática I
- Aula 14 - ExpressJS na prática II
- Aula 15 - ExpressJS na prática III
    - nova model, view, rota
    - rota com parâmetro
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
    - Dados desestruturados ou com estrutura dinâmica
    - JavaScript Full-Stack
    - Cache
- Aular 18 - Como rodar o servidor MongoDB
    - Instalei a versão msi install do W11
    - Configurei o caminho até a pasta bin no register do W11
    - Saquei no site do MongoDB o MongoDB Shell e adicionei a pasta bin
    - no terminal: mongod (executa o servidor), mongosh (roda o shell e conecta a db)
- Aula 19 - CRUD MongoDB no Terminal
    - com o shell aberto:
        - show databases (nome já indica)
        - use dbname (tanto conecta, como cria)
        - db.dbname.count() (nome já indica, o comando count() esta depreciado, agora: countDocument())
        - db.dbname.find()
        - db.dbname.insert({nome: "Mar", idade: 40, cidade: "Seixal"}) (funciona tanto com "" ou '')
- Aula 20 -  CRUD MongoDB no Terminal II
    - pretty() identa o resultado
        - db.dbname.find().pretty() (pretty() identa o resultado)
    - Inserir dados em forma de array, abaixo.
        - db.dbname.insert([{nome: "Mar", idade: 40, cidade: "Seixal"},{nome: "Marcos", idade:49, cidade:"Fernão Ferro"}])
    - Pesquisa com filtro
        - db.dbname.find({idade:40}).pretty()
        - db.dbname.find({nome: "Marcos"})
    -  MongoDB é Case Sensitive, mas podemos usar expressões regulares no find por exemplo: {nome: /marcos/i} "i" de insensitive
        -  db.dbname.find({nome: /marcos/i}).pretty()
    - Atualizar dados, o replace tem que ter todas as informações antigas + as novas no segundo parâmetro
        - db.dbname.replaceOne({nome: "Mar"},{nome:"Maria", idade:24}) (neste caso o campo cidade ficará vazio)
    - Apagar dados, deleteOne e deleteMany - é aconselhável sempre usarmos o campo id
        - db.dbname.deleteOne({_id: ObjectId('66394bd14692bb252346b799')})

