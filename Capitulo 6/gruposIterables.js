
class Group {
	constructor(miembros) {
		this.miembros = [];
	}
	add(value) {
		if (!this.has(value)) {
			this.miembros.push(value);
		}
	}
	delete(value) {
		if (this.has(value)) {
			this.miembros = this.miembros.filter(member => member !== value)
		}
	}
	has(value) {
		return this.miembros.includes(value);
	}
	static from(iterable) {
		let group = new Group();
		for (let value of iterable) {
			group.add(value)
		}
		return group
	}
	[Symbol.iterator]() {
		let index = 0;
		let miembros = this.miembros
		return {
			next() {
				if (index < miembros.length) {
					return { value: miembros[index++], done: false }
				} else {
					return { done: true };
				}
			}
		}
	}
}


// Ejemplo de uso
let group = Group.from([10, 20, 30, 40, 50]);
for (let value of group) {
	console.log(`first groupt iteration ${value}`); // 10, 20, 30, 40
}

group.add(60);
for (let value of group) {
	console.log(value); // 10, 20, 30, 40, 50
}
