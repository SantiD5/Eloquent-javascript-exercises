
import { buildGraph } from './graph.js';

const roads = [
  ["Casa de Alice", "Casa de Bob"], ["Casa de Alice", "Cabaña"],
  ["Casa de Alice", "Oficina de Correos"], ["Casa de Bob", "Ayuntamiento"],
  ["Casa de Daria", "Casa de Ernie"], ["Casa de Daria", "Ayuntamiento"],
  ["Casa de Ernie", "Casa de Grete"], ["Casa de Grete", "Granja"],
  ["Casa de Grete", "Tienda"], ["Plaza de Mercado", "Granja"],
  ["Plaza de Mercado", "Oficina de Correos"], ["Plaza de Mercado", "Tienda"],
  ["Plaza de Mercado", "Ayuntamiento"], ["Tienda", "Ayuntamiento"]
];



const roadGraph = buildGraph(roads);

console.log(roadGraph);
