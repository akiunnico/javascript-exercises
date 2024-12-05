const add = function(...args) {
  let resultado = 0;
  for(num of args) resultado += num;
	return resultado;
};

const subtract = function(...args) {

	return args[0]-args[1];
};


const sum = function(array) {
	return array.reduce((total, current) => total += current, 0)
};


const multiply = function(array) {
  
  return array.reduce((total, current) => total *= current, 1)

};


const power = function(num1, num2) {
	return Math.pow(num1, num2);
};


const factorial = function(num) {
	if(num === 0) return 1;
  let resultado=1;
  for(let i=1; i <= num; i++){
    resultado *= i;
  }
  return resultado;
};
console.log(factorial(10));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
