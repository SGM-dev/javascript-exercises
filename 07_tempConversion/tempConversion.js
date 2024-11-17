const convertToCelsius = function (temp) {
  let fahrenheit = ((temp - 32) * 5) / 9;
  return fahrenheit ? +fahrenheit.toFixed(1) : fahrenheit;
};

const convertToFahrenheit = function (temp) {
  let celsius = (temp * 9) / 5 + 32;
  return celsius ? +celsius.toFixed(1) : celsius;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
