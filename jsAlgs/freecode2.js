/* 
  whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) 
  should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
*/

function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  arr = collection.filter((item) => {
    for (let i in source) {
      if (source[i] === item[i]) {
        return true;
      }
    }
    //return false;
  });
  // Only change code above this line
  return arr;
}

/* function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function (obj) {
    for (var i = 0; i < srcKeys.length; i++) {
      if (
        !obj.hasOwnProperty(srcKeys[i]) ||
        obj[srcKeys[i]] !== source[srcKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });
} */

/* console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
      { first: "Tybalt", least: "Capulet" },
      { first: "Tybalt", lost: "Capulet" },
    ],
    { last: "Capulet" }
  )
); */

let arr = ["a"];
let ojba = { a: 1 };
let objb = { a: 1 };

// console.log(ojba[arr[0]] === objb[arr[0]]);

/*
  "pig" = "igpay"
  "latin" = "atinlay"
  "banana" = "ananabay"
  translatePigLatin("california") should return "aliforniacay".

  translatePigLatin("paragraphs") should return "aragraphspay".

  translatePigLatin("glove") should return "oveglay".

  translatePigLatin("algorithm") should return "algorithmway".

  translatePigLatin("eight") should return "eightway".

  Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return "artzschway".

  Should handle words without vowels. translatePigLatin("rhythm") should return "rhythmay".
*/

// Estudar REGEX POAR
function translatePigLatin(str) {
  const regexv = /^[aeiou]/;
  const regexc = /^([^aeiou])+/g;

  if (regexv.test(str)) {
    return str + "way";
  } else {
    const lenCons = str.match(regexc)[0].length;
    /* console.log(lenCons);
    console.log(str.substring(lenCons)); */

    return str.substring(lenCons) + str.match(regexc)[0] + "ay";
  }
}

// console.log(translatePigLatin("schwartz")); // "artzschway"

// translatePigLatin("pppalgoritmhs");

function pairElement(str) {
  const arrPair = [];
  const dna = str.split("");

  for (let el of dna) {
    switch (el) {
      case "G":
        arrPair.push(["G", "C"]);
        break;
      case "C":
        arrPair.push(["C", "G"]);
        break;
      case "A":
        arrPair.push(["A", "T"]);
        break;
      case "T":
        arrPair.push(["T", "A"]);
        break;
      default:
        console.log("Invalid Genetic Sequece!");
    }
  }

  return arrPair;
}

// console.log(pairElement("GCG"));

// The ASCII value of the lowercase alphabet is from 97 to 122
// fearNotLetter("abce") should return "d".

function fearNotLetter(str) {
  // iterar sobre a str
  // checar se ascii(pos[x]) - ascii(pos[x + 1] === 1);

  for (let i = 0; i < str.length; i++) {
    // console.log(str.charCodeAt(i), str.charCodeAt(i + 1));
    if (str.charCodeAt(i) - str.charCodeAt(i + 1) !== -1) {
      if (str.charCodeAt(i) + 1 > 122) return undefined;
      console.log(str.charCodeAt(i) + 1);
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }

  return str;
}

// console.log(fearNotLetter("abce"));
// console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

function uniteUnique(...arr) {
  const unifiedArr = [];
  const resArr = [];
  arr.map((curr) => {
    for (let i = 0; i < curr.length; i++) {
      unifiedArr.push(curr[i]);
    }
  });

  unifiedArr.filter((value) => {
    // resArr.push(value);
    // Verifica se o item existe no array, se não, joga pra dentro
    if (resArr.indexOf(value) === -1) {
      resArr.push(value);
    }
    // console.log(value);
  });

  return resArr;
}

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

function convertHTML(str) {
  // iterate over the splited str
  const splitedStr = str.split("");

  for (let i = 0; i < splitedStr.length; i++) {
    switch (splitedStr[i]) {
      case "&":
        splitedStr.splice(i, 1, "&amp;");
        break;
      case "<":
        splitedStr.splice(i, 1, "&lt;");
        break;
      case ">":
        splitedStr.splice(i, 1, "&gt;");
        break;
      case "<>":
        splitedStr.splice(i, 1, "&lt;&gt;");
        break;
      case "'":
        splitedStr.splice(i, 1, "&apos;");
      case '"':
        splitedStr.splice(i, 1, "&quot;");
    }
  }

  for (let j = 0; j < splitedStr.join("").split("").length; j++) {
    switch (splitedStr.join("").split("")[j]) {
      case '"':
        console.log("MATHC");
        splitedStr.join("").split("").splice(j, 1, "&quot");
    }
  }

  return splitedStr.join("");
}

//console.log(convertHTML('Stuff in "quotation marks"'));
//console.log(convertHTML("Hamburgers < Pizza < Tacos"));
// convertHTML("Dolce & Gabbana") should return "Dolce &amp; Gabbana".

//Fibonacci, 1, 1, 2, 3, 5, 8 so on

/* let prev = 0;
let actual = 1;
let next = 0; */
/* console.log(prev)
console.log(actual); */
/* for (let i = 1; i <= 10; i++) {
  next = actual + prev; // 2
  prev = actual; // 1
  actual = next;
  console.log(actual);
} */

// Função pega do freecodeCamp
function sumFibs(num) {
  var prevNumber = 0;
  var currNumber = 1;
  var result = 0;
  while (currNumber <= num) {
    result += currNumber;

    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

//Versão 2

function sumFibs2(num) {
  // Perform checks for the validity of the input
  if (num <= 0) return 0;

  // Create an array of fib numbers till num
  const arrFib = [1, 1];
  let nextFib = 0;

  // We put the new Fibonacci numbers to the front so we
  // don't need to calculate the length of the array on each
  // iteration
  while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
    arrFib.unshift(nextFib);
  }

  // We filter the array to get the odd numbers and reduce them to get their sum.
  return arrFib.filter((x) => x % 2 != 0).reduce((a, b) => a + b);
}

// test here
//sumFibs(4);

// console.log(sumFibs(10));

const isPrime = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return n > 1;
};

function sumPrimes(num) {
  let res = 0;
  for (let i = 0; i <= num; i++) {
    if (isPrime(i)) {
      // console.log('Primo');
      res += i;
    }
  }

  return res;
}

function smallestCommons(arr) {
  // Setup [2, 10]
  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;
  // Largest possible value for SCM
  console.log("numberDivisors Stands for:", numberDivisors);
  let upperBound = 1;
  console.log("min:", min);
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }
  console.log("Upper bound stands for: " + upperBound);
  // Test all multiples of 'max'
  console.log("Max stand for:", max);
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      // Count divisors
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}

function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  // Largest possible value for SCM
  const upperBound = range.reduce((prod, curr) => prod * curr);
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    const divisible = range.every((value) => multiple % value === 0);
    if (divisible) {
      return multiple;
    }
  }
}

function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  // GCD of two numbers
  // https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclid's_algorithm
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  // LCM of two numbers
  // https://en.wikipedia.org/wiki/Least_common_multiple#Using_the_greatest_common_divisor
  const lcm = (a, b) => (a * b) / gcd(a, b);
  // LCM of multiple numbers
  // https://en.wikipedia.org/wiki/Least_common_multiple#Other
  return range.reduce((multiple, curr) => lcm(multiple, curr));
}

function smallestCommons(arr) {
  let primeFactors = {};
  const [min, max] = arr.sort((a, b) => a - b);
  for (let i = min; i <= max; i++) {
    // Factorize number in range
    let primes = getPrimeFactors(i);
    for (let j in primes) {
      // Add factor to set or update number of occurrences
      if (!primeFactors[j] || primes[j] > primeFactors[j]) {
        primeFactors[j] = primes[j];
      }
    }
  }
  // Build SCM from factorization
  let multiple = 1;
  for (let i in primeFactors) {
    multiple *= i ** primeFactors[i];
  }
  return multiple;
}

// Compute prime factors of a number
function getPrimeFactors(num) {
  const factors = {};
  for (let prime = 2; prime <= num; prime++) {
    // Count occurances of factor
    // Note that composite values will not divide num
    while (num % prime === 0) {
      factors[prime] = factors[prime] ? factors[prime] + 1 : 1;
      num /= prime;
    }
  }
  return factors;
}

function smallestCommons(arr) {
  function isValidMultiple(m, min, max) {
    for (var i = min; i < max; i++) {
      if (m % i !== 0) {
        return false;
      }
    }

    return true;
  }

  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var multiple = max;

  while (!isValidMultiple(multiple, min, max)) {
    multiple += max;
  }

  return multiple;
}

console.log(smallestCommons([1, 5])); // should return 2520

// Neat recursive way
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

console.log(gcd(5, 10));
