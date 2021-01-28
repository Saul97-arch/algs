function modifiedSum(a, n) {
  // Somar os elementos elevados a n CHECK
  // Somar o array original
  // Subtrair a soma do original da soma do passo 1
  const redPow = (acc, curr) => acc + curr ** n;
  //Valor inicial do acumulador deve ser passado!
  const newSum = a.reduce(redPow, 0);
  const sum = (acc, curr) => acc + curr;
  //Valor inicial do acumulador deve ser passado!
  const originalSum = a.reduce(sum, 0);

  return newSum - originalSum;
}

//console.log(modifiedSum([1, 2], 5));

let arr = [0, 1, 2, 3, 4];
// 1, 8, 27, 64
/* console.log(arr.reduce((acc, curr) => acc + curr ** 3));
console.log(arr.reduce((acc, curr) => acc + curr));
 */
let acc = 0;
for (let e of arr) {
  acc += e;
}

let acc2 = 0;

for (let e of arr) {
  //console.log(e);
  acc2 += e ** 2;
}

//console.log(acc, acc2);

//Maneira sucinta, já que é um array, dá pra fazer com um for
function modifiedSum1(a, n) {
  return a.reduce((s, c) => s + Math.pow(c, n) - c, 0);
}
  
//console.log(arrayDiff([3, 4], [3]));
console.log(arrayDiff([1, 2, 2, 2, 2, 3], [2]));

/* const array = new Array(1, 2, 2, 2);
array.splice(0, 1);
console.log(array); */

//Simples e bem feito!
function array_diff1(a, b) {
  var arr = new Array();

  for (var i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) < 0) {
      arr.push(a[i]);
    }
  }

  return arr;
}

// Mais bem votado
function array_diff2(a, b) {
  return a.filter((e) => !b.includes(e));
}

// Segundo mais bem votado
function array_diff3(a, b) {
  return a.filter(function (x) {
    return b.indexOf(x) == -1;
  });
}

// Set, nunca vi por isso tá aqui, aqui trata como um mapa no js
function array_diff4(a, b) {
  b = new Set(b);
  return a.filter((v) => !b.has(v));
}
// arrayDiff([1,2],[1]) == [2]
// arrayDiff([1,2,2,2,3],[2]) == [1,3]
