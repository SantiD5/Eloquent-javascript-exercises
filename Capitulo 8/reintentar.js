/*
 Reintentar
Imagina que tienes una función primitiveMultiply que en el 20 por
ciento de los casos multiplica dos números y en el otro 80 por ciento
arroja una excepción del tipo MultiplicatorUnitFailure. Escribe una
función que envuelva esta función problemática y siga intentando hasta
que una llamada tenga éxito, momento en el que devuelva el resultado.
Asegúrate de manejar solo las excepciones que estás intentando mane-
jar.
 */



class MultiplicatorUnitFailure extends Error { }

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Multiplator unit Failure, try again");
  }
}

function reliableMultiply(a, b) {
  for (; ;) {
    try {
      return primitiveMultiply(a, b);
      break;
    } catch (e) {
      if (e instanceof MultiplicatorUnitFailure) {
        console.log(`multiplicator unit failure, try again`)
      } else {
        throw e
      }
    }
  }

}

console.log(reliableMultiply(8, 8));
// → 64
