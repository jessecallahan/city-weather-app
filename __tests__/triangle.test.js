import { Date } from './../src/date.js'

describe('Date', () => {

    test('should correctly create a date object with three properties', () => {
        var date = new Date(1,3,20);
        expect(date.day).toEqual(1);
        expect(date.month).toEqual(3);
        expect(date.year).toEqual(20);
    });
    
    test('should divide year by four', () => {
      var date = new Date(1,3,20);
      expect(date.StepTwo()).toEqual(5)
    });

    test('should add value of month day to remainder', () => {
      var date = new Date(1,3,20);
      expect(date.StepThree()).toEqual(6);
    });

    test('should get month key value', () => {
      var date = new Date(1,3,20);
      expect(date.GetKeyValue()).toEqual(4);
    });

    test('should add key value to last step', () => {
      var date = new Date(1,3,20);
      expect(date.StepFour()).toEqual(10);
    });

    test('should add century code to last step', () => {
      var date = new Date(1,3,20);
      expect(date.StepFive()).toEqual(16);
    });

    test('should add century code to last step', () => {
      var date = new Date(1,3,20);
      expect(date.StepSix()).toEqual(36);
    });

    test('should find the day of the week using modulo', () => {
      var date = new Date(1,3,20);
      expect(date.GetDay()).toEqual("Sunday");
    });

});
