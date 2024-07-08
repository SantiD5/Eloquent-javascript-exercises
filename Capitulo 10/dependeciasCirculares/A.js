
const B = require('./B');

console.log('En A, antes de llamar a B.foo():');
B.foo();

module.exports = {
  message: 'Exportando desde A'
};

