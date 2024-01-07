let x = 0
let y = 0;
let x1 = 0
let y1 = 0

let centerX = 439;
let centerY = 294
var diameter = 100
var drawLine = true
let stepTr = 0
let step = 5;
let tgLine = centerY/centerX

function setup() {
    createCanvas(600, 600)
    frameRate(10)
}
function draw() {
    var r = 10
    background(125, 160, 100);
    fill('yellow')
    circle(centerX, centerY , 10)
    noFill()
    circle(centerX, centerY, diameter)
    line(0, 0, 600, 600 * tgLine)
    line(centerX, centerY, centerY * tgLine + centerX, 0)

    line(centerX, centerY, 0,centerX /tgLine + centerY)
    line(0, centerY,600,centerY)
    line(centerX,0,centerX,600)


    x1 = x1 + step
    y1 = x1 * tgLine
    fill('olive')
    if (drawLine) {
        circle(x1, y1, 10)
    }

    if (x1 >= 600 || y1 >= 600) {
        x1 = 0; y1 = 0; drawLine = true
    }
        // drawLine=false
        x = (diameter/2) * Math.cos(stepTr)
        y = (diameter/2) * Math.sin(stepTr)
        stepTr += 0.2
        circle(x + centerX, y + centerY, 10)
    


}