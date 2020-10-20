const isPrime = (n) => {

    if (n === 1) { //1 não é primo logo tem essa verificação
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true; //A verificação com o if acima pode ser retirada usando no return a condição n > 1
}

console.log(isPrime(1));


//Com um contador se chegar a dois divisores apenas é primo, se passar não é primo
function primo() {
    var numero = parseInt(document.getElementById('num').value);
    var resposta = document.getElementById('resposta');
    var divisores = 0;

    for (var count = 1; count <= numero; count++)
        if (numero % count == 0)
            divisores++;

    if (divisores == 2)
        resposta.innerHTML = 'É primo';
    else
        resposta.innerHTML = 'Não é primo';
}

const primo1 = function (numero) {
    let divisores = 0;
    for (let count = 1; count <= numero; count++) {
        if (numero % count == 0) {
            divisores++;
        }
    }

    if (divisores == 2) {
        return true;
    }
    else {
        return false;
    }
}

const somaPrimos = (i, n) => { //Aqui é passado o argumento i que tem que ser i >= 0;
    let soma = 0;
    for (i = 0; i < n; i++) {
        if (isPrime(i)) {
            console.log(i + ' é primo');
            soma += i;
        }
    }

    return soma;
}

//console.log(somaPrimos(15));

const pa = n => {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }

    console.log(sum);
}

//pa(15);

//1, 2, 3, 5, 7, 11, 13

//console.log(isPrime(1997));

//console.log(primo1(1));