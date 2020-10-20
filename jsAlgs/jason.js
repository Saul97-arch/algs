let data =
{
    nome: "Saulo",
    idade: 23,
    animais: [
        "Macaco",
        "Cachorro",
        "Veado"
    ]
};

let data2 =
{
    num: 5,
    num1: 6,
    "Cachaça": "Caipirinha",
    "Medos": "Bolsonaro"
};

//console.log(data);

for (dado in data) { //for in para exibir o objeto 
    console.log(data[dado]);
}

let nomeCompleto = data.nome + " Ferreira";
let soma = data.idade + 20;
console.log(soma);
console.log(nomeCompleto);
let soma2 = data.idade + data2.num;
console.log("Soma 2 vale: " + soma2);


//Duas maneiras distintas de se exibir
console.log(data2["Cachaça"]); 
console.log(data2.Medos);

//Adicionar propriedades e até mesmo objetos inteiros
data.mae = {
    nome: "Solange",
    idade: 57,
    gostos: [
        "Rezar",
        "Cozinhar"
    ]
};
data.pai = "Antonio";

console.log("data mudado");
console.log(data);

console.log('___________________________________________');

//Método para passar para string
console.log("Abaixo as propriedads do objeto JSON convertido para string");
console.log(JSON.stringify(data));

//JSON.parse é o contrário

const obj = '{"nome": "Silas", "sobrenome": "Silasturbando", "idade": 24, "gay": true}'

JSON.parse(obj);

console.log(obj);