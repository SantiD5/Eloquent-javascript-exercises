/* 
Escribe una función contarBs que tome una cadena como único argumento y devuelva un número que indique cuántos caracteres B en
mayúscula hay en la cadena.
 */
let ContarBs = (Word) => {
  let count = 0;
  for(let i = 0; i < Word.length; i++){
    for(let j = 0; j < Word[i].length; j++){
      if(Word[i][j] === "B"){
        count += 1
      }
    }
  }
  return count
}

console.log(ContarBs(["boca","BBBBBBBBBBBBBB"]));


/*
escribe una función llamada contarCaracter que se
comporte como contarBs, excepto que toma un segundo argumento que
indica el carácter que se va a contar (en lugar de contar solo caracteres
B en mayúscula). Reescribe contarBs para hacer uso de esta nueva
función. 
*/
let ContarCaracter = (Words, Caracter) => {
  let count = 0;
  for(let i = 0; i < Words.length; i++){
    for(let j = 0; j < Words[i].length; j++){
      if(Words[i][j] === Caracter){
        count += 1
      }
    }
  }
  return count
}

console.log(ContarCaracter(["boca","BBBBBBBBBBBBBB"],"a"))



