// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  return Math.max(num1, num2);
}



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(array) {
  if (!Array.isArray(array)) {
    throw `TypeError: The argument passed to findLongestWord must be an array!`;
  }
  if (array.length === 0) {
    return null;
  }

  let longestWord = ``;
  let longestWordLength = 0;

  array.forEach(word => {
    if (typeof word !== `string`) {
      return;
    }

    const wordLength = word.length;

    if (wordLength > longestWordLength) {
      longestWordLength = wordLength;
      longestWord = word;
    }
  });

  return longestWord;
}



// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
  if (!Array.isArray(array)) {
    throw `TypeError: The argument passed to sumNumbers must be an array!`;
  }

  let sum = 0;

  array.forEach(number => {
    if (typeof number !== `number`) {
      return;
    }
    sum += number;
  });

  return sum;
}



// Iteration #3.1 Bonus:
function sum(array) {
  if (!Array.isArray(array)) {
    throw `TypeError: The argument passed to sum must be an array!`;
  }

  let sum = 0;

  array.forEach(element => {
    if (typeof element === `string`) {
      element = element.length;
    } else if (typeof element === `boolean`) {
      element ? 1 : 0;
    } else if (typeof element !== `number`) {
      throw `Unsupported data type sir or ma'am`;
    }

    sum += element;
  })

  return sum;
}



// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
  if (!Array.isArray(array)) {
    throw `TypeError: The argument passed to averageNumbers must be an array!`;
  }

  const arrayLength = array.length;

  if (!arrayLength) {
    return null;
  }

  return sumNumbers(array) / arrayLength;
}


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(array) {
  return avg(array, false);
}

// Bonus - Iteration #4.1
function avg(array, fixedOn = true) {
  if (!Array.isArray(array)) {
    throw `TypeError: The argument passed to avg must be an array!`;
  }

  const arrayLength = array.length;

  if (!arrayLength) {
    return null;
  }

  return fixedOn ? parseFloat((sum(array) / arrayLength).toFixed(2)) : sum(array) / arrayLength;
}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(array) {
  if (!Array.isArray(array)) {
    throw `TypeError: The argument passed to uniquifyArray must be an array!`;
  }

  let uniqueArray = [];

  array.forEach(element => {
    if (!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  });

  return uniqueArray.length ? uniqueArray : null;
}



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(array, word) {
  if (!Array.isArray(array)) {
    throw `Type Error: The first argument must be an array!`;
  }
  if (array.length === 0) {
    return null;
  }

  let result = false;
  array.forEach(element => {
    if (element === word) {
      result = true;
    }
  });

  return result;
}



// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(array, word) {
  if (!Array.isArray(array)) {
    throw `Type Error: The first argument must be an array!`;
  }

  let count = 0;

  array.forEach(element => {
    if (element === word) {
      count++;
    }
  });

  return count;
}



// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct(matrix) {
  let greatestP = 0;

  // horizontal greatest product
  matrix.forEach(array => {
    for (let i = 3; i < array.length; i++) {
      const hProduct = array[i] * array[i - 1] * array[i - 2] * array[i - 3];

      if (hProduct > greatestP) {
        greatestP = hProduct;
      }
    }
  });

  // vertical greatest product
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 3; j < matrix.length; j++) {
      const vProduct = matrix[j][i] * matrix[j - 1][i] * matrix[j - 2][i] * matrix[j - 3][i];

      if (vProduct > greatestP) {
        greatestP = vProduct;
      }
    }
  }

  return greatestP;
}


function greatestProductOfDiagonals(matrix) {
  let greatestProduct = 0;

  let i = 0;
  let j = 0;
  // greatest product of 45 diagonal
  while (j < matrix.length || i < matrix[0].length) {
    let h = i < matrix.length ? i : i - 1;
    let v = j;
    let product = matrix[v][h];


    while (matrix[v] !== undefined && matrix[v][h] !== undefined) {
      for (let j = 0; j < 3; j++) {
        // console.log(product);
        v++;
        h--;

        if (matrix[v] !== undefined && matrix[v][h] !== undefined) {
          product *= matrix[v][h];
        }
      }

      if (product > greatestProduct) {
        greatestProduct = product;
      }

      v -= 2;
      h += 2;
      if (matrix[v] !== undefined && matrix[v][h] !== undefined) {
        product = matrix[v][h];
      }
    }

    if (i < matrix[0].length) {
      i++;
    } else {
      j++;
    }
  }

  // greatest product of -45 diagonal
  i = matrix[0].length - 1;
  j = 0;

  while (j < matrix.length || i >= 0) {
    let h = i > 0 ? i : 0;
    let v = j;
    let product = matrix[v][h];


    while (matrix[v] !== undefined && matrix[v][h] !== undefined) {
      for (let j = 0; j < 3; j++) {
        // console.log(product);
        v++;
        h++;

        if (matrix[v] !== undefined && matrix[v][h] !== undefined) {
          product *= matrix[v][h];
        }
      }

      if (product > greatestProduct) {
        greatestProduct = product;
      }

      v -= 2;
      h -= 2;
      if (matrix[v] !== undefined && matrix[v][h] !== undefined) {
        product = matrix[v][h];
      }
    }

    if (i >= 0) {
      i--;
    } else {
      j++;
    }
  }


  return greatestProduct;
}

console.log(greatestProductOfDiagonals(matrix));





// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
