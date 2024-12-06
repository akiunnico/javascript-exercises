const palindromes = function (texto) {

    let miMuestra = "abcdefghijklmnñopqrstuvwxyz0123456789";
    let filtrado = texto.toLowerCase().split("").filter(e => miMuestra.includes(e));
    let desnudo = filtrado.join("");
    let invertido = filtrado.reverse().join("");
    console.log(`Desnudo: ${desnudo} Invertido: ${invertido}`)
    return desnudo === invertido ? true : false; 

};

let conejillo = 'r3ace3car';

console.log(palindromes(conejillo));

// console.log(conejillo.split(""));

// Do not edit below this line
module.exports = palindromes;
