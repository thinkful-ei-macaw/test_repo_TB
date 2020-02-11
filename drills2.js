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
beyond(0);

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