/* eslint-disable no-console */
'use strict';

function jediName(firstName, lastName){
  let result = lastName.slice(0,3).concat(firstName.slice(0,2)); 
  console.log(result);
  return result; 
}
jediName('Trina', 'McLeary');


function beyond(num) {
  if (!isFinite(num)) {
    console.log('And beyond');
  } 
  else if (num > 0) {
    console.log('To infinity');
  }
  else if (num < 0) {
    console.log('To negative infinity');
  }
  else if (num === 0) {
    console.log('Staying Home');
  }
  return;
}
beyond(7786869768);

function decode(sentence) {
  let words = sentence.split(' ');
  let letters = [];
  for (let i = 0; i < words.length; i++){
    if (words[i].charAt(0) === 'a'){
      letters.push(words[i].charAt(1));
    }
    else if (words[i].charAt(0) === 'b'){
      letters.push(words[i].charAt(2));
    }
    else if (words[i].charAt(0) === 'c'){
      letters.push(words[i].charAt(3));
    }
    else if (words[i].charAt(0) === 'd'){
      letters.push(words[i].charAt(4));
    }
    else {
      letters.push(' ');
    }
  }
  console.log(words);
  console.log(letters);
  console.log(letters.toString());
}
decode('craft block argon meter bells brown croon droop');

function daysInAMonth(month, leapYear){
  switch (month) {
  case 'January':
    console.log('Janurary has 31 days');
    break;
  case 'Feburary':
    console.log('Feburary has 28 days');
    break;
    //How do I add leapYear condition!?
  case leapYear === true: 
    console.log('February has 29 days');
    break;
  case 'March':
    console.log('March has 31 days');
    break;
  case 'April':
    console.log('April has 30 days');
    break;
  case 'May':
    console.log('May has 31 days');
    break;
  case 'June':
    console.log('June has 30 days');
    break;
  case 'July':
    console.log('July has 31 days');
    break;
  case 'August':
    console.log('August has 31 days');
    break;
  case 'September':
    console.log('September has 30 days');
    break;
  case 'October':
    console.log('October has 31 days');
    break;
  case 'November':
    console.log('November has 30 days');
    break;
  case 'December':
    console.log('December has 31 days');
    break;
  default:
    //Not sure how to properly write error message!
    throw new Error ('Must provide a valid month');
  }
}
daysInAMonth('April');

// 1 = rock, 2 = paper, 3 = scissors
function game (num){
  const randomNo = Math.floor(Math.random() * 3) + 1;
  console.log(`I chose ${randomNo}`);
  console.log(`You chose ${num}`);
  try {
    ((num < 1) || (num > 3) || (typeof num !== Number));
  }
  catch(error){
    throw new error ('Number must be between 1 and three');
  }
  if (randomNo === num){
    console.log('Its a tie!');
  }
  else if (((randomNo === 1) && (num === 3)) || ((randomNo === 2) && (num === 1)) || ((randomNo === 3) && (num === 2))) {
    console.log('I win!');
  }
  else {
    console.log('You win!');
  }
}
game();