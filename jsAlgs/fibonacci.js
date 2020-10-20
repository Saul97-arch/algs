let arr = [1, 2];

console.log(arr);

const fibo1 = (arr) => {
  let valor = 3;

  let i = 3;

  while (valor <= 4000000) {
    arr.push(valor);
    valor = arr[i - 1] + arr[i - 2];
    i++;
  }

  return arr;
};

//console.log(fibo1(arr));

//Fibo iterativo another way

const fibo2 = (n) => {
  let anterior = 0;
  let proximo = 0;
  let atual = 1;
  console.log(0);
  for (let i = 0; i < n; i++) {
    proximo = atual + anterior;
    anterior = atual;
    atual = proximo;
    console.log(atual);
  }
};

fibo2(8);
