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
});
