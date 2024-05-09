// db.js (2024/05/09)
async function connect() {
    const {MongoClient} = require("mongodb");
    const client = new MongoClient("mongodb://127.0.0.1:27017");
    // await espera que esteja conectada a db, mas precisa do async para funcionar 
    await client.connect(); 
    global.connection = client.db("aula23");
    console.log("Connected!");
}

connect();

// encerrar nosso módulo
module.exports = {
    
}

