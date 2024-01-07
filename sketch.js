let x = 0
let y = 0;
let x1 = 0
let y1 = 0
///////////////////////////////
/////////////////////////////
let centerX = 150
let centerY = 94
///////////////////////////////////
/////////////////////////////////////////
var diameter = 100
var drawLine = true
let stepTr = 0
let step = 5;
let tgLine = centerY / centerX
let oneTime = false

function setup() {
    createCanvas(600, 600)
    frameRate(10)
}
function draw() {
    var r = 10
    background(125, 160, 100);
    fill('yellow')
    circle(centerX, centerY, 10)
    noFill()
    circle(centerX, centerY, diameter)
    line(0, 0, 600, 600 * tgLine)
    line(centerX, centerY, centerY * tgLine + centerX, 0)

    line(centerX, centerY, 0, centerX / tgLine + centerY)
    line(0, centerY, 600, centerY)
    line(centerX, 0, centerX, 600)


    
    let rV = centerX * centerX + centerY * centerY
    let rVector = Math.pow(rV, 0.5)
    let tmpV = x1 * x1 + y1 * y1
    let tmpVector = Math.pow(tmpV, 0.5)
    if (rVector - tmpVector <= diameter / 2) {
        drawLine = false
        if (!oneTime) {
            oneTime = true
            stepTr = (360 - Math.atan(tgLine)) / 10
        }
        x = (diameter / 2) * Math.cos(stepTr)
        y = (diameter / 2) * Math.sin(stepTr)
        //1 ===10 gradusa (360-arctg(tgLine))/10
        // stroke()
        fill('red')
        circle(x + centerX, y + centerY, 10)
        // stroke()
        stepTr += 0.05
        if (false) {
            drawLine = true
        }
        // stroke()
        
    }else{
        
        x1 = x1 + step
        y1 = x1 * tgLine
        fill('olive')
        if (drawLine) {
            circle(x1, y1, 10) // move by line 
        }
    
        if (x1 >= 600 || y1 >= 600) {
            x1 = 0; y1 = 0; drawLine = true
        }
    }


}
