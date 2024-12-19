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

function putString(screen, str, x, y) {
  for (let i = 0; i < str.length; i++) {
    putPixel(screen, str[i], x + i, y);
  }
}

function displayScreen(screen) {
  for (const line of screen) {
    console.log(line.join(''));
  }
}

function putParticle(screen, particle) {
  const position = particle[0];
  const symbol = particle[1];
  const radius = particle[2];
  const angle = particle[3];

  const x = position[0] + radius * Math.cos(angle);
  const y = position[1] + radius * Math.sin(angle);


  // putString(screen, 'C', position[0], position[1]);
  putString(screen, symbol, x, y);
}

function degreesToRadians(degrees) {
  return degrees * Math.PI / 180;
}

const WIDTH = 10;
const HEIGHT = 5;

function main() {
  const screen = createScreen(WIDTH, HEIGHT);
  const particle = [[WIDTH / 2, HEIGHT / 2], 'P', 5, degreesToRadians(0)];
  putParticle(screen, particle);
  displayScreen(screen);  
}

console.log(WIDTH + " " + HEIGHT)
main();
