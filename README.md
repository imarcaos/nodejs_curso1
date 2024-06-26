# Curso NodeJS e MongoDB- Curso 1 Inicial


## Apontamentos e códigos para consulta do Curso que estou a fazer
Data início: 2024/05/04

Estou a seguir um curso no Youtube de NodeJs e MongoDB, durante o percurso de estudo existe um nivelamento de Javascript, obviamente irei complementando com outras pesquisas e vídeos para meu estudo.
Youtube: https://www.youtube.com/playlist?list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B

Aqui neste Git ficarão os apontamentos e lista de exercícios e tarefas feitas durante as aulas
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
    - express -e aula12 (-e indicar vamos usar view engine ejs )
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
- Aula 21 - Consulta com filtros em MongoDB
    - Fazer consulta com 2 filtros
        - db.dbname.find({nome: "Marcos", idade: 40}).pretty()
    - Consulta que contenha uma letra "a" no nome
        - db.dbname.find({nome: {$regex: /a/}}) ({nome: {$regex: /a/}} é a mesma coisa que: {nome: /a/})
    - Pesquisar sobre expressões regulares no MongoDB
    - Operadores de comparação: $gte, $gt, $lt, $lte, $eq, $ne, $in, $all
        - db.dbname.find({idade: {$lte: 45}}) (low than and equal)
        - db.dbname.find({idade: {$in: [24,40,49]}}) (consulta valores dentro destes parâmetros)
    - Consulta com all, é como o nome indica, tem de ter todos os elementos do parâmetro
    - Skip, unit, sort
        - db.dbname.find({}).skip(2) (ignora os 2 primeiros elementos)
        - db.dbname.find({}).limit(1) (1 retorna apenas um elemento)
        - db.dbname.find({}).skip(1).limit(1) (ignora o 1º e pega o da sequência)
        - db.dbname.find({}).sort({idade: 1}).pretty() (ordena os resultados, 1 crescente e -1 decrescente)
    - Podemos misturar todos os parâmetros de consulta adicionando ponto e os parâmetros
- Aula 22 - Update com operadores no MongoDB
    - Atualizar apenas um campo com updateOne e $set, com $unset podemos limpar um campo específico
    - db.collection.updateOne(filtro, updateOperator)
        -  db.dbname.updateOne({_id: ObjectId('66394bd14692bb252346b799')}, {$set: {nome: "NomeModificado"}})
    - $inc (incremento) e $mul (multiplicador)
    - Por exemplo quero incrementar a idade em + 1ano ou decrementar com o número negativo: -3
        - db.dbname.updateOne({_id: ObjectId('66394bd14692bb252346b799')}, {$inc: {idade: 1}})
    - Se quisermos multiplicar colocamos $mul e valor, para dividir por 3 = $mul e valor 1/3
        - db.dbname.updateOne({_id: ObjectId('66394bd14692bb252346b799')}, {$inc: {quantidade: 1/3}})
    - Renomear um campo $rename
    - Update com insert $upsert e podemos usar com o replaceOne ou updateOne, ele tanto modifica o campo, como também pode inserir, por padrão é false
        - db.dbname.updateOne({nome: "Fernando"}, {$set: {cidade: "Lisboa"}, {$upsert: true}})
- Aula 23 - NodeJS conectando MongoDB
    - Conectar NodeJS ao MongoDB com o Node Driver
        - npm install mongodb
    - Criando a pasta da aula
        - express -e aula23
    - Entramos dentro da pasta do projeto criada aula23
        - cd aula23
    - Instalar as dependências do projeto
        - npm install
    - Instalar as dependências do mongodb
        - npm install mongodb
    - Para centralizar todos os acessos a dados dentro da nossa aplicação, criamos um ficheiros.js para isso
    - Ficheiro criado vamos iniciar nosso MongoDB e apontar o caminho onde vamos salvar nossa db.
        - mongod --dbpath C:\caminho_db
    - Iniciar a nossa aplicação com NodeJS e apresentar a mensagem de "Conectado!"
        - npm start 
    - Finalizado aqui. 2024/05/09

    
