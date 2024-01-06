let x = 0
let y = 0;
let x1 = 0
let y1 = 0
let step = 0.3;
let dirX = true;
let dirY = false;

let centerX = 250;
let centerY = 250;
let counter =0 ;
function setup() {
    createCanvas(600, 600)
    frameRate(30);
}
function draw() {
    var r = 10
    background(255);
    fill('yellow')
    circle(250, 250, 10)
    noFill()
    circle(250, 250, 200)


    if (centerX - x1 <= Math.floor(100 / 1.4142) && centerY - y1 <= Math.floor(100 / 1.4142)) {
        if (x == 0 && y == 0) {
            x = centerX - x1
            y = centerY - y1
            counter++;
        }

        circle(x1, y1, 10)
        stroke()
        var radius = 100
        if (dirX && !dirY) {
            x += step
            y = Math.pow((radius * radius - (radius - x) * (radius - x)), 0.5)
            circle(x + centerX - 100, centerY - y, r)
                      
        } else if (!dirX && dirY) {
            x -= step
            y = Math.pow((radius * radius - (radius - x) * (radius - x)), 0.5)
            circle(centerX + x - 100, centerY + y, r)

        }
        if (x >= 200 && dirX) { dirX = false; dirY = true }
        else if (x <= 0 && !dirX) { dirX = true; dirY = false }

    } else {
        x1 = x1 + 1
        y1 = y1 + 1
        circle(x1, y1, 10)
    }
}