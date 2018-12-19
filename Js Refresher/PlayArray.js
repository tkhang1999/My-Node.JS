const hobbies = ["Sports", "Cooking"];

// for (let hobby of hobbies){ // 'in' keyword will return the index of each element, 'of' return the value of each element
//     console.log(hobby);
// }

// console.log(hobbies.map(hobby => {
//     return "Hobby: " + hobby;
// }));
// console.log(hobbies);

// // the 'hobbies' can be edited without violating the restriction that the constants must not change
// hobbies.push("Programming");
// console.log(hobbies);

// // how to copy the value of an array to another
// const copiedArray1 = hobbies.slice();
// const copiedArray2 = [...hobbies]; // '...' is the spread operator
// console.log(copiedArray1, copiedArray2);

// const toArray = (...args) => {
//     return args;
// }
// console.log(toArray(...hobbies));

// destructuring for an array
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);