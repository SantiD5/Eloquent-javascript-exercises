import { roadGraph } from './main.js'
export function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}
export function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}

