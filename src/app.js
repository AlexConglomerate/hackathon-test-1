import {ContextMenu} from "./menu";
import {WhereClicked} from "@/modules/where.clicked";
import {RandomMessage} from "@/modules/mod_message";
import {timerFunc} from "@/modules/mod_timer";
import {Teleram} from "@/modules/mod_telegram";
import {BackgroundModule} from "./modules/background.module";
import {RandomSoundModule} from "./modules/randomSound";
import {ShapeModule} from "./modules/shape.module";

import { writeCoordinate } from "./utils";
import "./styles.css";

let menu = new ContextMenu("#menu");

let func_analytic = new WhereClicked("type3", "🟢 click analytic");
let func_message = new RandomMessage("typeMessage", "📨 message");
let func_sound = new RandomSoundModule("type33", '🎸 sound')
let func_timer = new timerFunc("type3", "⏲ timer");
let shapeModule = new ShapeModule("type", "📐 figure");
let func_backColor = new BackgroundModule("type56", "🌈 color")
let func_telegram = new Teleram("type69", "➡️ to telegram")

let arr = [func_analytic, func_message, func_sound, func_timer, shapeModule, func_backColor, func_telegram]

document.body.addEventListener("contextmenu", event => {
    writeCoordinate(event) // for telegram
    menu.open(event)
})

document.body.addEventListener("click", event => {
    menu.close(event)
})

document.body.addEventListener("contextmenu", (event) => {
    menu.add(0)
    arr.sort(() => Math.random() - 0.5);
    arr.forEach(i => menu.add(i))
    menu.open(event);
});

document.body.addEventListener("click", (event) => {
    menu.close(event);
});
