/* Pausar el juego
Haz posible pausar y despausar el juego presionando la tecla Esc.
Esto se puede hacer cambiando la función runLevel para configurar un
manejador de eventos de teclado que interrumpa o reanude la animación
cada vez que se presiona la tecla Esc.
La interfaz de runAnimation puede no parecer adecuada para esto a
primera vista, pero lo es si reorganizas la forma en que runLevel la
llama.
Cuando tengas eso funcionando, hay algo más que podrías intentar.
La forma en que hemos estado registrando los controladores de eventos
de teclado es algo problemática. El objeto arrowKeys es actualmente una
asignación global, y sus controladores de eventos se mantienen incluso
cuando no hay ningún juego en ejecución. Podrías decir que escapan
de nuestro sistema. Amplía trackKeys para proporcionar una forma de
anular el registro de sus controladores y luego cambia runLevel para reg-
istrar sus controladores cuando comienza y desregistrarlos nuevamente
cuando termine.*/


function runLevel(level, Display) {
  let display = new Display(document.body, level);
  let state = State.start(level);
  let ending = 1;
  let isPaused = false;
  return new Promise(resolve => {
    window.addEventListener("keydown", (e) => {
      if (e.key === 'Escape') {
        isPaused = !isPaused;
      }
    })
    runAnimation(time => {
      if (isPaused) {
        return true
      }
      state = state.update(time, arrowKeys);
      display.syncState(state);
      if (state.status == "playing") {
        return true;
      } else if (ending > 0) {
        ending -= time;
        return true;
      } else {
        display.clear();
        resolve(state.status);
        return false;
      }
    });
  });
}
