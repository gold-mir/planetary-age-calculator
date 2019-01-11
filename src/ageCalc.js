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

}
