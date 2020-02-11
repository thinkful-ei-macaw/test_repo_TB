'use strict';
console.log('Hi, my name is Brandon and I am 27 years old');

function createGreeting(name, age) {
  return `Hello, my name is ${name} and I'm ${age}!`;
}

let studentName1 = 'Brandon';
let studentName2 = 'Trina';
let studentAge1 = 27;
let studentAge2 = 25;

console.log(createGreeting(studentName1, studentAge1));
console.log(createGreeting(studentName2, studentAge2));