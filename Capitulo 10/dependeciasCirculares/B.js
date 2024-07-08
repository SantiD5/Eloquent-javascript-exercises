
const A = require('./A');

console.log('En B, antes de llamar a A.message:');
console.log('Mensaje desde A:', A.message);

function foo() {
  console.log('Función foo() en B');
}

module.exports = {
  foo: foo,
  data: 'Datos exportados desde B'
};

