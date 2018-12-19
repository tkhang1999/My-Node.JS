// var is outdated, use let and const instead
const name = "Khang";
let age = "19";
const hasHobbies = true;

// another way of writing a string
console.log(`Hello, I am ${name}`);

// arrow function (another way to declare a function)
const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        "Name is " + userName + 
        ", age is " +userAge + 
        ", and the user has hobbies: " + userHasHobby
    );
};

console.log(summarizeUser(name, age, hasHobbies));

// Use of arrow functions

const add1 = (a,b) => {return (a+b);};
console.log(add1(1,2));

const add2 = a => a+1; // can obmit the parantheses if there is only one argument 
// no need to use curly brackets and 'return' keyword for the function body if there is only 1 command
console.log(add2(19));

const addRandom = () => 1+2; // require paratheses if there is no argument or more than 1 argument
console.log(addRandom());