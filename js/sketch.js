function setup() {
    createCanvas(400, 400);
    background(210);
}

function draw() {
    rectMode(CENTER);
    fill(0,0,255);
    stroke(100, 0 , 25,50);
    strokeWeight(50);
    rect(mouseX, mouseY, 55, 55);
}

