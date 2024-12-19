function createScreen(width, height) {
  const screen = [];
  for (let i = 0; i < height; i++) {
    const row = [];
    for (let j = 0; j < width; j++) {
      row.push(' ');
    }
    screen.push(row);
  }

  return screen;
}

function putPixel(screen, char, x, y) {
  if (x < 0 || x >= screen[0].length || y < 0 || y >= screen.length) {
    return;
  }

  screen[Math.floor(y)][Math.floor(x)] = char;
}

function drawHorizontalLine(screen, char, x1, x2, y) {
  for (let i = x1; i <= x2; i++) {
    putPixel(screen, char, i, y);
  }
}

function screenToString(screen) {
  let frame = '';
  for (let i = 0; i < screen.length; i++) {
    frame += screen[i].join('');
  }
  
  return frame;
}

function displayScreen(screen) {
  for (const line of screen) {
    console.log(line.join(''));
  }
}

const WIDTH = 11;
const HEIGHT = 11;

function draw() {
  let screen = createScreen(WIDTH, HEIGHT);
  
  let x1 = WIDTH / 2;
  let x2 = WIDTH / 2;
  let frame = '';

  for (let i = 0; i < HEIGHT / 2 ; i++) {
   drawHorizontalLine(screen, '*', x1, x2, i)
   frame += screenToString(screen);
    x1 -= 1;
    x2 += 1;
  }
  
  for (let j = (HEIGHT / 2) - 1; j <= HEIGHT; j++) {
    drawHorizontalLine(screen, '*', x1 + 1, x2 - 1, j);
    frame += screenToString(screen);
    x1 += 1;
    x2 -= 1;
  }
  
  return frame;
}

console.log(WIDTH + " " + HEIGHT);
console.log(draw());
