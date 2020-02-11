'use strict';
//console.log('Hi, my name is Brandon and I am 27 years old');
function getYearOfBirth(age){
  const YOB = 2020 - age;
  return YOB;
}
function createGreeting(name, age) {
  return `Hello, my name is ${name} and I'm ${age}!`;
}
const greeting1 = createGreeting();
console.log(greeting1);



let studentName1 = 'Brandon';
let studentName2 = 'Trina';
let studentAge1 = 27;
let studentAge2 = 25;

console.log(createGreeting(studentName1, studentAge1));
console.log(createGreeting(studentName2, studentAge2));