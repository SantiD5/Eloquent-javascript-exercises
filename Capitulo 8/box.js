
const box = new class {
  locked = true;
  #content = ['ola'];
  unlock() { this.locked = false; }
  lock() { this.locked = true; }
  get content() {
    if (this.locked) throw new Error("¡Cerrado con llave!");
    return this.#content;
  }
};

function withBoxUnlocked(fn) {
  try {
    if (box.locked) {
      box.unlock();
    }
    fn();
  } finally {
    box.lock();
  }

}

console.log(box.locked); // true (caja inicialmente bloqueada)
withBoxUnlocked(() => {
  box.content.push("Libro secreto");
  console.log(box.content); // ["Libro secreto"]
});
console.log(box.locked); // true (la caja está cerrada de nuevo)
;

