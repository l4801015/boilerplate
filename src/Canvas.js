export function Canvas (width, height) {
	this.width = width;
	this.height = height;
	this.canvas = document.createElement('canvas');
	this.canvas.width = width;
	this.canvas.height = height;
	this.context = this.canvas.getContext('2d');
}

Canvas.prototype.init = function () {
	this.canvas.style.position = 'absolute';
	this.canvas.style.top = '0px';
	this.canvas.style.left = '0px';
	this.canvas.style.width = '100%';
	this.canvas.style.height = '100%';
	this.context.translate(this.width / 2, this.height / 2);
	this.clear();
	document.body.appendChild(this.canvas);
	return this.context;
}


Canvas.prototype.clear = function () {
	this.context.clearRect(-this.width / 2, -this.height / 2, this.width, this.height);
	// fill the background with sky blue
	this.context.fillStyle = '#87CEFA';
	this.context.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
}


