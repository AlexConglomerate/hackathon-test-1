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
        <button id = "btn" class="btn" >Send</button>`


        let a = document.createElement('t')
        let coordinate = localStorage.getItem('xy')
        coordinate = JSON.parse(coordinate)

        a.innerHTML = html
        a.style.position = 'absolute'
        a.style.top = coordinate.y
        a.style.left = coordinate.x
        document.body.append(a)


        document.querySelector('.btn').addEventListener('click', (event) => {

            let a = event.path[1]
            let text = a.querySelector('#val').value
            a.remove()

            let chatId = -1001595369375
            this.simpleMessage(chatId, text)


            let r = document.createElement('y')
            let coordinate = localStorage.getItem('xy')
            coordinate = JSON.parse(coordinate)

            r.innerHTML = `Ваше сообщение пришло в этот чат:<br> <a target="_blank" href="https://t.me/hackatonchic">https://t.me/hackatonchic</a></p>`
            r.style.position = 'absolute'
            r.style.top = coordinate.y
            r.style.left = coordinate.x
            document.body.append(r)
        })
    }
}