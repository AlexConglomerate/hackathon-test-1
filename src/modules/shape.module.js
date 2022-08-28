import { Module } from "../core/module";
import { getRandomColor, random } from "../utils";

export class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.shapeEl = document.createElement("div");
  }

  trigger() {
    const shapeHeight = random(40, 320);
    const shapeWidth = random(40, 320);

    this.shapeEl.style.height = shapeHeight + "px";
    this.shapeEl.style.width = shapeWidth + "px";
    this.shapeEl.style.borderRadius = random(4, 80) + "%";
    this.shapeEl.style.background = getRandomColor();
    this.shapeEl.style.position = "absolute";
    this.shapeEl.style.top =
      random(0, document.documentElement.clientHeight - shapeHeight) + "px";
    this.shapeEl.style.left =
      random(0, document.documentElement.clientHeight - shapeWidth) + "px";
    document.body.append(this.shapeEl);

    const timeToKill = setTimeout(() => {
      this.shapeEl.remove();
      clearTimeout(timeToKill);
    }, 6000);
  }
}
