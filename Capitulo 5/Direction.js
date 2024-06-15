/*
Escribe una función que calcule la dirección de escritura dominante
en una cadena de texto. Recuerda que cada objeto script tiene una
149
propiedad direction que puede ser "ltr" (de izquierda a derecha), "rtl
" (de derecha a izquierda) o "ttb" (de arriba a abajo).
 */
function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl