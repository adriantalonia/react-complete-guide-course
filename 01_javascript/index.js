// classes

class Human {
  constructor() {
    this.gender = "male";
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = "Max";
    this.gender = "female";
  }

  printName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printName();
person.printGender();

// Spread & Rest Operators

const oldArray = [7, 8, 9];
const oldOBject = { id: 1, name: "Adrian" };
const newArray = [...oldArray, 1, 2, 3];
const newObject = { ...oldObject, newProp: 5 };

const filter = (...args) => {
  return args.filter((el = el == 1));
};
