const width = 10;
const height = 1;

// function delay() {
//   for (let i = 0; i < 10000000; i++) {}
// }

// function stringReplace(text, index) {
//   if (index >= text.length) {
//     return '';
//   }

//   return  '-' + stringReplace(text, index + 1);
// }

// function replace(text) {
//   return stringReplace(text, 0);
// }

// function car(string, carIndex, strIndex, newString) {
//   if (strIndex > string.length - 1) {
//     return newString;
//   }

//   if (strIndex === carIndex) {
//     newString += "O";
//     return car(string, carIndex, strIndex + 1, newString);
//   }

//   newString += string[strIndex];

//   return car(string, carIndex, strIndex + 1, newString);
// }

// function main(string) {
//   let car2Index = string.length;

// for (let i = 0; i < height; i++) {
//   car2Index--;
//   const car1Index = i;
//   console.log(car(string, car1Index, 0, ''));
//     console.log(car(string, car2Index, 0,''));
//   } 
// }

// function repeat(string, numberOfTimes) {
//   if (numberOfTimes === 0) {
//     return '';
//   }

//   return string + repeat(string, numberOfTimes - 1);
// }

// let string = "";

// for (let i = 0; i < width; i++) {
//   string += "_";
// }

console.log(width + " " + height);
// main(string);

//--------------------using arrays-----------------------------------

function placeObject(screen) {
  let frame = '';

  for (let i = 0; i < screen.length; i++) {
    frame += screen[i].join('O');
  }

  return frame;
}

let screen = [];

function createScreen() {
  return "_".repeat
}
console.log(screen);

// for (let i = 0; i < height; i++) {
//   // car2Index--;
//   const car1Index = i;
//   console.log(placeObject(screen, car1Index, 0, ''));
// }
// placeObject(screen);

