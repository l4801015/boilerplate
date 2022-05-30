export function Vector(x, y, z, w) {
	this.x = x;
	this.y = y;
	this.z = z;
	this.w = w;
}

Vector.prototype.add = function(v) {
	this.x += v.x;
	this.y += v.y;
	this.z += v.z;
	this.w += v.w;
	return this;
}
