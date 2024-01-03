let x = 0
let y;
let step = 1;
let dirX = true;
let dirY = false;
let coorX = 250;
let coorY = 250;
function setup() {
    createCanvas(600, 600)
    frameRate(30);
    
}

function mousePressed(){
    stroke()
}
function draw() {
    var r = 10
    background(255);
    removeElements()
    let krl = createSpan(Math.floor(x))
    var radius = 100
    if (dirX && !dirY) {
        x += step
        y = Math.pow((radius * radius - (radius - x) * (radius - x)), 0.5)
        circle(x + coorX, coorY - y, r)

    } else if (dirX && dirY) {
        // x += step
        // y = Math.pow((radius * radius - (radius - x) * (radius - x)), 0.5)
        // circle(100 + x, 100 + y, r)

    } else if (!dirX && dirY) {
        x -= step
        y = Math.pow((radius * radius - (radius - x) * (radius - x)), 0.5)
        circle(coorX + x, coorY + y, r)

    } else if (!dirX && !dirY) {
        // x -= step
        // y = Math.pow((radius * radius - (radius - x) * (radius - x)), 0.5)
        // circle(100 + x, 100 - y, r)
    }
    if (x >= 200 && dirX) { dirX = false; dirY = true }
    else if (x <= 0 && !dirX) { dirX = true; dirY = false }
    circle(coorX + 100, coorY, 10)
    // stroke()
}