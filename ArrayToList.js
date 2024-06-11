/*Escribe una función arrayToList que construya una estructura de lista
como la mostrada cuando se le da [1, 2, 3] como argumento. */
const arrayToList = (Array) => {
  let list = null;
  for (let i = Array.length - 1; i >= 0; i--) {
    list = { value: Array[i], rest: list }; 
  }
  return list;
}
console.log(arrayToList([1, 2, 3]));
/*escribe una función listToArray que produzca un array a partir de una
lista. Agrega las funciones auxiliares prepend, que toma un elemento y
una lista y crea una nueva lista que añade el elemento al principio de la
lista de entrada, y nth, que toma una lista y un número y devuelve el
elemento en la posición dada en la lista (siendo cero el primer elemento)
o undefined cuando no hay tal elemento. */