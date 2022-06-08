// Add answers here

// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};
// #### 1. Los or New?
// Create a function named "_nameOfCity_". If a passed string begins with "_Los_" or "_New_", then return the full string. If not, return "_The city name does not begin with Los or New_". The function should be **case insensitive**.
function nameOfCity (str1) {
if ( str1.slice(0, 3) .toLowerCase () === "los" || str1.slice(0, 3) .toLowerCase () === "new") {
return str1}
else {
    return "The city name does not begin with Los or New"
}
}
console.log (nameOfCity("New york"))

// #### 2. isDivisible?
// Create a function named "_isDivisible_". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false.
function isDivisible(num1) {
  if (num1 % 100 === 0) return true;
  else {
    return false;
  }
}

console.log(isDivisible(100));

// #### 4. What's the weather?
// Use a **ternary operator** to complete this task. Create a function named "_isRaining_". If passed `true`, return "_wet day - you need an umbrella_". If passed `false`, return "_dry day - leave your umbrella at home_".

// ##### Example
// ````javascript
// isRaining(true) ➞ 'wet day - you need an umbrella'
function isRaining(str1) {
  return str1 === true   ? "wet day - you need an umbrella" : "dry day - leave your umbrella at home";
}
console.log(isRaining(true));

// #### 1. Sequence
// Create a function named "_geometricalSequence_" and **use a loop** to return the following sequence: _`1 2 4 8 16 32 64 128 256`_. Concatenate each value to a string and return a string.

// ##### Example
// ````javascript
// geometricalSequence() ➞ '1 2 4 8 16 32 64 128 256'
// ````
function geometricalSequence() {
  let text = "";
  for (let i = 0; i < 9; i++) {
    text += Math.pow(2, i) + " "

  }
return text;
}
console.log (geometricalSequence());

// #### 2. Multiples
// Create a function named "_multiplesOfThree_" and **use a loop** to return the first five multiples of three: _`3 6 9 12 15`_. Concatenate each value to a string and return a string.

// ##### Example
// ````javascript
// multiplesOfThree() ➞ '3 6 9 12 15'
function multiplesOfThree() {
  let second = "";
  for (let i = 3; i < 18; i += 3) {
    second += [i] * 1 + " ";

  }
  return second
}
console.log (multiplesOfThree());

// #### 1. You've got the power
// Create a function named "_powerOf_" which takes an integer as an argument and returns the integer to the power of itself. You should **use a Math object method** to make the calculation.

// ##### Examples
// ````javascript
// powerOf(3) ➞ 27 3 * 3  * 3 = 9 * 3 27
// powerOf(4) ➞ 256 4 * 4 * 4 * 4 =
// ````
function powerOf(m) {
  console.log(Math.pow(m, m));
  return;
}
powerOf(4);

// ### Problem Solving

// #### 1. How many?
// Create a function named "_vowelCount_" that accepts a string as an argument. Check how many vowels (A, a, E, e, I, i, O, o, U, u) the string contains, if any. **Return the vowel count** of the string.

// ##### Examples
// ````javascript
// vowelCount("hello") ➞ 2
// vowelCount("test") ➞ 1
// vowelCount("fbw") ➞ 0
// ````
// program to count the number of vowels in a string

// defining vowels
const vowelCount = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];

function countVowel(str) {
  let count = 0;

  for (let letter of str.toLowerCase()) {
    if (vowelCount.includes(letter)) {
       count++;
    }
  }

  return console.log (count);
}

countVowel("hello");