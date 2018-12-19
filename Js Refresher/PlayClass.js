const person = {
    name: "Khang",
    age: 29,
    greed: function() {
        console.log(`Hello, I am ${this.name}` );
    }
    // greed() {
    //     console.log("Hello, I am " + this.name);
    // }
};

console.log(person);
person.greed();

// create a copy of object 'person' using spread operator
const copiedPerson = {...person};
console.log(copiedPerson)

// destructuring for an object
const printName = ({ name }) => {
    console.log(name);
}
printName(person);
const { name, age } = person;
console.log(name, age);