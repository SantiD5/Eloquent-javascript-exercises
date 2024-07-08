/*
 Code golf es un término utilizado para el juego de intentar expresar
un programa en particular con la menor cantidad de caracteres posible.
De manera similar, regexp golf es la práctica de escribir una expresión
regular lo más pequeña posible para que coincida con un patrón dado,
y solo ese patrón.
Para cada uno de los siguientes elementos, escribe una expresión reg-
ular para comprobar si el patrón dado ocurre en una cadena. La expre-
sión regular debe coincidir solo con cadenas que contengan el patrón.
Cuando tu expresión funcione, verifica si puedes hacerla más pequeña.
 */

// car y cat

let regex1 = /(car|cat)/g
let regexBetter = /ca[rt]/
let text = 'Im driving my cat and my cat is sleeping'
console.log(regex1.test(text))

//pop y prop
let regexP = /pr?op/g
let textP = 'pop or prop ?'
console.log(regexP.test(textP));

// ferret, ferry y ferrari

let regexF = /ferr(a|e|y)(t?|ri?)/
let betterF = /ferr(?:y|ari|et)/
let textF = 'fernet ferry ferrari ferret'
console.log(regexF.test(textF));

// Cualquier palabra que termine en ious
let regexIous = /ious$/g
let regexBetterIous = /\w+ious$\b/g
let textIous = 'Perious ious'
console.log(regexIous.test(textIous));
//Un carácter de espacio en blanco seguido de un punto, coma, dos puntos o punto y coma

let regexSpace = /[\s+\.\,\.\;]/
let textSpace = ',; . ..'
console.log(regexSpace.test(textSpace));

// una palabra con mas de seis letras
let regexSix = /\w{6,}/
let testSix = 'Buenas'
console.log(regexSix.test(testSix));

// una palabra sin la letra e o E
let regexE = /^[^e]/i
let testE = 'estacionamiento'
console.log(regexE.test(testE));

