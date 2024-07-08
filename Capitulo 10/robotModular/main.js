import { buildGraph } from './buildGraph.js'
import { VillageState } from './villageState.js'
const roads = [
  "Casa de Alice-Casa de Bob", "Casa de Alice-Cabaña",
  "Casa de Alice-Oficina de Correos", "Casa de Bob-Ayuntamiento",
  "Casa de Daria-Casa de Ernie", "Casa de Daria-Ayuntamiento",
  "Casa de Ernie-Casa de Grete", "Casa de Grete-Granja",
  "Casa de Grete-Tienda", "Plaza de Mercado-Granja",
  "Plaza de Mercado-Oficina de Correos", "Plaza de Mercado-Tienda",
  "Plaza de Mercado-Ayuntamiento", "Tienda-Ayuntamiento"
];


export const roadGraph = buildGraph(roads);

let first = new VillageState(
  "Oficina de Correos",
  [{ place: "Oficina de Correos", address: "Casa de Alice" }]
);
let next = first.move("Casa de Alice");
console.log(next.place);
console.log(next.parcels);
console.log(first.place);

