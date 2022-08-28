import './styles.css'

import {ContextMenu} from './menu'
import {superFunc} from "@/modules/superFunction";
import {ClickAnalytic} from "@/modules/clickAnalytic";
import {WhereClicked} from "@/modules/where.clicked";

let menu = new ContextMenu('#menu')

let func1 = new superFunc('type1', 'Hello')
menu.add(func1)

let func2 = new ClickAnalytic("type2", 'click analytic')
menu.add(func2)

let func3 = new WhereClicked("type3", 'where clicked')
menu.add(func3)


document.body.addEventListener("contextmenu", event => {
    menu.open(event)
})

document.body.addEventListener("click", event => {
    menu.close(event)
    // menu.trigger(event)
})

