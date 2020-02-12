/* eslint-disable no-console */
'use strict';
let name1 = 'Brandon';
let name2 = 'Trina';
let age1 = 27;
let age2 = 25;


function getYearOfBirth(age){
  if ((typeof age !== 'number') || (age < 0)) {
    throw new Error('Age is invalid');
  }
  return 2020 - age;
}


function createGreeting(name, age) {
  return `Hello, my name is ${name} and I'm ${age}, I was born in ${getYearOfBirth(age)}!`;
}
const greeting1 = createGreeting(name1, age1);
const greeting2 = createGreeting(name2, age2);

console.log(greeting1);
console.log(greeting2);