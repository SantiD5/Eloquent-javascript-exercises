/*
Los arrays también tienen un método every análogo al método some.
Este método devuelve true cuando la función dada devuelve true para
cada elemento en el array. En cierto modo, some es una versión del
operador || que actúa en arrays, y every es como el operador &&.
Implementa every como una función que recibe un array y una función
de predicado como parámetros. Escribe dos versiones, una usando un
bucle y otra usando el método some.
*/

let list = [2,4,6,8,10];

let todosPares = true;
for(let i = 0; i < list.length ;i++){
    if(list[i] % 2 !== 0){
        todosPares = false;
        break;
    }
}
console.log(todosPares)
