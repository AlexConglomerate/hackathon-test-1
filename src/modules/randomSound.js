import {Module} from '../core/module'

export class RandomSoundModule extends Module {
    constructor(name, type) {
        super (name, type)
    }
    playRandomSound() {
        const sound1 = new Audio('https://song.nazvonok.ru/song/6c80/sms-uvedomlenie-na-iphone-zvuk-sms-na-telefonah-apple.mp3')
        const sound2 = new Audio('https://song.nazvonok.ru/song/bfc4/vystrel-s-glushitelya-prikol-na-sms---glushitelya.mp3')
        const sound3 = new Audio('https://song.nazvonok.ru/song/2e84/detskiy-chih-smeshnoy-zvuk-detskogo-chiha.mp3')
        const sound4 = new Audio('https://song.nazvonok.ru/song/e82a/ooo-chpok.mp3')
        let soundArr = [sound1, sound2, sound3, sound4]
        let random = Math.floor(Math.random() * soundArr.length)
        soundArr[random].play()
        //console.log('play!', soundArr[random])
    }

    trigger() {
        this.playRandomSound()
      }
    
      toHTML() {
        return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
      }

}