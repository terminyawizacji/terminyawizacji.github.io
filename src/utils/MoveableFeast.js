import Easter from "./Easter.js";

class MoveableFeast {

  constructor(easter) {
    this.easterSunday = easter.date;
    this.ashWednesday = new Date(this.easterSunday.getTime());
    this.palmSunday = new Date(this.easterSunday.getTime());
    this.easterMonday = new Date(this.easterSunday.getTime());
    this.misericordiaSunday = new Date(this.easterSunday.getTime());
    this.corpusChristi = new Date(this.easterSunday.getTime());
    this.ashWednesday.setDate(this.easterSunday.getDate() - 46);
    this.palmSunday.setDate(this.easterSunday.getDate() - 7);
    this.easterMonday.setDate(this.easterSunday.getDate() + 1);
    this.misericordiaSunday.setDate(this.easterSunday.getDate() + 7);
    this.corpusChristi.setDate(this.easterSunday.getDate() + 60);
  }

  static of(value) {
    if (value && typeof value === 'object' && value.constructor === Easter) {
      return new MoveableFeast(value);
    } else if (typeof value === 'number') {
      return new MoveableFeast(Easter.of(value));
    } else {
      throw new Error('Unsupported constructor parameter type');
    }
  }

  /*
   * pl. Środa Popielcowa
   */
  get getAshWednesday() {
    return this.ashWednesday;
  }

  get getPalmSunday() {
    return this.palmSunday;
  }

  get getEasterSunday() {
    return this.easterSunday;
  }

  get getEasterMonday() {
    return this.easterMonday;
  }

  get getMisericordiaSunday() {
    return this.misericordiaSunday;
  }

  /*
   * pl. Boże Ciało
   */
  get getCorpusChristi() {
    return this.corpusChristi;
  }
}
export default MoveableFeast;
//console.log(MoveableFeast.of(2020).getCorpusChristi)
