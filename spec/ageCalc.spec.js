import { AgeCalculator } from './../src/ageCalc.js';

describe('Age Calculator', () => {
  let vogon;

  beforeEach(() => {
    vogon = new AgeCalculator(2);
  });

  it('should have a constructor that creates a new AgeCalculator object with a given year length', () => {
    expect(vogon.getYearLength()).toEqual(2);
  });

  it('should have an optional parameter that allows you to set the current date, and should otherwise default to now', () => {
    let newYears = new Date("2019-01-01");
    let planetx = new AgeCalculator(0.5, newYears);
    expect(planetx.getDate()).toEqual(newYears.getTime());
  });
});
