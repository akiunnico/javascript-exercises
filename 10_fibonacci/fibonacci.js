const fibonacci = function(posicion) {
    posicion = parseInt(posicion);
    if(posicion < 0) return "OOPS";
    let serie = [0, 1];
    for(let i = 2; i <= posicion; i++){
        serie[i] = serie[i-1] + serie[i-2]
        // console.log(serie[i])
    }
    return serie[posicion];
};

console.log(fibonacci("8"));
// Do not edit below this line
module.exports = fibonacci;
