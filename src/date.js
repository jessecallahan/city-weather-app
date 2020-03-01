export class Date{
  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  StepTwo() {
    let result = this.year / 4;
    return Math.floor(result);
  }

  StepThree() {
    let result = this.year / 4;
    let stepTwoAnswer = result + this.day;
    return stepTwoAnswer;
  }
    
  GetKeyValue() {
    var keyValue;
    if (this.month === 1 || this.month === 10) {
      keyValue = 1;
    }
    if (this.month === 2 || this.month === 3 || this.month === 11) {
     keyValue = 4;
    }
    if (this.month === 4 || this.month === 7) {
     keyValue = 0;
    }
    if (this.month === 5) {
      keyValue = 2;
    }
    if (this.month === 6) {
    keyValue = 5;
    }
    if (this.month === 8) {
      keyValue = 3;
    }
    if (this.month === 9 || this.month === 12) {
      keyValue = 6;
    }
    return keyValue
  }

  StepFour() {
    let stepFourAnswer = stepTwoAnswer + keyValue;
    return stepFourAnswer;
  }

  LeapYear() {

  }

  StepFive() {
    let stepFiveAnswer = stepFourAnswer + 6;
    return stepFiveAnswer;
  }

  StepSix() {
    let stepSixAnswer = this.year + stepFiveAnswer;
    return stepSixAnswer;
  }

  GetDay() {
    let remainder = stepSixAnswer % 7;
    if(remainder === 1) {
      return "Sunday";
    }  if (remainder === 2) {
      return "Monday";
    }  if (remainder === 3) {
      return "Tuesday";
    } if (remainder === 4) {
      return "Wednesday";
    } if (remainder === 5) {
      return "Thursday";
    } if (remainder === 6) {
      return "Friday";
    } if (remainder === 0) {
      return "Saturday";
    }
  }
};

