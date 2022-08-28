import {Menu} from './core/menu'

export class ContextMenu extends Menu {

    constructor(element) {
        super(element)
    }

    // open context menu
    open(event) {
        event.preventDefault()
        this.el.style.top = `${event.clientY}px`
        this.el.style.left = `${event.clientX}px`
        this.el.classList.add("open")
    }

    // close context menu
    close(event) {
        this.el.classList.remove("open")
    }

    // add function in context menu. Get instanceof Module
    add(func) {
        if (func == 0) {
            this.el.innerHTML = ''
            return
        }

        let a = document.createElement('li', {is: 'expanding-list'})
        a.className = "menu-item"
        a.setAttribute('data-type', func.type)
        a.innerText = func.text
        a.addEventListener('click', (event) => func.trigger())
        this.el.append(a)
    }

    // // запускает функцию из меню при клике
    // trigger(event) {
    //     // console.log(event)
    //     let {target} = event
    //     console.log(target.innerText)
    //     console.log(target.getAttribute('data-type'))
    //     // console.log(target.id)
    // }
}

