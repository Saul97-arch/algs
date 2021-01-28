function titleCase(str) {
  const arr = str.split(" ");
  let frase = "";
  for (let i = 0; i < arr.length; i++) {
    // pegar primeira letra da posição i
    // somar com o resto da posição i
    let letter = arr[i].charAt(0).toUpperCase();
    arr[i] = letter + arr[i].slice(1).toLowerCase();
  }
  console.log(arr.join(" "));
  return arr.join(" ");
}

//titleCase("sHoRt AnD sToUt");

// titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.

// frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].

function frankenSplice(arr1, arr2, n) {
  const modif = arr2.slice(0);
  modif.splice(n, 0, ...arr1);
  return modif;
}

//console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

function bouncer(arr) {
  const truValues = [];
  for (let i = 0; i < arr.length; i++) {
    if (!!arr[i]) {
      truValues.push(arr[i]);
    }
  }
  return truValues;
}

// console.log(bouncer([7, "ate", "", false, 9]));

function getIndexToIns(arr, num) {
  // Ordenar o array
  // Varrer o array
  // Inserir
  const sortedArr = arr.sort((a, b) => a - b);
  let i;
  for (i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] >= num) {
      return i;
    }
  }
  return i;
}

/* 
console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([2, 5, 10], 15)); */

// Varrer o o item 2 do array , e verificar se cada letra do mesmo está presente no arr1
// Retornar falso se não estiver incluido

function mutation(arr) {
  let pos1 = arr[0].toLowerCase().split("").sort().join("");
  let pos2 = arr[1].toLowerCase().split("").sort().join("");

  for (let letter of pos2) {
    if (!pos1.includes(letter)) {
      return false;
    }
  }

  return true;
}

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let aux = size;
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, aux));
    aux += size;
  }

  return newArr;
}

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

let arr = ["a", "b", "c", "d"];
/* console.log(arr.slice(0, 2))
console.log(arr.slice(2, 4)); // +2 */

/* chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]]. */

let watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    Plot:
      "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    Metascore: "82",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot:
      "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    Metascore: "70",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot:
      "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    Metascore: "83",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
    Response: "True",
  },
];

/* let ratings = [];

watchList.map((curr) => {
  ratings.push({title: curr.Title, rating: curr.imdbRating });
}); */

//console.log(ratings);
/* let rating = [];
console.log(
  watchList
    .filter((curr) => curr.imdbRating >= 8)
    .map((curr) => rating.push({ title: curr.Title, rating: curr.imdbRating }))
);

console.log(rating); */

function getRating(watchList) {
  let nolanCounter = 0;
  var averageRating =
    watchList
      .filter((curr) => {
        if (curr.Director === "Christopher Nolan") {
          nolanCounter++;
          return curr.Director;
        }
      })
      .map((curr) => {
        return {
          rating: parseFloat(curr.imdbRating),
        };
      })
      .reduce((avg, curr) => {
        // console.log(avg);
        return avg + curr.rating;
      }, 0) / nolanCounter;

  return averageRating;
}

// console.log(getRating(watchList));

// let r1 = getRating(watchList);

// console.log(typeof r1[0].rating);

const squareList = (arr) => {
  // Only change code below this line
  return arr
    .filter((curr) => {
      return curr > 0;
    })
    .map((curr) => curr ** 2);
  // Only change code above this line
};

// console.log(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]));

