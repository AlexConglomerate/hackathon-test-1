import {ContextMenu} from "./menu";
import {WhereClicked} from "@/modules/where.clicked";
import {RandomMessage} from "@/modules/mod_message";
import {timerFunc} from "@/modules/mod_timer";
import {BackgroundModule} from "./modules/background.module";
import {RandomSoundModule} from "./modules/randomSound";
import {ShapeModule} from "./modules/shape.module";

import "./styles.css";

let menu = new ContextMenu("#menu");

let shapeModule = new ShapeModule("type", "📐 figure");
menu.add(shapeModule);

let func3 = new WhereClicked("type3", "🟢 click analytic");
menu.add(func3);

let func_message = new RandomMessage("typeMessage", "📨 message");
menu.add(func_message);

let func_sound = new RandomSoundModule("type33", '🎸 sound')
menu.add(func_sound)

let func4 = new timerFunc("type3", "⏲ timer");
menu.add(func4);

let func_backColor = new BackgroundModule("type56", "🌈 color")
menu.add(func_backColor)

document.body.addEventListener("contextmenu", (event) => {
    menu.open(event);
});

document.body.addEventListener("click", (event) => {
    menu.close(event);
    // menu.trigger(event)
});
