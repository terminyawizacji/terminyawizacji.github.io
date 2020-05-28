import DayOff from './DayOff.js';
import PolishFeast from './PolishFeast.js';

class PolishDayOff extends DayOff {

  constructor(date) {
    super(date);
    this.update(date);
  }

  update(date) {
    this.date = date;
    this.polishFeast = PolishFeast.of(date);
  }

  static of(date) {
    return new PolishDayOff(date);
  }

  isDayOff() {
    return super.isDayOff() || this.isPolishFeast();
  }

  isDayOffNoFreeSaturday() {
    return super.isDayOff() || this.isPolishFeast();
  }

  isPolishFeast() {
    return this.polishFeast.isNewYear()
      || this.polishFeast.isEpiphany()
      || this.polishFeast.isEaster()
      || this.polishFeast.isLabourDay()
      || this.polishFeast.isConstitutionDay()
      || this.polishFeast.isCorpusChristi()
      || this.polishFeast.isAssumptionDay()
      || this.polishFeast.isAllSaintsDay()
      || this.polishFeast.isIndependenceDay()
      || this.polishFeast.isChristmas();
  }

  firstWorkingDayBefore() {
    return super.firstWorkingDayBeforeDO(PolishDayOff.of(this.date));
  }

  firstWorkingDayAfter() {
    return super.firstWorkingDayAfterDO(PolishDayOff.of(this.date));
  }

  plusWorkingDays(plusWorkingDays) {
    return super.plusWorkingDays(PolishDayOff.of(this.date), plusWorkingDays);
  }

  minusWorkingDays(minusWorkingDays) {
    return super.minusWorkingDays(PolishDayOff.of(this.date), minusWorkingDays);
  }

  findWorkingDayAfterDays(plusDays) {
    var d = new Date(this.date.getTime());
    d.setDate(d.getDate() + plusDays);
    return super.firstWorkingDayAfterDO(PolishDayOff.of(d));
  }

  findWorkingDayBeforeDays(minusDays) {
    var d = new Date(this.date.getTime());
    d.setDate(d.getDate() - minusDays);
    return super.firstWorkingDayBeforeDO(PolishDayOff.of(d));
  }

}
export default PolishDayOff;
//console.log(PolishDayOff.of(new Date(2020,11,25)).isDayOff());
//console.log("result: " + PolishDayOff.of(new Date(2020,0,2)).findWorkingDayAfterDays(14));
