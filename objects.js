'use strict';

//======= Task 1 (isPlainObject) =======
/*
* Task description: Write a method that verifies an argument is a plain object, not an array or null
* Expected Result: True if object is plain, false otherwise. ({ a: 1 }) => true, ([1, 2, 3]) => false
*/
const isPlainObject = el => typeof el === 'object' && !Array.isArray(el) && el !== null;
console.log('isPlainObject: ', isPlainObject([1, 2, 3]));

//======= Task 2 (makePairs) =======
/*
* Task description: Write a method that returns a deep array like [[key, value]]
* Expected Result: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
*/

//------- Solution 1 -------
const makePairs_1 = obj => Object.entries(obj);
console.log('makePairs 1: ', makePairs_1({ a: 1, b: 2, c: 3 }));

//------- Solution 2 -------
const makePairs_2 = obj => Object.keys(obj).map(key => [key, obj[key]]);
console.log('makePairs 2: ', makePairs_2({ a: 1, b: 2, c: 3 }));

//------- Solution 3 -------
function makePairs_3(obj) {
  const newArray = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newArray.push([key, obj[key]])
    }
  }
  return newArray
}
console.log('makePairs 3: ', makePairs_3({ a: 1, b: 2, c: 3 }));

//======= Task 3 (without) =======
/*
* Task description: Write a method that returns a new object without provided properties
* Expected Result: ({ a: 1, b: 2 }, 'b') => { a: 1 }
*/
function without(obj, ...args) {
  args.forEach(key => delete obj[key]);
  return obj;
}
console.log('without: ', without({ a: 1, b: 2 }, 'b'));

//======= Task 4 (isEmpty) =======
/*
* Task description: Write a method that makes a shallow check is object empty
* Expected Result: ({}) => true, ({ a: undefined }) => true, ({ a: 1 }) => false
* Empty values: '', null, NaN, undefined
*/

//------- Solution 1 -------
const isEmpty_1 = obj => !Object.values(obj).filter(key => key).length;
console.log('isEmpty 1: ', isEmpty_1({}));

//------- Solution 2 -------
const isEmpty_2 = obj => !Object.keys(obj).length || !Object.values(obj).filter(key => key).length;
console.log('isEmpty 2: ', isEmpty_2({ a: undefined }));

//------- Solution 3 -------
const isEmpty_3 = obj => !Object.keys(obj).length || !Object.values(obj).filter(key => key || key === 0 || key === false).length;
console.log('isEmpty 3: ', isEmpty_3({ a: 1 }));

//======= Task 5 (isEqual) =======
/*
* Task description: Write a method that makes a shallow compare of two objects
* Expected Result: True if objects are identical, false if objects are different ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
*/

//------- Solution 1 -------
function isEqualObj_1(firstObj, secondObj) {
  if (Object.keys(firstObj).length === Object.keys(secondObj).length) {
    for (const key in firstObj) {
      if (!firstObj.hasOwnProperty(key)
        || !secondObj.hasOwnProperty(key)) {
        return false;
      }
      if (firstObj[key] !== secondObj[key]) {
        return false;
      }
    }
    return true;
  } else return false;
}
console.log('isEqualObj 1: ', isEqualObj_1({ a: 1, b: 1 }, { a: 1, b: 1 }));

//------- Solution 2 -------
function isEqualObj_2 (firstObj, secondObj) {
  const firstObjKeys = Object.keys(firstObj);
  const secondObjKeys = Object.keys(secondObj);
  if (firstObjKeys.length !== secondObjKeys.length) {
    return false;
  }
  return !firstObjKeys.filter((key) => firstObj[key] !== secondObj[key]).length;
}
console.log('isEqualObj 2: ', isEqualObj_2({ a: 1, b: 1 }, { a: 1, b: 1 }));

//======= Task 6 (invoke) =======
/*
* Task description: Write a method that invokes an array method on a specific path
* Expected Result: ({ a: { b: [1, 2, 3] } }, 'a.b', 'splice', [1, 2]) => [2, 3]
*/
function invoke(object, path, func, args) {
  const splittedPath = path.split('.');
  const target = splittedPath.reduce((acc, key) => {
    acc = acc[key] ? acc[key] : object[key];
    return acc;
  }, {});
  return Array.prototype[func].apply(target, args);
};
console.log('invoke: ', invoke({ a: { b: [1, 2, 3] } }, 'a.b', 'splice', [1, 2]));

//======= Task 7 (isEmptyDeep) =======
/*
* Task description: Write a method that makes a deep check is an object empty
* Empty values: '', null, NaN, undefined, [], {}
* Expected Result: ({}) => true, ({ a: { b: undefined } }) => true, ({ a: { b: [] } }) => true
*/

//------- Solution 1 -------
function isEmptyDeep_1(obj) {
  if (!Object.keys(obj).length) {
    return true;
  }
  const recursiveIsEmptyDeep = object => 
    Object.values(object).filter(key => typeof key === 'object' ? recursiveIsEmptyDeep(key) : key).length;
  const result = !recursiveIsEmptyDeep(obj);
  return result;
}
console.log('isEmptyDeep 1: ', isEmptyDeep_1({ a: { b: [] } }));

//------- Solution 2 -------
const isEmptyDeep_2 = (el) => {
  if (el === null) {
    return true;
  }
  if (Array.isArray(el)) {
    if (el.length === 0) {
      return true;
    }

    let result;
    for (let i = 0; i < el.length; i += 1) {
      if (typeof el[i] === 'boolean' || (typeof el[i] === 'number' && !Number.isNaN(el[i]))
        || (typeof el[i] === 'string' && el[i] !== '')) {
        result = false;
        break;
      }
      if (Array.isArray(el[i]) || (typeof el[i] === 'object' && el[i] !== null)) {
        result = isEmptyDeep_2(el[i]);
        break;
      }

      result = true;
    }

    return result;
  }
  if (typeof el === 'object') {
    const objectKeys = Object.keys(el);
    if (objectKeys.length === 0) {
      return true;
    }

    let result;
    for (let i = 0; i < objectKeys.length; i += 1) {
      const value = el[objectKeys[i]];

      if (typeof value === 'boolean' || (typeof value === 'number' && !Number.isNaN(value))
        || (typeof value === 'string' && value !== '')) {
        result = false;
        break;
      }
      if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
        result = isEmptyDeep_2(value);
        break;
      }

      result = true;
    }

    return result;
  }
};
console.log('isEmptyDeep 2: ', isEmptyDeep_2({ a: { b: undefined } }));

//======= Task 8 (isEqualDeep) =======
/*
* Task description: Write a method that makes a deep compare of two objects
* Expected Result: True if objects are equal, false if objects are different ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true
*/

//------- Solution 1 -------
function isEqualDeepObj_1(firstObj, secondObj) {
  let result = false;

  if (Object.keys(firstObj).length !== Object.keys(secondObj).length) {
    return result = false;
  }

  const firstObjKeys = Object.keys(firstObj);
  const secondObjKeys = Object.keys(secondObj);

  if (firstObjKeys.length === 0 && secondObjKeys.length === 0) {
    return result = true;
  }

  for (const el of firstObjKeys) {
    if (typeof firstObj[el] === 'object') {
      return isEqualDeepObj_1(firstObj[el], secondObj[el]);
    }
    if (firstObj[el] !== secondObj[el]) {
      return result = false;
    }

    result = true;
  }

  return result;
}
console.log('isEqualDeepObj 1: ', isEqualDeepObj_1({ a: 1, b: { c: 1, p: {} }}, { a: 1, b: { c: 1, p: {} }}));

//------- Solution 2 -------
const isEqualDeepObj_2 = (firstObj, secondObj) => {
  const firstObjKeys = Object.keys(firstObj);
  const secondObjKeys = Object.keys(secondObj);

  if (firstObjKeys.length === 0 && secondObjKeys.length === 0) {
    return true;
  }

  const compareList = firstObjKeys.map((key) => {
    const valueOfFirstObject = firstObj[key];
    const valueOfSecondObject = secondObj[key];
    if ((Number.isNaN(valueOfFirstObject) && Number.isNaN(valueOfSecondObject))
      || (valueOfFirstObject === null && valueOfSecondObject === null)) {
      return true;
    }
    if (valueOfFirstObject === valueOfSecondObject) {
      return true;
    }
    if (Array.isArray(valueOfFirstObject) && Array.isArray(valueOfSecondObject)) {
      return isArraysEqualDeep(valueOfFirstObject, valueOfSecondObject);
    }
    if (typeof valueOfFirstObject === 'object' && typeof valueOfSecondObject === 'object') {
      return isEqualDeepObj_2(valueOfFirstObject, valueOfSecondObject);
    }

    return false;
  });

  return !compareList.includes(false) && !compareList.includes(undefined);
};

const isArraysEqualDeep = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  const compared = firstArray.map((el, id) => {
    if (Array.isArray(el) && Array.isArray(secondArray[id])) {
      return isArraysEqualDeep(el, secondArray[id]);
    }
    if (typeof el === 'object' && typeof secondArray[id] === 'object') {
      return isEqualDeepObj_2(el, secondArray[id]);
    }

    return secondArray[id] === el;
  });

  return !compared.includes(false);
};
console.log('isEqualDeepObj 2: ', isEqualDeepObj_2({ a: 1, b: { c: 1, p: {}  }, r: 1 }, { a: 1, b: { c: 1, p: {} }, r: 1 }));

//======= Task 9 (intersection) =======
/*
* Task description: Write a method that finds shallow intersections of objects
* Expected Result: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
*/
function intersectionObj(firstObj, secondObj) {
  const firstObjKeys = Object.keys(firstObj);

  return firstObjKeys.reduce((acc, key) =>
    firstObj[key] === secondObj[key] ? acc = { ...acc, [key]: firstObj[key], } : acc, {});
};
console.log('intersectionObj: ', intersectionObj({ a: 1, b: 2 }, { c: 1, b: 2 }));

//======= Task 10 (intersectionDeep) =======
/*
* Task description: Write a method that finds all intersections of objects
* Expected Result: ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }
*/
function intersectionDeepObj(firstObj, secondObj) {
  const firstObjKeys = Object.keys(firstObj);

  return firstObjKeys.reduce((acc, key) => {
    if (firstObj[key] === secondObj[key]) {
      acc = {
        ...acc,
        [key]: firstObj[key],
      };
    }
    if (Array.isArray(firstObj[key]) && Array.isArray(secondObj[key])) {
      const isEqualArrays = isEqualDeepObj_2(firstObj[key], secondObj[key]);

      if (isEqualArrays) {
        acc = {
          ...acc,
          [key]: firstObj[key],
        };
      }
    } else if (typeof firstObj[key] === 'object' && typeof secondObj[key] === 'object') {
      const hasIntersection = intersectionDeepObj(firstObj[key], secondObj[key]);

      if (Object.keys(hasIntersection).length !== 0) {
        acc = {
          ...acc,
          [key]: hasIntersection,
        };
      }
    }
    return acc;
  }, {});
};
console.log('intersectionDeepObj: ', intersectionDeepObj({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }));
