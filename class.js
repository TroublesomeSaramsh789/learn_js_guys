const personClass = (name, rollno) => {
  return {
    fullname: name,
    roll_no: rollno,
  };
};

const person1 = personClass("Saramsh", 70);
const person2 = personClass("Kamal", 39);
const person3 = personClass("Shikhar", 19);

const essay = `Mero naam ${person1.fullname} ra mero satthi haru ko naam ${person3.fullname} and ${person2.fullname}`;

console.log(essay);
// console.log(person1, person2, person3);

class bike {
  constructor(name, cc) {
    this.name = name;
    this.cc = cc;
  }
  display() {
    console.log(`Model No is ${this.name} `);
    return this.name;
  }
}

const tvs = new bike("1604v", 160);

console.log(tvs);
console.log(tvs.display());
