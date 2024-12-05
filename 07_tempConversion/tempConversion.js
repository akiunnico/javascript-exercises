const convertToCelsius = function(temp) {
  celsius = (temp - 32) * 5 / 9;
  return (Number.isInteger(celsius))
    ? celsius
    : parseFloat( celsius.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  farenheit = temp * 9 / 5 + 32;
  return (Number.isInteger(farenheit))
    ? farenheit
    : parseFloat( farenheit.toFixed(1));
};

console.log(convertToCelsius(100));

console.log(convertToFahrenheit(-10));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
