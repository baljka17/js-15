// implicit binding
// explicit bindng
// Prototype
// call, apply, binding
//

const person = {
  name: "Walter White",
  sayMyName: function () {
    console.log(`My name is ${this.name}`);
  },
};

person.sayMyName();

function sayMyName() {
  console.log(`My name is ${this.name}`);
}

sayMyName();
globalThis.name = "Walter Jenkins";
sayMyName();

//
function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

const p1 = new Person("John", "Doe");
const p2 = new Person("Walter", "White");

Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

console.log(p1.getFullName());
console.log(p2.getFullName());

//

function SuperHero(fName, lName) {
  Person.call(this, fName, lName);
  this.isSuperHero = true;
}

SuperHero.prototype.fightCrime = function () {
  console.log("Fighing crime");
};
SuperHero.prototype = Object.create(Person.prototype);

const batman = new SuperHero("Bruce", "Wayne");

console.log(batman.getFullName());
