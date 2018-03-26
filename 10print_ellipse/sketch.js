let x = 0;
let y = 0;
let zoom = {
    max: 100,
    min: 5
}

function setup() {
    createCanvas(1000, 1000);
    background(0);
}

function draw() {
    stroke(255);
    noFill();

    // RANDOM NUM //
    let size = random(zoom.min, zoom.max);
    ellipse(x, y, size, size);

    // MOVE TO THE LEFT //
    x += (size + zoom.max + zoom.min) / 2;

    // NEW LINE //
    if (x > 1000) {
        x = 0;
        y += zoom.max;
    }

    // STOP //
    if (y > height) {
        noLoop();
    }
}
