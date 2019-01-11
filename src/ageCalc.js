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
    // const msPerEarthYear = 31536000000;
    const msPerEarthYear = 31557600000;
    return msPerEarthYear;
  }

  getMSPerYear() {
    const msPerYear = this.getMSPerEarthYear() * this.getYearLength();
    return msPerYear;
  }

  getYearsFrom(date){
    // const msPerEarthYear = this.getMSPerEarthYear();
    //
    // let given = date.getTime();
    // let current = this.getDate();
    //
    // let elapsedMS = current - given;
    // let elapsedYearsEarth = elapsedMS / msPerEarthYear;
    // let elapsedYearsPlanetary = elapsedYearsEarth / this.getYearLength();
    //
    // return elapsedYearsPlanetary;

    const msPerYear = this.getMSPerYear();
    let given = date.getTime();
    let current = this.getDate();

    let elapsedMS = current - given;

    let elapsedYears = elapsedMS / msPerYear;

    return elapsedYears;
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
