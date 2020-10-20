let vet = ["gato", "cachorro", "tartaruga"];

function transformaParaMaiusculo(palavras) {
    let res = [];
    for (let i = 0; i < palavras.length; i++) {
        res.push(palavras[i].toUpperCase());
    }

    return res;
}

function gerarDezenas() {
    let res = [];
    let max = 60;
    let min = 1;
    for (let i = 0; i < 6; i++) {
        res.push(Math.floor(Math.random() * (max - min) + min));
    }
}

//console.log(transformaParaMaiusculo(vet));

//console.log("Yeah");

// A função a seguir (calculaIdade) não precisa ser alterada
// A sua função deve ser escrita logo abaixo desta
function calcularIdade(dataDeNascimento) {
    var [dia, mes, ano] = dataDeNascimento.split('/');
    var d = new Date();
    var anoAtual = d.getFullYear();
    var mesAtual = d.getMonth() + 1;
    var diaAtual = d.getDate();
    ano = +ano; mes = +mes; dia = +dia;
    var quantosAnos = anoAtual - ano;
    if (mesAtual < mes || mesAtual == mes && diaAtual < dia) {
        quantosAnos--;
    }
    return quantosAnos < 0 ? 0 : quantosAnos;
}

function deixaEntrar(dataDeNascimento, censura) {

    return calcularIdade(dataDeNascimento) >= censura;

}

/* ---------------------------------------------------------------------------------------------- */
function maisBaratosQue(valor, precos) {
    return precos.filter(p => p <= valor);
}

function maisCarosQue(valor, precos) {
    return precos.filter(p => p >= valor);
}
/* Uma loja virtual permite a seus visitantes filtrar produtos pelo preço. Existe um array com os preços dos produtos. Um programador já criou uma função maisBaratosQue(valor, precos) que retorna um array com os preços dos produtos mais baratos que o valor passado como parâmetro. Outro programador já criou uma função maisCarosQue(valor, precos) que retorna um array com os preços mais caros que o valor passado como parâmetro. Chegou sua vez!

Crie uma função precosEntre(valorMenor, valorMaior, precos) que deve utilizar as funções maisBaratosQue e maisCarosQue para retornar os preços que estão entre o valorMenor e o valorMaior. Sua função deve receber então dois parâmetros:

valorMenor para representar o valor mínimo dos preços a serem listados

valorMaior para representar o valor máximo dos preços a serem listados

precos para representar um array com os preços dos produtos

Ela deve retornar um array com todos os preços entre valorMenor e valorMaior

 */
function precosEntre(valorMenor, valorMaior, precos) {

}
/* ---------------------------------------------------------------------------------------------- */

var usuario1 = ['Et da Estônia', 17, 170]
var usuario2 = ['Pessoa do Pântano', 39, 198]
var usuario3 = ['Homem da Lua Virada', 21, 149]
var usuario4 = ['Pequena Paulistana', 18, 171]
var usuario5 = ['Menino da Porteira', 13, 142]

function maiorAlto(usuario) {
    if (usuario[1] >= 18 || usuario[2] >= 170) {
        return true;
    }
    return false;
}

//console.log(maiorAlto(usuario3));

var alunos = [170, 159, 151, 187, 156, 191, 165, 154, 167, 169, 171, 170, 160]

var grupoA = [];
var grupoB = [];
var grupoC = [];

for (let i = 0; i < alunos.length; i++) {
    if (alunos[i] > 150 && alunos[i] <= 159) {
        grupoA.push(alunos[i]);
    } else if (alunos[i] > 160 && alunos[i] <= 169) {
        grupoB.push(alunos[i]);
    } else if (alunos[i] >= 170) {
        grupoC.push(alunos[i]);
    }
}

//console.log(grupoA);
//console.log(grupoB);
//console.log(grupoC);

function calculaGostos(notas) {
    let a = 0, b = 0, c = 0;

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] == 0 || notas[i] == 1) {
            a++;
        }
        if (notas[i] == 2 || notas[i] == 3) {
            b++;
        }
        if (notas[i] == 4 || notas[i] == 5) {
            c++;
        }
    }
    return [a, b, c];
}

console.log(calculaGostos([1, 1, 3, 3, 5, 5]));