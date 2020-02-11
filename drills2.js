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
