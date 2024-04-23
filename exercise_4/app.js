function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Define variables
  let x = width / 2;
  let y = height / 2;
  let size = 100;

  // Randomly generate color values
  let r = random(255);
  let g = random(255);
  let b = random(255);

  // Set fill color 
  fill(r, g, b);

  // Draw shapes based on mouse position
  ellipse(x, y, size, size);
  rect(x - size / 2, y - size / 2, mouseX, mouseY);
}
