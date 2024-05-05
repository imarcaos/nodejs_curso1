const fs= require('fs'); // módulo de sistema de arquivos - r/w processamento lento

const x= 0; // processamento rápido

fs.writeFile("teste.txt", `${x}`, ()=> {
    console.log(x); // callback terminou a escrita do ficheiro
});

// promisses, uma versão mais moderna do callback
fs.writeFile("teste1.txt", `${x}`)
    .then(()=> {
        return fs.writeFile('teste2.txt', 'x');
    })
    .then(()=> {
        // ...
    })
    .catch((err)=> {
        // se der um erro dentro de alguma função, podemos usar o catch
        console.log(err);
    })

    // depois do promisses, está sendo utilizado o Async/Await
    const teste= await fs.writeFile('teste1.txt', `${x}`);
    await fs.writeFile('teste2.txt', 'x');

    // o Await para funcionar precisa estar dentro de uma função Assíncrona
    async function funcaoAssinc() {
        try {
            const teste= await fs.writeFile('teste1.txt', `${x}`);
            await fs.writeFile('teste2.txt', 'x');
        } catch (err) {
            console.log(err);
        }        
    }
    