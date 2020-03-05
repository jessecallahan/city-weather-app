export class Person {
  constructor(age, home) {
    this.age = age;
    this.home = home;
  }

  mercuryAge() {
    this.age *= 100 / 24;
    return Math.floor(this.age);
  }

  venusAge() {
    this.age *= 100 / 62;
    return Math.floor(this.age);
  }

  marsAge() {
    this.age *= 1.88;
    return Math.floor(this.age);
  }
  jupiterAge() {
    this.age *= 11.86;
    return Math.floor(this.age);
  }
  lifeExpectancy() {
    let a = this.age - 80.96;
    let b = this.age - 78.96;
    let c = this.age - 82.30;
    if (this.age <= 83 && this.home === "UK") {
      return Math.floor(80.96)
    }
    else if (this.age >= 81 && this.home === "UK") {
      return parseFloat(a.toFixed(1));
    }
    else if (this.age <= 83 && this.home === "US") {
      return Math.floor(78.96)
    }
    else if (this.age >= 79 && this.home === "US") {
      return parseFloat(b.toFixed(1));
    }
    else if (this.age <= 83 && this.home === "CAN") {
      return Math.floor(82.30)
    }
    else if (this.age >= 83 && this.home === "CAN") {
      return parseFloat(c.toFixed(1));
    }
  }
  planetsLifeExp() {
    let a = this.lifeExpectancy();
    let MercLifeExp = Math.floor(a * 4.16)
    let VenusLifeExp = Math.floor(a * 1.61)
    return [MercLifeExp, VenusLifeExp]


  }
}






