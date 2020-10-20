let fs = require('fs');

let nomeArquivo = 'carros.json';

let carros = ['Gol', 'Celta', 'Chappani', 'Palio'];

let concessionaria = {
    nome: "Carros do Beto",
    carros, //Shorthand de carros : carros, pois temos variavel com mesmo nome de prop
}

//console.log(concessionaria);
//Aqui já escrevemos no arquivo o JSON em formato de string
fs.writeFile(nomeArquivo, JSON.stringify(concessionaria), function (err) {
    if (err) {
        console.log(err);
    } else {
        fs.readFile(nomeArquivo, 'utf-8', function (err, data) {
            //data é o arquivo que foi escrevido no caso o objeto concessionária
            if (err) {
                console.log(err);
            } else {
                console.log(data);
                let obj = JSON.parse(data); //A data é str então tem que converter para obj
                obj.carros.push('Celtinha du Cidu');
                console.log(obj);
                //Salva a mudança feita, reescrevendo de novo
                fs.writeFile(nomeArquivo, JSON.stringify(obj), function (err) {
                    if (err) {
                        console.log(err);
                    }
                });
            }
        })
    }
});