let x = 0;
let y = 0;
let spacing = 30;

function setup() {
    createCanvas(1000, 1000);
    background(0);
}

function draw() {
    stroke(255);

    // DRAW BS or FS //
    if (random(1) < 0.5) {
        line(x, y, x + spacing, y + spacing);
    } else {
        line(x, y + spacing, x + spacing, y);
    }

    // NEW LINE //
    x += spacing;
    if (x > 1000) {
        x = 0;
        y += spacing;
    }

    // STOP //
    if (y > height) {
        noLoop();
    }
}
