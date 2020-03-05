import { Person } from './../src/solar.js'

describe('Person', () => {
  var person;

  beforeEach(() => {
    person = new Person(84, "CAN");
  });

  test('should correctly a person object with age', () => {
    expect(person.age).toEqual(1);
  });

  test('should return person age in Mercury years', () => {
    expect(person.mercuryAge()).toEqual(4.166666666666667)
  });

  test('should return person age in Venus years', () => {
    expect(person.venusAge()).toEqual(1.6129032258064515)
  });

  test('should return person age in Mars years', () => {
    expect(person.marsAge()).toEqual(1.88)
  });

  test('should return person age in Jupiter years', () => {
    expect(person.jupiterAge()).toEqual(11.86)
  });

  test('should return person life expectancy based on where they live', () => {
    expect(person.lifeExpectancy()).toEqual(1.70)
  });

});
