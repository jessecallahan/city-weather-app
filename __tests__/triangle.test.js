import { Person } from './../src/solar.js'

describe('Person', () => {
  var person;

  beforeEach(() => {
    person = new Person(10, "US");
  });

  test('should correctly a person object with age', () => {
    expect(person.age).toEqual(10);
  });

  test('should return person age in Mercury years', () => {
    expect(person.mercuryAge()).toEqual(41)
  });

  test('should return person age in Venus years', () => {
    expect(person.venusAge()).toEqual(16)
  });

  test('should return person age in Mars years', () => {
    expect(person.marsAge()).toEqual(18)
  });

  test('should return person age in Jupiter years', () => {
    expect(person.jupiterAge()).toEqual(118)
  });

  test('should return person life expectancy based on where they live', () => {
    expect(person.lifeExpectancy()).toEqual(78)
  });

  test('should return person life expectancy based on where they live', () => {
    expect(person.planetsLifeExp()).toEqual(78)
  });

});
