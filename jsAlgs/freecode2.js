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
