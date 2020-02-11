/* eslint-disable strict */
'eslint-disable-next-line strict'


const createGreeting = (name, age) => {
  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${getYearOfBirth(age)}.`;
};
  
const getYearOfBirth = age => {
  if (age < 0) {
    throw new Error('Age can not be negative');
  }
  return 2020 - age;
};
  
try{
  const STUDENT1_GREET = createGreeting('Trina', -25);
  throw STUDENT1_GREET;
} catch(error){
  console.log(error);
}
  
try {
  const STUDENT2_GREET = createGreeting('Brandon', 27);
  throw STUDENT2_GREET;
  
} catch(error) {
  console.log(error);
}
  
console.log(greatGreeting());