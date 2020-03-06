import { Person } from '../src/solar.js'

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
    expect(person.marsAge()).toEqual(5)
  });

  test('should return person age in Jupiter years', () => {
    expect(person.jupiterAge()).toEqual(0)
  });

  test('should return person life expectancy based on where they live', () => {
    expect(person.lifeExpectancy()).toEqual(68)
  });

  test('should return person life expectancy based on where they live with planet funcitons', () => {
    expect(person.planetsLifeExp()).toEqual([283, 109, 36, 5,])
  });

  test('should return years over life expectancy for person older then life expectancy where they live', () => {
    let person = new Person(100, "UK")
    expect(person.lifeExpectancy()).toEqual(19)
  });

  test('should return years over life expectancy for person older then life expectancy where they live with planet functions', () => {
    let person = new Person(100, "UK")
    expect(person.planetsLifeExp()).toEqual([79, 30, 10, 1])
  });
});
