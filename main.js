'use strict';

//======= Task 1 =======
const str0 = 'test0';
const str1 = 'test1';

// method returns the length of the string
console.log(`result: ${str0.length}`);

// get the character that occupies position 0 (the first character)
console.log(`result: ${str0[0]}`);

// get the character that occupies position 0 (the first character)
console.log(`result: ${str0.charAt(0)}`);

// method returns the calling string value converted to upper case
console.log(`result: ${str0.toUpperCase()}`);

// method returns the calling string value converted to lower case
console.log(`result: ${str0.toLowerCase()}`);

// method concatenates the string arguments to the calling string and returns a new string
console.log(`result: ${str0.concat(' ', str1)}`);

// method searches the entire calling string, and returns the index of the first occurrence of the specified substring or returns -1 if the substring is not found in the string
console.log(`result: ${str0.indexOf('es')}`);

// method search for, searches the entire calling string, and returns the index of the last occurrence of the specified substring or returns -1 if the substring is not found in the string
console.log(`result: ${str0.lastIndexOf('st')}`);

// method performs a case-sensitive search to determine whether substring may be found within the string, returning true or false as appropriate
console.log(`result: ${str0.includes('es')}`);

// optional 2nd parameter in "includes" method - "position" within the string at which to begin searching for substring
console.log(`result: ${str0.includes('es', 3)}`);

// method executes a search for a match between a substring and this String object, returns index of the first match or -1 if no match was found
console.log(`result: ${str0.search('es')}`);

// method executes a search for a match between a substring and the string, returns  an Array whose contents depend on the presence or absence of the global (g) flag, or null if no matches are found
console.log(`result: ${str0.match('es')}`);

// method str.replace(substr, newSubStr) returns a new string "str" with some or all matches of a pattern "substr" replaced by a replacement "newSubStr". If pattern is a string, only the first occurrence will be replaced
console.log(`replace: ${str0.replace('est', 'ask')}`);

// method str.replaceAll(substr, newSubStr) returns a new string "str" with all matches of a pattern "substr" replaced by a replacement "newSubStr"
console.log(`replace: ${str0.replaceAll('est', 'ask')}`);

// method determines whether a string begins with the characters of a specified string, returning true or false as appropriate
console.log(`result: ${str0.startsWith('te')}`);

// method determines whether a string ends with the characters of a specified string, returning true or false as appropriate
console.log(`result: ${str0.endsWith('st')}`);

// method split(s) divides a String into an ordered list of substrings by the "s" separator, puts these substrings into an array, and returns the array
console.log(`result: ${str0.split('')}`);

// str.slice(start [, end]) method returns the part of the string between the start and (not including) end indexes
console.log(`result: ${str0.slice(1, 3)}`);

// if the end argument is not specified, slice method returns the part of the string from the start to the end
console.log(`result: ${str0.slice(1)}`);

// str.substring(start [, end]) method returns the part of the string between the start and (not including) end indexes, or to the end of the string
console.log(`result: ${str0.substring(1, 3)}`);

// str.substr(start [, length]) method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards
console.log(`result: ${str0.substr(1, 3)}`);

// method returns a non-negative integer that is the Unicode code point value at the given position
console.log(`result: ${str0.codePointAt(0)}`);

// method returns a string created by using the specified sequence of code points
console.log(`result: ${String.fromCodePoint(90)}`);

// method returns the Unicode Normalization Form of the string
console.log(`result: ${str0.normalize()}`);

// method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together
console.log(`result: ${str0.repeat(2)}`);

// method removes whitespace from both ends of a string and returns a new string, without modifying the original string
console.log(`result: ${str0.trim()}`);

//======= Task 2 =======

//------- Solution 1 -------
const str2 = 'https://inc4.net/what-can-cedefi-bring-to-the-crypto-industry/';

// to get the domain from a string, look for the start and end of a substring
const domainStart = str2.includes('//') ? str2.indexOf('//') + 2 : 0;
const domainEnd = str2.indexOf('/', domainStart);

// get the domain name using the "substring" method
const domain = str2.substring(domainStart, domainEnd);
console.log('domain: ', domain);

// to get the article title from a string, look for the start and end of the substring
const articleStart = domainEnd + 1;
const articleEnd = str2.endsWith('/') ? str2.length - 1 : str2.length;

// get the article title using the "substring" method
const article = str2.substring(articleStart, articleEnd)
                            .split('-') // turn the string into an array by splitting it on the "-" separator
                            .map(word => word[0].toUpperCase() + word.substr(1)) // capitalize each word
                            .join(' '); // concatenate an array into a string
console.log('article: ', article);

//------- Solution 2 -------
const url = new URL('https://inc4.net/what-can-cedefi-bring-to-the-crypto-industry/');

// get the domain name
console.log(`domain: ${url.hostname}`);

// get the article title
console.log(`article: ${url.pathname
                                .slice(1, -1) // remove "/" characters at the beginning and at the end of the string
                                .split('-')
                                .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ')}`);

//======= Task 3 =======
const num1 = 1234567;
const num2 = 1237.575;
const numAsStr1 = '1234567';
const numAsStr2 = '12.575';

// converts a string or other value to the Number type
console.log(`result: ${typeof Number(numAsStr1)}`);

// method determines whether the passed value is a finite number, return boolean value true if the given value is a finite number
console.log(`result: ${Number.isFinite(num1)}`);

// method determines whether the passed value is an integer
console.log(`result: ${Number.isInteger(num1)}`);

// method determines whether the passed value is NaN or not
console.log(`result: ${Number.isNaN(num1)}`);

// method determines whether the provided value is a number that is a safe integer
console.log(`result: ${Number.isSafeInteger(num1)}`);
console.log(`result: ${Number.isSafeInteger(num2)}`);

// convert the string character by character as long as possible and return a floating point number
console.log(`result: ${Number.parseFloat(numAsStr2)}`);

// convert the string character by character as long as possible and return an integer
console.log(`result: ${Number.parseInt(numAsStr2)}`);

// method returns a string representing the Number object in exponential notation
console.log(`result: ${num2.toExponential(2)}`);

// method formats a number using fixed-point notation
console.log(`result: ${num2.toFixed(2)}`);

// method returns a string with a language-sensitive representation of this number
console.log(`result: ${num2.toLocaleString('en-US')}`);

// method returns a string representing the Number object to the specified precision
console.log(`result: ${num2.toPrecision(5)}`);

// numObj.toString([radix]) method returns a string representing the specified Number object. radix - optional parameter. An integer in the range 2 through 36 specifying the base to use for representing numeric values
console.log(`result: ${num1.toString(2)}`);

// method returns the wrapped primitive value of a Number object
console.log(`result: ${num2.valueOf()}`);
