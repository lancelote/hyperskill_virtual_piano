const white = ["A", "S", "D", "F", "G", "H", "J"];
const black = ["W", "E", "T", "Y", "U"];

function play(key, color) {
    let audio = new Audio(`${color}_keys/${key}.mp3`);
    audio.play();
    console.log(`The ${color} '${key}' is pressed.`);
}

document.addEventListener("keydown", function (event) {
    let key = event.key.toUpperCase();

    if (white.includes(key)) {
        play(key, "white");
    } else if (black.includes(key)) {
        play(key, "black");
    } else {
        console.log(`Unknown character '${key}' is pressed.`)
    }
});
