import {Module} from '../core/module'

export class superFunc extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() {
        // Тут пишите код своей функции
        console.log(`12345`)
    }
}