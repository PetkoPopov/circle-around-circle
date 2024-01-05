let x = 0
let y = 0;
let x1=0
let y1=0
let step = 1;
let dirX = true;
let dirY = false;
let coorX = 250;
let coorY = 250;
function setup() {
    createCanvas(600, 600)
    
    frameRate(30);

}


function draw() {
    var r = 10
    background(255);
    circle(350, 250, 200)    
   let radiusVector = 0 ;
    let vector =0
 
    if (coorX-x1<=100  && coorY-y1 <=100) {
        
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
    } else {
        x1 = x1 + 1
        y1 = y1 + 1
        vector = Math.floor(Math.pow((x1 * x1 + y1 * y1), 0.5))
        radiusVector = Math.floor(250 * 1.4142)
        circle(x1, y1, 10)
    }
}