const convertToCelsius = function (fahren) {
  const celsius = (fahren - 32) * (5 / 9);
  console.log(celsius.toFixed(1) - 0);
  return celsius.toFixed(1) - 0;
};

const convertToFahrenheit = function (celsius) {
  const fahrenheit = celsius * (9 / 5) + 32;
  console.log(fahrenheit.toFixed(1) - 0);
  return fahrenheit.toFixed(1) - 0;
};
const val = 100;
convertToCelsius(val);
convertToFahrenheit(val);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
