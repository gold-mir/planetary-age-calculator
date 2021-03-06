import { AgeCalculator } from './../src/ageCalc.js';

describe('Age Calculator', () => {

  let planetx;
  let newYears;

  beforeEach(() => {
    newYears = new Date("2019-01-01");
    planetx = new AgeCalculator(0.5, newYears);
  });

  it('should have a constructor that creates a new AgeCalculator object with a given year length', () => {
    expect(planetx.getYearLength()).toEqual(0.5);
  });

  it('should have an optional parameter that allows you to set the current date, and should otherwise default to now', () => {
    expect(planetx.getDate()).toEqual(newYears.getTime());
  });

  it("should have a getYearsFrom method that returns the number of years from an inputted date to the calculator's date in modified years", () => {
    expect(planetx.getYearsFrom(new Date('2018-01-01'))).toEqual(2);
  });

  it("should have a getLifeExpectancy method that returns the expected number of years they have left to live in that planet's years, based on an inputted birthday, assuming 80 years expected lifespan", () => {
    /*
    Expected result:
    80 earth year life expectancy - 79 years lived = 1 earth year life expectancy left = 2 years on a planet with a year length of 0.5

    */
    expect(planetx.getLifeExpectancy(new Date('1940-01-01'))).toEqual(2);
  });

  it("should have a getPreset method that returns an AgeCalculator with a specified preset", () => {
    let mars = AgeCalculator.getPreset("mars");
    console.log(mars);
    expect(mars.getYearLength()).toEqual(1.88);
  });

  it("should let you input a date into getPreset along with a preset and get an AgeCalculator with that preset and time", () => {
    let mars = AgeCalculator.getPreset("mars");
    let marsOnNY = AgeCalculator.getPreset("mars", newYears);
    expect(marsOnNY.getDate()).toEqual(newYears.getTime());
  });

});
