const leapYears = function (year) {
  // leap year is divisible by 4
  // century is not a leap year (divisible by 100)
  // century divisible by 400 is leap year
  // okay it works pretty well huh
  //year % 4  === 0 ? true : false ||  year % 100 === 0 ? false : year % 400 === 0 ? true : false;
  //
  // realised this condition can never be true hence redundant
  // if (year % 400 == 0 && year % 100 != 0) {
  //   return true;
  // }

  if (year % 4 == 0 && year % 100 != 0) {
    return true;
  }

  if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) {
    return true;
  }
  return false;
};

console.log(leapYears(1600));
// Do not edit below this line
module.exports = leapYears;

// Is it divisible by 4? → If NO, it's NOT a leap year. Stop here.
//Is it divisible by 100? → If NO, it IS a leap year. Stop here.
//Is it divisible by 400? → If YES, it IS a leap year. If NO, it's NOT.
// how are you doing
//
//
//
//
//
//
//
//
