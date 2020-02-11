/* eslint-disable no-console */
'use strict';
//console.log('Hi, my name is Brandon and I am 27 years old');
function getYearOfBirth(age){
  const YOB = 2020 - age;
  return YOB;
}
let name1 = 'Brandon';
let name2 = 'Trina';
let age1 = 27;
let age2 = 25;

function createGreeting(name, age) {
  return `Hello, my name is ${name} and I'm ${age}, I was born in ${getYearOfBirth()}!`;
}
const greeting1 = createGreeting();
console.log(greeting1);

console.log(createGreeting(name1, age1));
console.log(createGreeting(name2, age2));