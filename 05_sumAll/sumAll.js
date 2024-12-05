const sumAll = function(int1, int2) {
    let suma = 0;
    let menor, mayor;
    if(int1 < 0 || int2 < 0) return "ERROR";
    if(!(Number.isInteger(int1) && Number.isInteger(int2))) return "ERROR";
    if(typeof(int1) !== "number" || typeof(int2) !== "number") return "ERROR";
    if(int1 > int2)
        {menor = int2; mayor = int1}
    else{menor = int1; mayor = int2}
    for(let i = menor; i <= mayor; i++){
        suma += i;
    }
    return suma;
};

console.log(sumAll(10, [90, 1]));
// Do not edit below this line
module.exports = sumAll;
