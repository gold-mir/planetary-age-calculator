import { roundToHalf } from './rounding.js'

export class AgeCalculator {
  //creates a new AgeCalculator with a specified year length in earth years
  constructor(yearLength, date = new Date()){
    this.yearLength = yearLength;
    this.date = date.getTime();
  }

  getYearLength(){
    return this.yearLength;
  }

  getDate(){
    return this.date;
  }

  getMSPerEarthYear() {
    //estimate based on 365.25 days/year
    const msPerEarthYear = 31557600000;
    return msPerEarthYear;
  }

  getMSPerYear() {
    const msPerYear = this.getMSPerEarthYear() * this.getYearLength();
    return msPerYear;
  }

  getYearsFrom(date){
    const msPerYear = this.getMSPerYear();
    let given = date.getTime();
    let current = this.getDate();

    let elapsedMS = current - given;

    let elapsedYears = elapsedMS / msPerYear;

    return roundToHalf(elapsedYears);
  }

  getLifeExpectancy(date){
    const humanLifeExpectancy = 80 / this.getYearLength();
    const age = this.getYearsFrom(date);

    let yearsLeft = humanLifeExpectancy - age;

    if(yearsLeft > 0){
      return roundToHalf(yearsLeft);
    } else {
      let yearsPastExpectancy = yearsLeft * -1;
      return roundToHalf(yearsPastExpectancy);
    }
  }
}

AgeCalculator.presets = {
  mercury: .24,
  venus: .62,
  mars: 1.88,
  jupiter: 11.86
}

AgeCalculator.getPreset = function(planetName, date = new Date()){
  let yearLength = AgeCalculator.presets[planetName.toLowerCase()];
  return new AgeCalculator(yearLength, date);
}
