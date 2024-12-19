const width = 10;
const height = 10;

const screen = [];

function put(screen, x, y, char) {
  screen[x][y] = char;
}

function placeObject(screen) {
  let frame = '';

  for (let i = 0; i < screen.length; i++) {
    frame += screen[i].join('');
  }

  return frame;
}

// function 
// let screen = '';
for (let i = 0; i < height; i++) {
  const row = [];
  for (let j = 0; j < width; j++) {
    row.push(' ');
  }

  screen.push(row);
}

console.log(width + ' ' + height);

function getLine(x1, x2, y) {
  let noOfFrames = "";
  for (let x = 0; x < x2; x++) {
    put(screen, x1, y, "*");
    noOfFrames += placeObject(screen);
  }
   
  return noOfFrames;
}

//  getLine(2, 5, 3);
// put(screen, 2, 3, "+");
// noOfFrames += displayScreen(screen);

console.log(getLine(2, 3, 3));