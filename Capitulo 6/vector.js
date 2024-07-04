class vec {
	constructor(x, y) {
		this.y = y;
		this.x = x;
	}

	plus(z, w) {
		let newX = this.x + z
		let newY = this.y + w
		return (`vector: (${this.x},${this.y}) + (${z},${w}) = (${newX},${newY})`)
	}
	minus(j, k) {
		let minusX = this.x - j;
		let minusY = this.y - k;
		return (`vector: (${this.x},${this.y}) - (${j},${k}) = (${minusX},${minusY})`)
	}
	get length() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
}
let myVec = new vec(1, 2);
console.log(myVec.plus(1, 4))
