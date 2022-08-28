import {Module} from "../core/module";

export class timerFunc extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() {
        const time =
            1 +
            Number(prompt("Введите количество секунд для обратного отсчета").trim());

        const body = document.querySelector("body");
        const span = document.createElement("span");
        span.classList = "timer-content";
        body.append(span);

        function formatTime(time) {
            const min = Math.floor(time / 60);
            let sec = time % 60;
            if (sec < 10) {
                sec = `0${sec}`;
            }

            return `${min}:${sec}`;
        }

        const limit = time;
        let passed = 0;
        let left = limit;

        function startTimer() {
            let timerInterval = setInterval(() => {
                passed = passed += 1;
                left = limit - passed;
                if (left > 0) {
                    span.textContent = formatTime(left);
                } else {
                    span.remove();
                }
                if (!left) {
                    clearInterval(timerInterval);
                    alert("Таймер завершил отсчет");
                }
            }, 1000);
        }

        startTimer();
    }
}