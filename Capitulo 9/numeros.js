/*
 Escribe una expresión que coincida solo con los números al estilo de
JavaScript. Debe admitir un signo menos o más opcional delante del
número, el punto decimal y la notación de exponente—5e-3 o 1E10—
de nuevo con un signo opcional delante del exponente. También ten
en cuenta que no es necesario que haya dígitos delante o después del
punto, pero el número no puede ser solo un punto. Es decir, .5 y 5.
son números de JavaScript válidos, pero un punto solitario no lo es.
*/
let number = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/;

for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
  "1.3e2", "1E-4", "1e+12"]) {
  if (!number.test(str)) {
    console.log(`Failed to match '${str}'`);
  }
}
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",
  ".5.", "1f5", "."]) {
  if (number.test(str)) {
    console.log(`Incorrectly accepted '${str}'`);
  }
}
