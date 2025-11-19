class Parent {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleep() {
    console.log(`eni eto ghonta ghumai`);
  }
}

class Student extends Parent {
result: number;
  constructor(name: string, age: number, address: string, result: number) {
    super(name, age, address);
    this.result = result
  }
}

const studen1 = new Student(`Mr fakibaz`, 18, "Bangladesh", 4.77);

studen1.getSleep();

class Teacher extends Parent {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClass(numOfclass: number) {
    console.log(`${this.name} ${numOfclass} ghonta class nei`);
  }
}

const teacher1 = new Teacher("t", 25, "bangladesh", "senior");

// teacher1.takeClass()
