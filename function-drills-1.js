/* eslint-disable strict */
'eslint-disable strict';

const STUDENTS = () => {

  function getYearOfBirth(age){
    return 2020 - age;
  }
  
  function createGreeting(name, age){
    if(name === undefined || age === undefined){
      throw new Error('Arguments are invalid!');
    }
  
    if(age < 0){
      throw new Error('Age cannot be negative!');
    }
  
    if(typeof age !== 'number'){
      throw new TyperError('Age must be a number!');
    }
  
    const YOB = getYearOfBirth(age);
    return `Hi, my name is ${name} and I was born in ${YOB}, which makes me ${age} years old!`;
  }
  
  try{
    const STUDENT1 = createGreeting('Brandon', 27);
    console.log(STUDENT1);
  } catch(e) {
    console.log(e);
  }
  
  try{
    const STUDENT2 = createGreeting('Trina', 25);
    console.log(STUDENT2);
  } catch(e) {
    console.log(e);
  }
};

console.log(STUDENTS());