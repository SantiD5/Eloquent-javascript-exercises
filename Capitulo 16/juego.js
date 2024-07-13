/* Juego terminado
Es tradicional que los juegos de plataformas hagan que el jugador
comience con un número limitado de vidas y resten una vida cada vez
que mueren. Cuando el jugador se queda sin vidas, el juego se reinicia
desde el principio.
Ajusta runGame para implementar vidas. Haz que el jugador comience
con tres vidas. Muestra el número actual de vidas (usando console.log)
cada vez que comienza un nivel.*/


async function runGame(plans, Display) {
  let lives = 3;
  console.log(`you have ${lives} lives`);
  for (let level = 0; level < plans.length;) {
    let status = await runLevel(new Level(plans[level]),
      Display);
    if (status == "won") level++;
    if (status == "lost") { lives--; console.log('you lost a life'); }
    if (lives == 0) {
      console.log('game over')
    }
  }
  console.log("You've won!");
}
