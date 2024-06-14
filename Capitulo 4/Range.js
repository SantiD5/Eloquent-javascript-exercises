/*Escribe una función range que tome dos argumentos, inicio y fin, y
devuelva un array que contenga todos los números desde inicio hasta
fin, incluyendo fin. */
const range = (Start, End) => {
    let count = Start;
    let numbers = [];
    while (count < End + 1) {
        numbers.push(count);
        count += 1;
    }
    return numbers;
};
console.log(range(1, 7));
/*
escribe una función sum que tome un array de números y
devuelva la suma de estos números.
*/
const sum = (numbers) => {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        count += numbers[i];
    }
    return count;
};
console.log(range([2, 4, 5, 6, 1, 1, 1, 10, 10, 15]));

/*modifica tu función range para que tome
un tercer argumento opcional que indique el valor de “paso” utilizado al
construir el array. Si no se proporciona un paso, los elementos deberían
aumentar en incrementos de uno, correspondiendo al comportamiento
anterior. La llamada a la función range(1, 10, 2) debería devolver [1,
3, 5, 7, 9]. Asegúrate de que esto también funcione con valores de
paso negativos, de modo que range(5, 2, -1) produzca [5, 4, 3, 2].
 */

const rango = (Start, End, Jump) => {
    let count = Start;
    let numbers = [];
    if (Jump > 0) {
        while (count <= End) {
            numbers.push(count);
            count += Jump;
        }
    } else {
        while (count >= End) {
            numbers.push(count);
            count += Jump;
        }
    }
    return numbers;
};
console.log(range(5, 2, -1));
