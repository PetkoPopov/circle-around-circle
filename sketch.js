let x = 0
let y = 0;
let x1 = 0
let y1 = 0
let step = 5;
let dirX = true;
let dirY = false;

let coorInputX;
let coorInputY;
let centerX = 250;
let centerY = 250;
var radius = 100
var drawLine = false
let counter = 0;
function setup() {
    createCanvas(600, 600)
    frameRate(10)
}
function draw() {
    var r = 10
    background(125, 160, 100);
    fill('yellow')
    circle(250, 250, 10)
    noFill()
    circle(250, 250, 200)
    line(0, 0, 600, 600)
    line(0, 250, 600, 250)
    line(250, 0, 250, 600)

   /////////////////////////////////////////////////#
   /////////////////////////////////////////////////#
   ///////////////////// \\\\\\\\\\\\\\\\\\\\\\\\\\\#
   //////////////////// ! \\\\\\\\\\\\\\\\\\\\\\\\\\#
   ///////////////////  !  \\\\\\\\\\\\\\\\\\\\\\\\\#
   //////////////////   !   \\\\\\\\\\\\\\\\\\\\\\\\#
   /////////////////////////////////////////////////# 

    ///////////////////////////////////////////////
    //
    // Не забравяй че x се отчета от началото на кръга до края на кръга
    // тоест достига 2 радиуса 
    // НЕ Е от центъра както го правят хората 
    //
    /////////////////////////////////////////////////////////////////////
    if (centerX - x1 <= Math.floor(radius / 1.4142)
        && centerY - y1 <= Math.floor(radius / 1.4142)
        && !drawLine) {
        if (x == 0 && y == 0) {
            x = centerX - x1
            y = centerY - y1
            coorInputX = x;
            coorInputY = y;
            counter++;
        }
        fill('red')

        if (dirX && !dirY) {
            x += step
            y = Math.pow((radius * radius - (radius - x) * (radius - x)), 0.5)
            circle(x + centerX - radius, centerY - y, r)

        } else if (!dirX && dirY) {
            x -= step
            y = Math.pow((radius * radius - (radius - x) * (radius - x)), 0.5)
            circle(centerX + x - radius, centerY + y, r)
            if (coorInputX == x - radius) {
                drawLine = true;
                x1 = x + centerX - radius;
                y1 = y + centerY;
                dirX = true;
                dirY = false;
            }
        }
        if (x >= 2 * radius && dirX) { dirX = false; dirY = true }
        else if (x <= 0 && !dirX) { dirX = true; dirY = false }


    } else {
        x1 = x1 + step
        y1 = y1 + step
        fill('olive')
        circle(x1, y1, 10)
    }
    if (x1 >= 600 || y1 >= 600) {
        x1 = 0; y1 = 0; drawLine = false
    }
}