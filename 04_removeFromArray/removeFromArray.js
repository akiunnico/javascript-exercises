const removeFromArray = function(array, ...args) {
      for(argument of arguments){
        borrados = array.filter(e => !args.includes(e));
      }
    return borrados;
    };
console.log(removeFromArray([1, 2, 2, 3], 2))

console.log(removeFromArray([1, 2, 3, 4], 3, 2))
// Do not edit below this line
module.exports = removeFromArray;
