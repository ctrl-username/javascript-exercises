const convertToCelsius = function (fahren) {
  return Math.round((fahren - 32) * (5 / 9), 2);
};

const convertToFahrenheit = function (celsius) {
  return Math.round(celsius * (9 / 5) + 32, 2);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
  d,
};

console.log(convertToCelsius(33), convertToFahrenheit(33));
