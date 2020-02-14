'use strict';
function repeat (fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}
function hello(){
  console.log('Hello world');
}
function goodbye(){
  console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);


function filter(ray, fun) {
  let newArray = [];
  for (let i = 0; i < ray.length; i++){
    if (fun(ray[i])){
      newArray.push(ray[i]);
    }
  }
  return newArray;
}

const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];
const filteredNames = filter(myNames, function(name) {
  return name[0] === 'R';
});
console.log(filteredNames);

function hazardWarningCreator (typeOfWarning){
  let warningCounter = 0;
  return function(location){
    warningCounter ++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  };
}

const scamWarning = hazardWarningCreator('scammers');
console.log(scamWarning('on the web'));

const loveWarning = hazardWarningCreator('love');
console.log(loveWarning('in the air'));

const unseasonedFoodWarning = hazardWarningCreator('bland food');
console.log(unseasonedFoodWarning('being served'));