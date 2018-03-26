let x = 0;
let y = 0;
let spacing = 30;

function setup() {
    createCanvas(1000, 1000);
    background(0);
}

function draw() {
    stroke(255);
    noFill();

    // DRAW BS or FS //
    if (random(1) < 0.5) {
        rect(x, y, spacing, spacing);
    } else {
        //rect(x, y + spacing, x + spacing, y);
    }

    // MOVE TO THE LEFT //
    x += spacing;

    // NEW LINE //
    if (x > 1000) {
        x = 0;
        y += spacing;
    }

    // STOP //
    if (y > height) {
        noLoop();
    }
}
