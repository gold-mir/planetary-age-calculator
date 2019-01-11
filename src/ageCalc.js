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
    const msPerEarthYear = 31536000000;
    return msPerEarthYear;
  }

  getMSPerYear() {
    const msPerYear = this.getMSPerEarthYear() * this.getYearLength();
    return msPerYear;
  }

  getYearsFrom(date){
    const msPerEarthYear = this.getMSPerEarthYear();
    /*
    To do this:
    1. Get ms of given date.
    2. Get ms of current date.
    3. Calculate ms difference between given and current date (current - given)
    4. Convert ms difference into earth years
    5. Divide earth year count by this.yearLength (earth years per plenetary year) to get years elapsed on planet
    */

    let given = date.getTime();
    let current = this.getDate();

    let elapsedMS = current - given;
    let elapsedYearsEarth = elapsedMS / msPerEarthYear;
    let elapsedYearsPlanetary = elapsedYearsEarth / this.getYearLength();

    return elapsedYearsPlanetary;
  }

  getLifeExpectancy(date){
    const humanLifeExpectancy = 80 / this.getYearLength();
    const age = this.getYearsFrom(date);

    let yearsLeft = humanLifeExpectancy - age;

    if(yearsLeft > 0){
      return yearsLeft;
    } else {
      let yearsPastExpectancy = yearsLeft * -1;
      return yearsPastExpectancy;
    }
  }

}
