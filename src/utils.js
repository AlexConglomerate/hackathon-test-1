export function random(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        // console.log(color);
    }
    //   console.log(color);
    return color;
}

export function writeCoordinate(event) {
    localStorage.clear()
    let i = {
        x: `${event.clientX}px`,
        y: `${event.clientY}px`,
    }
    localStorage.setItem('xy', JSON.stringify(i))
    //
    // let a = localStorage.getItem('xy')
    // a = JSON.parse(a)
    // console.log(a + " - " + a.x + " - " + a.y)
}