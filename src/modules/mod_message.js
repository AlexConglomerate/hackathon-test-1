import {Module} from '../core/module'

export class RandomMessage extends Module {
    constructor(type, text) {
        super(type, text)
    }

    randomMessage() {
        const messageArr = [
            'Hello world!', 'I love JavaScript',
            'Its so hard to study', 'Hard work',
            'Take it easy', 'Future JS Developer!!!'
        ]
        let random = Math.floor(Math.random() * messageArr.length)
        //console.log(messageArr[random])
        return messageArr[random]
    }

    messageToHTML() {
        const message = document.createElement('h3')
        message.textContent = this.randomMessage()
        document.body.append(message)
        let intervals = setInterval(() => {
            message.textContent = ''
            clearInterval(intervals)
        }, 3000)
    }

    trigger() {
        this.messageToHTML()
    }

    toHTML() {
        return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
    }
}