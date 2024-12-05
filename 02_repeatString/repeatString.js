const repeatString = function(string, num) {
    let fraseFinal = "";
    if(num < 0) {return "ERROR";} 
    for(let i = 1; i <= num; i++){
        fraseFinal += string;
    }
    return fraseFinal;
};
console.log(repeatString("hey", 3))
// Do not edit below this line
module.exports = repeatString;
