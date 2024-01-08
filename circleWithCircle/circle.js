let radius = 70;
let size = 10;
let step1 = 0;
let step2 = 0.9;
let step3 = 1.8;
let step4 = 2.7;

let x1 = 0;
let y1 = 0;
let x = 100;
let y = 100;

function setup() {
    createCanvas(600, 600)
    background(125, 160, 100);
    frameRate(20)
}
function draw() {
    clear()
    circle(250, 250, radius)
    
    let coor = [[250 - radius, 250], [250, 250 - radius], [250 + radius, 250], [250, 250 + radius]]
    // circle(coor[0][0], coor[0][1], radius * 2)
    // circle(coor[1][0], coor[1][1], radius * 2)
    // circle(coor[2][0], coor[2][1], radius * 2)
    // circle(coor[3][0], coor[3][1], radius * 2)


    x1 = radius * Math.sin(step1)
    y1 = radius * Math.cos(step1)
    circle(coor[0][0] + x1, coor[0][1] + y1, size)
    step1 += 0.05;

    x2 = radius * Math.sin(step2)
    y2 = radius * Math.cos(step2)
    circle(coor[1][0] + x2, coor[1][1] + y2, size)
    step2 += 0.05;

    x3 = radius * Math.sin(step3)
    y3 = radius * Math.cos(step3)
    circle(coor[2][0] + x3, coor[2][1] + y3, size)
    step3 += 0.05;

    x4 = radius * Math.sin(step4)
    y4 = radius * Math.cos(step4)
    circle(coor[3][0] + x4, coor[3][1] + y4, size)
    step4 += 0.05;






}
function movingCircleByCoor(x, y, radius, size) {

    let step = 0;
    let x1 = 0;
    let y1 = 0;
    x1 = radius * Math.sin(step)
    y1 = radius * Math.cos(step)

    circle(x + x1, y + y1, size)
    step += 0.1;


}