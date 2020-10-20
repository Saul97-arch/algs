let carros = ["Celtinha loko", "Prisma", "Gol", "Renato", "Paulo"];
let eunice = 'feia';
/* 
    primeiro parametro: posição inicial
    segundo parametro: quantos elementos serão removidos a partir da posição inicial
    terceiro parâmetro: elementos que serão inseridos a partir da posição inicial
*/
carros.splice(1, 4, 'Crocks', 'Jambs', 'Brecks', eunice);

console.log(carros);

//Pode ser usado parcialmete para remover elementos de um array
carros.splice(1, 1);
//O elemento a partir da posição 1 foi retirado, no caso apenas um elemento
console.log(carros);

//Slice: Ele retorna um pedaço do array criando um novo array, mas sem modificar o array original
/* 
    Primeiro parametro: posição inicial
    Segundo(opcional): posição final(não incluso!)
*/
let carrosVelhos = ['Chevet', 'Corcel', 'Monza', 'Cadet', 'Calhambeque'];

//Tira n elementos do inicio do arr e retorna um arr sem eles mas NÃO modifica o original!
console.log(carrosVelhos.slice(2));
//Aqui sai o array sem mudar nada, esse metodo não modifica o arr!
console.log(carrosVelhos);
//Aqui o primeiro entra mas o ultimo fica como referência, apenas o anterior da posição quatro vai ser retirado!
console.log("Array retirado de um intervalo:\n" + carrosVelhos.slice(2, 4));



