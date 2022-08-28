import {Module} from '../core/module'

export class Teleram extends Module {

    constructor(type, text) {
        super(type, text)
    }

    simpleMessage(chatId, text) {
        let token = '5668553863:AAFbUvYekb_aVMpn9fd-jJ7Hg7lG4wmpJAw'
        let url = 'https://api.telegram.org/bot' + token + '/'

        const header = {
            'Content-Type': 'application/json'
        }

        let body = {
            method: 'sendMessage',
            chat_id: String(chatId),
            text: text,
        }

        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: header
        }).then(response => {
            response.json()
        })
    }


    trigger() {
        let html = `
        Text message:
        <br>
        <input type="text" id="val" value="">
        <br>
        <br>
        <button id = "btn" >Send</button>`

        let a = document.createElement('t')
        a.innerHTML = html
        a.style.position = "absolute"
        a.style.left = "40%"
        a.style.top = "40%"
        document.body.append(a)

        document.querySelector('#btn').addEventListener('click', (event) => {
            let text = document.querySelector('#val').value

            let arr = document.querySelectorAll('t')
            arr = [...arr]
            arr.forEach(i => i.remove())

            let chatId = -1001595369375
            this.simpleMessage(chatId, text)
        })
    }
}