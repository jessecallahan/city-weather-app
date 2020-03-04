import { Date } from './../src/date.js'

describe('Date', () => {
  var date;

  beforeEach(() => {
    date = new Date(1, 3, 20);
  });

  test('should correctly create a date object with three properties', () => {
    expect(date.day).toEqual(1);
    expect(date.month).toEqual(3);
    expect(date.year).toEqual(20);
  });

  test('should divide year by four', () => {
    expect(date.StepTwo()).toEqual(5)
  });

  test('should add value of month day to remainder', () => {
    expect(date.StepThree()).toEqual(6);
  });

  test('should get month key value', () => {
    expect(date.GetKeyValue()).toEqual(4);
  });

  test('should add key value to last step', () => {
    expect(date.StepFour()).toEqual(10);
  });

  test('should subtract 1 from last step if date is jan and feb of a leap year', () => {
    expect(date.LeapYear()).toEqual(10);
  });

  test('should add century code to last step', () => {
    expect(date.StepFive()).toEqual(16);
  });

  test('should add century code to last step', () => {
    expect(date.StepSix()).toEqual(36);
  });

  test('should find the day of the week using modulo', () => {
    expect(date.GetDay()).toEqual("Sunday");
  });

});
