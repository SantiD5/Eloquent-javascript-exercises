/*Escribe una función arrayToList que construya una estructura de lista
como la mostrada cuando se le da [1, 2, 3] como argumento. */
const arrayToList = (Array) => {
    let list = null;
    for (let i = Array.length - 1; i >= 0; i--) {
        list = { value: Array[i], rest: list };
    }
    return list;
};
console.log(arrayToList([1, 2, 3]));
/*escribe una función listToArray que produzca un array a partir de una
lista. Agrega las funciones auxiliares prepend, que toma un elemento y
una lista y crea una nueva lista que añade el elemento al principio de la
lista de entrada, y nth, que toma una lista y un número y devuelve el
elemento en la posición dada en la lista (siendo cero el primer elemento)
o undefined cuando no hay tal elemento. */

const listToArray = (List) => {
    let array = [];
    while (List) {
        array.push(List.value);
        List = List.rest;
    }
    return array;
};

const prepend = (element, list) => {
    return { value: element, rest: list };
};
const nth = (list, number) => {
    if (!list) {
        return undefined;
    } else if (number === 0) {
        return list.value;
    } else {
        return nth(list.rest, number - 1);
    }
};

//creacion de la lista
let list = prepend(10, prepend(20, prepend(30, null)));

console.log(listToArray(list));
console.log(nth(list, 0));
console.log(nth(list, 1));
console.log(nth(list, 3));
