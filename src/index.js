import VConsole from "vconsole";
const vConsole = new VConsole();

import "./styles.scss";
import { Layer } from "./Layer";
import { Vector } from "./Vector";

const gallery = document.querySelector(".gallery");
const data = ["Россия", "США", "Китай", "Япония", "Германия", "Франция"];
const layers = [];

const zSpacing = -1000;
let lastVel = zSpacing / 5

const setup = (data, gallery, layers) => {
	for (let i = 0; i < data.length; i++) {
		const options = {
			content: data[i],
			parent: gallery,
			zPos: i * zSpacing + zSpacing,
		};
		const layer = new Layer(options);
		layers.push(layer);
		layer.render();
	}
};

setup(data, gallery, layers);

window.onscroll = (e) => {
	e.preventDefault();

	const top = document.documentElement.scrollTop;
	const delta = lastVel - top; 
  lastVel = top;

	layers.forEach((layer) => {
		layer.update(delta * -5.5);
	});
};

window.scrollTo(0, 1);
