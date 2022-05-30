import { Vector } from './Vector';

export function Layer (options) {
	this.options = options;
	this.element = document.createElement('div');
	this.zPos = options.zPos;
}

Layer.prototype.render = function () {
	this.element.className = 'layer';
	this.element.innerHTML = this.options.content;
	const transform = `translateZ(${this.zPos}px)`;
	this.element.setAttribute('style', `transform: ${transform}`);
	this.options.parent.appendChild(this.element);
	return this;
}

Layer.prototype.update = function (zVel) {
	this.zPos += zVel;
	const opacity = 1 - (this.zPos / this.options.parent.clientHeight);
	const transform = `translateZ(${this.zPos}px)`;
	this.element.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`);
	return this;
}
