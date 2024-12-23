class Person {
  constructor(name) {
    this.name = name;
  }
}

class Teacher extends Person {
  constructor(name) {
    super(name);
  }
  teach(subject) {
    console.log(`${this.name} is now teaching ${subject}`);
  }
}

const teacher = new Teacher("Hazem");
teacher.teach("Maths");

class Vehicle {
  constructor(wheels, speed) {
    this.wheels = wheels;
    this.speed = speed;
  }
}

class Bike extends Vehicle {
  constructor() {
    super(2, "fast enough");
    Bike.incrementCounter();
  }

  static incrementCounter() {
    if (!Bike.calls) {
      Bike.calls = 0;
    }
    Bike.calls += 1;
  }
}

Bike.callCounter = function () {
  if (!Bike.calls) {
    Bike.calls = 0;
  }
  return Bike.calls;
};

const bike1 = new Bike();
const bike2 = new Bike();
const bike3 = new Bike();
const bike4 = new Bike();
const bike5 = new Bike();
const bike6 = new Bike();

console.log(Bike.callCounter());
