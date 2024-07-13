/* Un monstruo
Es tradicional que los juegos de plataformas tengan enemigos a los que
puedes saltar encima para derrotar. Este ejercicio te pide que agregues
un tipo de actor así al juego.
Lo llamaremos monstruo. Los monstruos se mueven solo horizontal-
mente. Puedes hacer que se muevan en la dirección del jugador, que
reboten de un lado a otro como lava horizontal, o tengan cualquier pa-
trón de movimiento que desees. La clase no tiene que manejar caídas,
pero debe asegurarse de que el monstruo no atraviese paredes.
Cuando un monstruo toca al jugador, el efecto depende de si el ju-
442gador está saltando encima de ellos o no. Puedes aproximarlo compro-
bando si el final del jugador está cerca de la parte superior del monstruo.
Si este es el caso, el monstruo desaparece. Si no, el juego se pierde.*/
const monsterSpeed = 4;

class Monster {
  constructor(pos) { this.pos = pos; }

  get type() { return "monster"; }

  static create(pos) { return new Monster(pos.plus(new Vec(0, -1))); }

  update(time, state) {
    let player = state.player;
    let speed = (player.pos.x < this.pos.x ? -1 : 1) * time * monsterSpeed;
    let newPos = new Vec(this.pos.x + speed, this.pos.y);
    if (state.level.touches(newPos, this.size, "wall")) return this;
    else return new Monster(newPos);
  }

  collide(state) {
    let player = state.player;
    if (player.pos.y + player.size.y < this.pos.y + 0.5) {
      let filtered = state.actors.filter(a => a != this);
      return new State(state.level, filtered, state.status);
    } else {
      return new State(state.level, state.actors, "lost");
    }
  }
}

Monster.prototype.size = new Vec(1.2, 2);

levelChars["M"] = Monster;
