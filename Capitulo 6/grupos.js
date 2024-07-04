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
}

// Ejemplo de uso
let group = Group.from([10, 20, 30, 40, 20]);
console.log(group.has(10)); // true
console.log(group.has(50)); // false
group.add(50);
console.log(group.has(50)); // true
group.delete(10);
console.log(group.has(10)); // false
