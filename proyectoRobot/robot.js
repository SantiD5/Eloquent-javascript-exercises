
const roads = [
  "Casa de Alice-Casa de Bob", "Casa de Alice-Cabaña",
  "Casa de Alice-Oficina de Correos", "Casa de Bob-Ayuntamiento",
  "Casa de Daria-Casa de Ernie", "Casa de Daria-Ayuntamiento",
  "Casa de Ernie-Casa de Grete", "Casa de Grete-Granja",
  "Casa de Grete-Tienda", "Plaza de Mercado-Granja",
  "Plaza de Mercado-Oficina de Correos", "Plaza de Mercado-Tienda",
  "Plaza de Mercado-Ayuntamiento", "Tienda-Ayuntamiento"
];

function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (from in graph) {
      graph[from].push(to);
    } else {
      graph[from] = [to];
    }
  }
  for (let [from, to] of edges.map(road => road.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}
const roadGraph = buildGraph(roads);
class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }
  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels.map(p => {
        if (p.place != this.place) return p;
        return { place: destination, address: p.address };
      }).filter(p => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}
let first = new VillageState(
  "Oficina de Correos",
  [{ place: "Oficina de Correos", address: "Casa de Alice" }]
);
let next = first.move("Casa de Alice");
console.log(next.place);
// → Casa de Alice
console.log(next.parcels);
// → []
console.log(first.place);
// → Oficina de Correos

function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}
function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}

VillageState.random = function(parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({ place, address });
  }
  return new VillageState("Oficina de Correos", parcels);
};
runRobot(VillageState.random(), randomRobot);

const mailRoute = [
  "Casa de Alice", "Cabaña", "Casa de Alice", "Casa de Bob",
  "Ayuntamiento", "Casa de Daria", "Casa de Ernie",
  "Casa de Grete", "Tienda", "Casa de Grete", "Granja",
  "Plaza del Mercado", "Oficina de Correos"
];
function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1) };
}
function findRoute(graph, from, to) {
  let work = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some(w => w.at == place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
}

function goalOrientedRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1) };
}
//Medicion de un robot 
function countSteps(state, robot, memory, maxSteps = 1000) {
  for (let steps = 0; steps < maxSteps; steps++) {
    if (state.parcels.length == 0) return steps;
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
  return maxSteps;
}

function compareRobots(robot1, memory1, robot2, memory2) {
  let total1 = 0, total2 = 0;
  for (let i = 0; i < 100; i++) {
    let state = VillageState.random();
    total1 += countSteps(state, robot1, memory1);
    total2 += countSteps(state, robot2, memory2);
  }
  console.log(`Robot 1 needed ${total1 / 100} steps per task`);
  console.log(`Robot 2 needed ${total2 / 100} steps per tasks`);
}

compareRobots(routeRobot, [], goalOrientedRobot, []);
// eficiencia del robot
function findClosestParcel(state, graph) {
  let { place, parcels } = state;
  let routes = parcels.map(parcel => {
    if (parcel.place != place) {
      return { route: findRoute(graph, place, parcel.place), pickUp: true, parcel };
    } else {
      return { route: findRoute(graph, place, parcel.address), pickUp: false, parcel };
    }
  });

  return routes.reduce((a, b) => a.route.length < b.route.length ? a : b);
}

function optimizedRobot(state, memory) {
  if (memory.length == 0) {
    let { route } = findClosestParcel(state, roadGraph);
    memory = route;
  }
  return { direction: memory[0], memory: memory.slice(1) };
}
// grupo persistente

class PGroup {
  constructor(miembros) {
    this.miembros = miembros;
  }
  add(value) {
    if (this.has(value)) return this
    return new PGroup([...this.miembros, value])
  }
  delete(value) {
    if (!this.has(value)) return this
    return new PGroup(this.miembros.filter(m => m !== value));
  }
  has(value) {
    return this.miembros.includes(value);
  }
  static empty = new PGroup([]);
}

