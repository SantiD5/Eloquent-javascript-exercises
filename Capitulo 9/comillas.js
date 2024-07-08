/*
 Imagina que has escrito una historia y usaste comillas simples single-
quote character para marcar piezas de diálogo. Ahora quieres reem-
plazar todas las comillas de diálogo con comillas dobles, manteniendo
las comillas simples utilizadas en contracciones como aren’t.
Piensa en un patrón que distinga estos dos tipos de uso de comillas y
crea una llamada al método replace que realice el reemplazo adecuado.
*/

let text = "I'm the cook,' he said, 'it's my job.'";

console.log(text.replace(/(^|\P{L})'|'(\P{L}|$)/gu, '$1"$2'));
