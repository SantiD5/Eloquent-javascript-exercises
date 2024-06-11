/*
Escribe una función deepEqual que tome dos valores y devuelva true
solo si son el mismo valor o son objetos con las mismas propiedades,
donde los valores de las propiedades son iguales cuando se comparan
con una llamada recursiva a deepEqual.

*/
const deepEqual = (a, b) => {
    if (a === b) {
        return true;
    }
    if (
        a == null ||
        typeof a !== "object" ||
        b == null ||
        typeof b !== "object"
    ) {
        return false;
    }
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) {
        return false;
    }

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
            return false;
        }
    }
    // Si pasaron todas las verificaciones, los objetos son iguales
    return true;
};

let obj1 = { a: 1, b: { c: 3 } };
let obj2 = { a: 1, b: { c: 3 } };
let obj3 = { a: 1, b: { c: 4 } };

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));
console.log(deepEqual(obj1, null));
console.log(deepEqual(null, null));
