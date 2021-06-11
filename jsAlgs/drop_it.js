function dropElements(arr, func) {
  const ol = arr.length;
  for (let i = 0; i < ol; i++) {
    if (!func(arr[0])) {
      arr.shift();
    } else {
      break;
    }
  }

  return arr;
}

function steamrollArray(arr) {
  const flat = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      flat.push(arr[i]);
    } else {
        arr[1]
    }
  }


  return arr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
