const width = 20;
const height = 10;
const r = width / 2;

function repeat(string, numberOfTimes) {
  if (numberOfTimes === 0) {
    return '';
  }

  return string + repeat(string, numberOfTimes - 1);
}

function emptyScreen() {
  return repeat("-", width * height);
}

function slice(text, start, end) {
  if (start > end) {
    return '';
  }

  return text[start] + slice(text, start + 1, end);
}


function updatedScreen(screen, x, y) {
  const position = y * width + x;

  const screen1 = slice(screen, 0, position - 1);
  const screen2 = slice(screen, position + 1, width * height - 1);

  return screen1 + "@" + screen2;
}

function printScreen(screen) {
  for (let i = 0; i < height; i++) {
    let start = i * width;
    console.log(slice(screen, start, start + width - 1));
  }
}

function delay() {
  for (let i = 0; i < 1000000000; i++) { }
}


function circle() {
  const screen = emptyScreen();
  let x = width / 2;//50
  let y = height / 2;//25
  // let x = 0;
  // let y = 0;

  const newScreen = updatedScreen(screen, x, y);

  // printScreen(newScreen);
  
  let a= '';

  for (let i = 1; i < 360; i += 1) {
    x = (height / 2) - (r * Math.ceil(Math.sin(i)));
    y = (width / 2) - (r * Math.ceil(Math.cos(i)));
    // x = 0;
    // y = 10;
    console.log(x, y);
    
   a = updatedScreen(newScreen, x, y);
    // updatedScreen(screen, x, y);
    printScreen(a);
    // delay();
    // console.clear();
  }
}

circle();