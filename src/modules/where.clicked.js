import {Module} from '../core/module'

export class WhereClicked extends Module {
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
        let doc = []
        document.addEventListener('click', (event) => {
            b += 1
            doc.push({x: event.clientX, y: event.clientY,})
        })


        setTimeout(() => {
            let getRandom = (min, max) => Math.ceil(Math.random() * (max - min) + min)
            let getRandomColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`

            doc.forEach((i, n) => {
                    let a = document.createElement('a')
                    a.className = 'circle'
                    a.textContent = n
                    a.style.top = `${i.y}px`
                    a.style.left = `${i.x}px`
                    a.style.backgroundColor = getRandomColor
                    if (n != 0) document.body.append(a)
                }
            )
            alert(`You made ${b} clicks in ${a} seconds!!!!!!!!!!`)
        }, a * 1000)
    }
}