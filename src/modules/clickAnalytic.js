import {Module} from '../core/module'

export class ClickAnalytic extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() {
        let a = prompt('How many seconds to count clicks?')
        a = Number(a)
        if (isNaN(a)) {
            alert(`Enter an integer`)
            return
        }
        let b = -1
        document.addEventListener('click', (event) => {
            b += 1
        })
        setTimeout(() => {
            alert(`You made ${b} clicks in ${a} seconds`)
        }, a * 1000)
    }
}