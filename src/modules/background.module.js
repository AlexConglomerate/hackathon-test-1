import { Module } from "../core/module";
import { getRandomColor } from "../utils";
import { random } from "../utils";

export class BackgroundModule extends Module {
  constructor() {
    super("background", "Случайный фоновый цвет");
  }

  trigger() {
    const colorOne = getRandomColor();
    const colorTwo = getRandomColor();

    document.body.style.background = `
			linear-gradient(${random(0, 360)}deg, ${colorOne}, ${colorTwo})
		`;
  }
}
