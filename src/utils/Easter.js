const MARCH_DAYS_NUMBER = 31;
const ALGORITHM_FIRST_VALID_YEAR = 1583;

class Easter {

  constructor(year) {
    this.year = year;
    this.easter = this.computeEaster(year);
  }

  static of(year) {
    return new Easter(year);
  }

  get date() {
    return this.easter;
  }

  computeEaster(year) {
    if (year < ALGORITHM_FIRST_VALID_YEAR) {
      throw new Error("Algorithm invalid before April " + ALGORITHM_FIRST_VALID_YEAR);
    }
    var golden = (year % 19) + 1;                    /* E1: metonic cycle */
    var century = Math.floor(year / 100) + 1;        /* E2: e.g. 1984 was in 20th C */
    var x = Math.floor(3 * century / 4) - 12;      /* E3: leap year correction */
    var z = Math.floor((8 * century + 5) / 25) - 5;  /* E4: sync with moon's orbit */
    var d = Math.floor(5 * year / 4) - x - 10;
    var epact = (11 * golden + 20 + z - x) % 30;     /* E5: epact */
    if ((epact === 25 && golden > 11) || epact === 24) {
      epact++;
    }
    var n = 44 - epact;
    if (n < 21) { /* E6: */
      n += 30;
    }
    n += 7 - ((d + n) % 7);
    if (n > MARCH_DAYS_NUMBER) { /* E7: */
      return new Date(year, 3, n - MARCH_DAYS_NUMBER); /* April */
    } else {
      return new Date(year, 2, n);  /* March */
    }
  }
}
export default Easter;
//console.log(typeof Easter.of(2019));
//console.log(new Easter(2020));
//console.log(Easter.of(1000))
