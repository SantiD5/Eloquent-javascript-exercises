/*
Aplanamiento
Utiliza el método reduce en combinación con el método concat para
“aplanar” un array de arrays en un único array que contenga todos los
elementos de los arrays originales.
*/
let aplanar = [
    [0, 1, 2, 3],
    4,
    5,
    6,
    [7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17],
];

let aplanado = [];
aplanado = aplanar.reduce(
    (acumulador, currentValue) => acumulador.concat(currentValue),
    []
);
console.log(aplanado);
