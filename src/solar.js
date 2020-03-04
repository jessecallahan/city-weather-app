export class Person {
  constructor(age) {
    this.age = age;
  }

  mercuryAge() {
    this.age *= 100 / 24;
    return this.age
  }

  venusAge() {
    this.age *= 100 / 62;
    return this.age
  }

  marsAge() {
    this.age *= 1.88;
    return this.age
  }
  jupiterAge() {
    this.age *= 11.86;
    return this.age
  }

