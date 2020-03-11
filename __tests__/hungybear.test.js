import { HungryBear } from './../src/hungrybear.js';

describe('Fuzzy', () => {
    jest.useFakeTimers();
    let fuzzy;


    beforeEach(function () {
        fuzzy = new HungryBear("Fuzzy");
        fuzzy.setHunger();
    });

    afterEach(function () {
        jest.clearAllTimers();
    });

    test('should have a name and a food level of 10 when it is created', () => {
        expect(fuzzy.name).toEqual("Fuzzy");
        expect(fuzzy.foodLevel).toEqual(10);
    });

    test('should have a food level of 7 after 3001 milliseconds', () => {
        jest.advanceTimersByTime(3001);
        expect(fuzzy.foodLevel).toEqual(7);
    });

    test('should get very hungry if the food level drops below zero', function () {
        fuzzy.foodLevel = 0;
        expect(fuzzy.didYouGetEaten()).toEqual(true);
    });

    test('should get very hungry if 10 seconds pass without feeding', function () {
        jest.advanceTimersByTime(10001);
        expect(fuzzy.didYouGetEaten()).toEqual(true);
    });

    test('should have a food level of ten if it is fed', function () {
        jest.advanceTimersByTime(9001);
        fuzzy.feed();
        expect(fuzzy.foodLevel).toEqual(10);
    });
});