import MoveableFeast from "./MoveableFeast.js";

class Feast {

  constructor(date) {
    this.date = date;
    this.moveableFeast = MoveableFeast.of(date.getFullYear());
  }

  static of(date) {
    return new Feast(date);
  }

  isNewYear() {
    return this.date.getMonth() === 0 && this.date.getDate() === 1;
  }

  /*
   * pl. Święto Trzech Króli
   */
  isEpiphany() {
    return this.date.getMonth() === 0 && this.date.getDate() === 6;
  }

  isAshWednesday() {
    return this.date.valueOf() === this.moveableFeast.getAshWednesday.valueOf();
  }

  isPalmSunday() {
    return this.date.valueOf() === this.moveableFeast.getPalmSunday.valueOf();
  }

  isEasterSunday() {
    return this.date.valueOf() === this.moveableFeast.getEasterSunday.valueOf();
  }

  isEasterMonday() {
    return this.date.valueOf() === this.moveableFeast.getEasterMonday.valueOf();
  }

  /*
   * pl. Boże Ciało
   */
  isCorpusChristi() {
    return this.date.valueOf() === this.moveableFeast.getCorpusChristi.valueOf();
  }

  /*
   * pl. Wniebowzięcie NMP
   */
  isAssumptionDay() {
    return this.date.getMonth() === 7 && this.date.getDate() === 15;
  }

  /*
   * pl. Wszystkich Świętych
   */
  isAllSaintsDay() {
    return this.date.getMonth() === 10 && this.date.getDate() === 1;
  }

  isChristmasDay() {
    return this.date.getMonth() === 11 && this.date.getDate() === 25;
  }

  isBoxingDay() {
    return this.date.getMonth() === 11 && this.date.getDate() === 26;
  }

  isChristmas() {
    return this.isChristmasDay() || this.isBoxingDay();
  }

  isEaster() {
    return this.isEasterSunday() || this.isEasterMonday();
  }

}
export default Feast;
//console.log(Feast.of(new Date(2020, 1, 26)).isAshWednesday())
//console.log(Feast.of(new Date(2020, 0, 1)).isNewYear())
//console.log(Feast.of(new Date(2020, 3, 12)).isEaster())
//console.log(Feast.of(new Date(2020, 3, 13)).isEaster())