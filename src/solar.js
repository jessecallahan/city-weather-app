export class Person {
  constructor(age, home) {
    this.age = age;
    this.home = home;
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
  lifeExpectancy() {
    if (this.age <= 83 && this.home === "UK") {
      return 80.96
    }
    else if (this.age >= 81 && this.home === "UK") {
      return this.age - 80.96
    }
    else if (this.age <= 83 && this.home === "US") {
      return 78.96
    }
    else if (this.age >= 79 && this.home === "US") {
      return this.age - 78.96
    }
    else if (this.age <= 83 && this.home === "CAN") {
      return 82.3
    }
    else if (this.age >= 83 && this.home === "CAN") {
      let a = this.age - 82.3
      return $parseFloat((thsi.toFixed(1))
    }
  }
}






