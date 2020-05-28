class DayOff {

  constructor(date) {
    this.update(date);
  }

  update(date) {
    this.date = date;
  }

  static of(date) {
    return new DayOff(date);
  }

  isSunday() {
    return this.date.getDay() === 0;
  }

  isSaturday() {
    return this.date.getDay() === 6;
  }

  isWeekend() {
    return this.isSaturday() || this.isSunday();
  }

  isDayOff() {
    return this.isWeekend() || this.isAnotherDayOff();
  }

  isDayOffNoFreeSaturday() {
    return this.isSunday() || this.isAnotherDayOff();
  }

  /*
   * You can override this method.
   */
  isAnotherDayOff() {
    return false;
  }

  firstWorkingDayBefore() {
    return this.firstWorkingDayBeforeDO(DayOff.of(this.date));
  }

  firstWorkingDayAfter() {
    return this.firstWorkingDayAfterDO(DayOff.of(this.date));
  }

  firstWorkingDayBeforeDO(dayOff) {
    while (dayOff.isDayOff()) {
      var d = new Date(dayOff.date.getTime());
      d.setDate(d.getDate() - 1);
      dayOff.update(d);
    }
    return dayOff.date;
  }

  firstWorkingDayAfterDO(dayOff) {
    while (dayOff.isDayOff()) {
      var d = new Date(dayOff.date.getTime());
      d.setDate(d.getDate() + 1);
      dayOff.update(d);
    }
    return dayOff.date;
  }

  plusWorkingDays(plusWorkingDays) {
    return this.plusWorkingDaysDO(DayOff.of(this.date), plusWorkingDays);
  }

  plusWorkingDaysDO(dayOff, plusWorkingDays) {
    for (var i = 0; i < plusWorkingDays; i++) {
      var d = new Date(dayOff.date.getTime());
      d.setDate(d.getDate() + 1);
      dayOff.update(d);
      dayOff.update(this.firstWorkingDayAfterDO(dayOff));
    }
    return dayOff.date;
  }

  minusWorkingDays(minusWorkingDays) {
    return this.minusWorkingDaysDO(DayOff.of(this.date), minusWorkingDays);
  }

  minusWorkingDaysDO(dayOff, minusWorkingDays) {
    for (var i = 0; i < minusWorkingDays; i++) {
      var d = new Date(dayOff.date.getTime());
      d.setDate(d.getDate() - 1);
      dayOff.update(d);
      dayOff.update(this.firstWorkingDayBeforeDO(dayOff));
    }
    return dayOff.date;
  }

  findWorkingDayAfterDays(plusDays) {
    var d = new Date(this.date.getTime());
    d.setDate(d.getDate() + plusDays);
    return this.firstWorkingDayAfterDO(DayOff.of(d));
  }

  findWorkingDayBeforeDays(minusDays) {
    var d = new Date(this.date.getTime());
    d.setDate(d.getDate() - minusDays);
    return this.firstWorkingDayBeforeDO(DayOff.of(d));
  }
}
export default DayOff;
//console.log("result: " + DayOff.of(new Date(2020,4,31)).firstWorkingDayBefore())
//console.log("result: " + DayOff.of(new Date(2020,4,31)).findWorkingDayAfterDays(7))
//console.log("result: " + DayOff.of(new Date(2020,4,31)).minusWorkingDays(2))
