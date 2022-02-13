'use strict';

//======= Task 1 (fill) =======
/*
* Task description: Write a method that creates a new array with given values
* Expected Result: (3, 'a') => ['a', 'a', 'a']
*/

//------- Solution 1 -------
function fill_1() {
  const array = Array.from(arguments);
  return array;
}
console.log('fill 1:', fill_1(1, 2, 3));

//------- Solution 2 -------
function fill_2(...args) {
  return args;
}
console.log('fill 2:', fill_2(1, 2, 3));

//------- Solution 3 -------
function fill_3(arrLength, arg) {
  const array = [];
  for (let i = 0; i < arrLength; i++) {
    array.push(arg);
  }
  return array;
}
console.log('fill 3:', fill_3(3, 3));

//------- Solution 4 -------
const fill_4 = (arrLength, arg) => new Array(arrLength).fill(arg);
console.log('fill 4:', fill_4(3, 3));

//======= Task 2 (reverse) =======
/*
* Task description: Write a method that reverts input array
* Expected Result: [1, 2, 3] => [3, 2, 1]
*/

//------- Solution 1 -------
function reverse_1(array) {
  const iterationCount = array.length - 1;
  for (let i = 0; i < iterationCount; i++) {
    const lastValue = array.pop();
    array.splice(i, 0, lastValue);
  }
  return array;
}
console.log('reverse 1:', reverse_1([1, 2, 3, 4, 5]));

//------- Solution 2 -------
const reverse_2 = array => array.reverse();
console.log('reverse 2:', reverse_2([1, 2, 3, 4, 5]));

//------- Solution 3 -------
const reverse_3 = (array) => array.map((el, id, givenArr) => el = givenArr[givenArr.length - id - 1]);
// const reverse_3 = (array) => array.map((el, id, givenArr) => givenArr[givenArr.length - id - 1]);
console.log('reverse 3:', reverse_3([1, 2, 3, 4, 5]));

//======= Task 3 (compact) =======
/*
* Task description: Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null
* Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
*/
const compact = array => array.filter(el => el);
console.log('compact: ', compact([0, 1, false, 2, undefined, '', 3, null]));

//======= Task 4 (fromPairs) =======
/*
* Task description: Write a method that returns an object composed of key-value pairs
* Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
*/

//------- Solution 1 -------
function fromPairs_1(array) {
  const obj = {};
  array.map(el => obj[el[0]] = el[1]);
  return obj;
}
console.log('fromPairs 1: ', fromPairs_1([['a', 1], ['b', 2], ['c', 3]]));

//------- Solution 2 -------
const fromPairs_2 = array =>
  array.reduce((accObj, el) =>
    Array.isArray(el) ? Object.assign(accObj, {[el[0]]: el[1]}) : accObj, {});
console.log('fromPairs 2: ', fromPairs_2([['a', 1], ['b', 2], ['c', 3]]));

//------- Solution 3 -------
const fromPairs_3 = array =>
  array.reduce((accObj, el) => {
    if (Array.isArray(el)) {
    accObj[el[0]] = el[1];
    }
    return accObj;
  }, {});
console.log('fromPairs 3: ', fromPairs_3([['a', 1], ['b', 2], ['c', 3]]));

//======= Task 5 (without) =======
/*
* Task description: Write a method that returns an array without listed values
* Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3]
*/

//------- Solution 1 -------
const without_1 = (array, ...args) => array.filter(arrayEl => args.every(argsEl => argsEl !== arrayEl));
console.log('without 1: ', without_1([1, 2, 3, 4, 1, 5, 2], 1, 2));

//------- Solution 2 -------
function without_2(array) {
  let filteredArray = [...array];
  for (let i = 1; i < arguments.length; i ++) {
    filteredArray = filteredArray.filter((el) => el !== arguments[i]);
  }
  return filteredArray;
}
console.log('without 2: ', without_2([1, 2, 3, 4, 1, 5, 2], 1, 2));

//======= Task 6 (unique) =======
/*
* Task description: Write a method that returns a duplicate-free array
* Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3]
*/

//------- Solution 1 -------
const unique = array => Array.from(new Set(array));
console.log('unique 1: ', unique([1, 2, 3, 1, 2]));

//------- Solution 2 -------
const unique2 = array => array.filter((el, id) => array.indexOf(el) === id);
console.log('unique 2: ', unique([1, 2, 3, 1, 2]));

//======= Task 7 (isEqual) =======
/*
* Task description: Write a method that makes a shallow compare of two arrays and returns true if they are identical
* Expected Result: ([1, 2, 3], [1, 2, 3]) => true
*/

//------- Solution 1 -------
const isEqual_1 = (firstArray, secondArray) => {
  if (firstArray.length === secondArray.length) {
    return firstArray.every((firstArrayEl, id) => firstArrayEl === secondArray[id]);
  } else return false;
}
console.log('isEqual 1: ', isEqual_1([1, 2, 3], [1, 2, 3]));

//------- Solution 2 -------
const isEqual_2 = (firstArray, secondArray) => firstArray.length === secondArray.length
  ? firstArray.every((firstArrayEl, id) => firstArrayEl === secondArray[id])
  : false;
console.log('isEqual 2: ', isEqual_2([1, 2, 3], [1, 2, 3]));

//======= Task 8 (flatten) =======
/*
* Task description: Write a method that turns a deep array into a plain array
* Expected Result: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
*/

//------- Solution 1 -------
function flatten_1(array) {
  const newArray = [];
  function recursiveFlatten(array) {
    array.forEach(el => {
      if (Array.isArray(el)) {
        recursiveFlatten(el);
      } else newArray.push(el)
    })
  }
  recursiveFlatten(array);
  return newArray;
}
console.log('flatten 1: ', flatten_1([1, 2, [3, 4, [5]]]));

//------- Solution 2 -------
const flatten_2 = (array) => array.reduce((acc, el) => acc.concat(Array.isArray(el) ? flatten_2(el) : el), []);
console.log('flatten 2: ', flatten_2([1, 2, [3, 4, [5]]]));

//======= Task 9 (chunk) =======
/*
* Task description: Write a method that splits an array into parts of determined size
* Expected Result: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
*/

//------- Solution 1 -------
function chunk_1(array, size) {
  const arrayLength = array.length;
  const newArray = [];
  for (let i = 0; i < arrayLength; i += size) {
    newArray.push(array.slice(i, i + size))
  }
  return newArray;
}
console.log('chunk 1: ', chunk_1([1, 2, 3, 4, 5], 2));

//------- Solution 2 -------
const chunk_2 = (array, size) => {
  const chunkedArr = [];
  let id = 0;
  while (id < array.length) {
    chunkedArr.push(array.slice(id, size + id));
    id += size;
  }
  return chunkedArr;
};
console.log('chunk 2: ', chunk_2([1, 2, 3, 4, 5], 2));

//======= Task 10 (intersection) =======
/*
* Task description: Write a method that creates an array of unique values that are included in all given arrays
* Expected Result: ([1, 2], [2, 3]) => [2]
*/

//------- Solution 1 -------
const intersectionArr = (firstArr, secondArr) => {
  const result = firstArr.filter((el) => {
    const indexOfElement = secondArr.indexOf(el);
    if (indexOfElement >= 0) {
      return el;
    }
  });
  return Array.from(new Set(result));
};
// console.log('intersectionArr: ', intersectionArr([1, 2], [2, 3], [3, 5], [5, 6]));
console.log('intersectionArr: ', intersectionArr([1, 2], [2, 3]));

//------- Solution 2 -------
const intersectionArr_2 = (...arrays) => {
  const result = arrays[0].filter((element) => {
    const indexOfElement = arrays[1].indexOf(element);
    if (indexOfElement >= 0) {
      return element;
    }
  });
  // if (arrays.length > 2) {
  //   intersectionArr_2(result, ...arrays.slice(2, arrays.length));
  // }
  return Array.from(new Set(result));
};
// console.log('intersectionArr 2: ', intersectionArr_2([1, 2], [2, 3], [3, 5], [5, 6]));
console.log('intersectionArr: ', intersectionArr([1, 2], [2, 3]));
