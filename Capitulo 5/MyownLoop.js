/*Tu propio bucle
Escribe una función de orden superior loop que proporcione algo similar
a una declaración for loop. Debería recibir un valor, una función de
prueba, una función de actualización y una función de cuerpo. En cada
iteración, primero debe ejecutar la función de prueba en el valor actual
del bucle y detenerse si devuelve falso. Luego debe llamar a la función
de cuerpo, dándole el valor actual, y finalmente llamar a la función de
actualización para crear un nuevo valor y empezar de nuevo desde el
principio.
Al definir la función, puedes usar un bucle regular para hacer el bucle
real. 
*/
let loop = (i, test, actualizacion, cuerpo) => {
    let value = i;
    while (test(value)) {
        cuerpo(value);
        value = actualizacion(value);
    }
};

let cuerpo = (i) => {
    if (i != undefined) {
        console.log(i);
    }
};
let actualizacion = (i) => {
    return i + 1;
};
let test = (i, condicion) => {
    if (i > condicion) {
        return false;
    } else {
        return true;
    }
};
console.log(loop(1, (val) => test(val, 15), actualizacion, cuerpo));
