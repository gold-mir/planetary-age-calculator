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

  getYearsFrom(date){
    //Estimated approx 31557600000 based on 31536000000 ms in 365 days + 21600000ms (0.25 days) to account for leap years
    const msPerEarthYear = 31536000000;
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

}
