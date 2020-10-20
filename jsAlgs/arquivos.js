//import fileSystem, { fstat } from 'fs';

let fs = require('fs'); //Pede o pacote fileSystem e guarda em uma variavel para poder usar as props do obj
let nomeDoArquivo = 'index.html'; //Em vez de passar a string crua, passa uma variavel

//Deixar o código mais legível, aqui vai o texto a ser inserido
let txtAppend = '\n <p>Jarbas ipsum lorem sic duo ament patris collor</p>'; 
console.log('1');

//Aqui é pra criar o arquivo
fs.writeFile(nomeDoArquivo, "<h1>Yeah Boy</h1>", function (err) {
    if (err !== null) { //Se der erro imprime ele
        console.log(err);
    } else {
        console.log("Arquivo criado com sucesso!");
        //Appendando conteúdo ao arquivo
        /* 
            Primeiro parametro: Nome do arquivo
            Segundo parametro: Texto a ser inserido
            Terceiro: Função callback 
        */
        fs.appendFile(nomeDoArquivo, txtAppend, function (err) {
            if (err) {
                console.log(err);
            } else {
                fs.readFile(nomeDoArquivo, 'utf-8', function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data); //Exibe o arquivo, read o file XD
                    }
                });
            }
        });
    }
});

console.log('2');

//Aqui vemos o poder do Node quando tu roda esse código veja que 1 e 2 são imprimidos antes do arquivo ser criado
//Isso acontece pelo fato de essa função de criar um arquivo pode demorar um pouco pelo fato de ter que acessar o disco e tudo mais
//Nisso a função de callback é colocada para background, e quando a função terminar ele retoma o callback
//No meio tempo ele continua executando o restante do código
//Assim a aplicação não trava