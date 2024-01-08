let radius = 70;
let size = 10;
let step1 = 4.5;
let step11 = 2.25;
let step2 = 0;
let step22 = 3.75;

let step3 = 1.5;
let step33 = 5.25;
let step4 = 3;
let step44 = 0.75;
let stepSpeed =0.06;
let x1 = 0;
let y1 = 0;
let x = 100;
let y = 100;

function setup() {
    createCanvas(600, 600)
    // frameRate(20)
}
function draw() {
    clear()
    background(125, 160, 10);
    
    noFill ()
    circle(250, 250, radius*2)
    let coor = [
        [250 - radius, 250],
        [250, 250 - radius],
        [250 + radius, 250],
        [250, 250 + radius],
        [250-radius/1.4142,250-radius/1.4142],
        [250+radius/1.4142,250-radius/1.4142],
        [250+radius/1.4142,250+radius/1.4142],
        [250-radius/1.4142,250+radius/1.4142]


    ]
    circle(coor[0][0], coor[0][1], radius * 2)
    circle(coor[1][0], coor[1][1], radius * 2)
    circle(coor[2][0], coor[2][1], radius * 2)
    circle(coor[3][0], coor[3][1], radius * 2)
    circle(coor[4][0], coor[4][1], radius * 2)
    circle(coor[5][0], coor[5][1], radius * 2)
    circle(coor[6][0], coor[6][1], radius * 2)
    circle(coor[7][0], coor[7][1], radius * 2)

fill (129,160,100)
    x1 = radius * Math.sin(step1)
    y1 = radius * Math.cos(step1)
    circle(coor[0][0] + x1, coor[0][1] + y1, size)
    step1 += stepSpeed;
    fill(130,170,11)
    x11 = radius * Math.sin(step11)
    y11 = radius * Math.cos(step11)
    circle(coor[4][0] + x11, coor[4][1] + y11, size)
    step11 += stepSpeed;
    fill(140, 18, 120)
    x2 = radius * Math.sin(step2)
    y2 = radius * Math.cos(step2)
    circle(coor[1][0] + x2, coor[1][1] + y2, size)
    step2 += stepSpeed;
    fill(15, 190, 130)
    x22 = radius * Math.sin(step22)
    y22 = radius * Math.cos(step22)
    circle(coor[5][0] + x22, coor[5][1] + y22, size)
    step22 += stepSpeed;
    fill(10, 200, 140)
    x3 = radius * Math.sin(step3)
    y3 = radius * Math.cos(step3)
    circle(coor[2][0] + x3, coor[2][1] + y3, size)
    step3 += stepSpeed;
    fill(170, 20, 150)

    x33 = radius * Math.sin(step33)
    y33 = radius * Math.cos(step33)
    circle(coor[6][0] + x33, coor[6][1] + y33, size)
    step33 += stepSpeed;

    fill(180, 220, 160)
    x4 = radius * Math.sin(step4)
    y4 = radius * Math.cos(step4)
    circle(coor[3][0] + x4, coor[3][1] + y4, size)
    step4 += stepSpeed;

    fill(190, 230, 17)
    x44 = radius * Math.sin(step44)
    y44 = radius * Math.cos(step44)
    circle(coor[7][0] + x44, coor[7][1] + y44, size)
    step44 += stepSpeed;
    // stroke()
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