import { Module } from "../core/module";
import { getRandomColor, random } from "../utils";

export class ShapeModule extends Module {
  constructor() {
    super("shape", "create shape");
    this.shapeEl = document.createElement("div");
  }

  trigger() {
    const shapeHeight = random(40, 320);
    const shapeWidth = random(40, 320);

    this.shapeEl.style.height = shapeHeight + "px";
    this.shapeEl.style.width = shapeWidth + "px";
    this.shapeEl.style.background = getRandomColor();
    this.shapeEl.style.borderRadius = random(4, 80) + "%";
    this.shapeEl.style.position = "absolute";
    this.shapeEl.style.top = random(20, 900) + "px";
    this.shapeEl.style.left = random(20, 900) + "px";
    document.body.append(this.shapeEl);
  }
}
