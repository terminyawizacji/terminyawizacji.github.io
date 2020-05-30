import Feast from "./Feast.js";

class PolishFeast extends Feast {

  static of(date) {
    return new PolishFeast(date);
  }

  /**
   * pl. Święto Pracy
   */
  isLabourDay() {
    return this.date.getMonth() === 4 && this.date.getDate() === 1;
  }

  /**
   * pl. Święto Konstytucji
   */
  isConstitutionDay() {
    return this.date.getMonth() === 4 && this.date.getDate() === 3;
  }

  /**
   * pl. Dzień Niepodległości
   */
  isIndependenceDay() {
    return this.date.getMonth() === 10 && this.date.getDate() === 11;
  }

}
export default PolishFeast;
//console.log(PolishFeast.of(new Date(2020, 10, 11)).isIndependenceDay)