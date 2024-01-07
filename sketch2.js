let x = 0
let y = 0;
let tangens = 7 / 22
function setup() {
    createCanvas(900, 900)
    frameRate(30)
    line(x, y, 700, 700 * tangens)
}
function draw() {
    fill('green')
    clear()
    circle(123, 234, 22)
    x += 1
    y = Math.floor((x * tangens))

    let color = randomiseColor()
    fill(color[0], color[1], color[2])
     circle(x, y, 10);
    if (x >= 900) { stroke() }
}
function randomiseColor() {
    let color1 = Math.floor(Math.random() * 255)
    let color2 = Math.floor(Math.random() * 255)
    let color3 = Math.floor(Math.random() * 255)
    return [color1, color2, color3]
}