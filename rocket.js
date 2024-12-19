// const width = 5;
// const height = 3;

// function repeat(string, numberOfTimes) {
//   if (numberOfTimes === 0) {
//     return '';
//   }

//   return string + repeat(string, numberOfTimes - 1);
// }

// let string = '';
// function delay() {
//   for (let i = 0; i < 100000000; i++) { }
// }
// function getString(symbolIndex, symbol, strIndex) {

//   if (strIndex > width - 1) {
//     return string;
//   }


//   for (let index = strIndex; index < height - symbolIndex; index++) {
//     string += repeat("-",5) + "\n";
//   }

//   if (strIndex === symbolIndex) {
//     string += symbol;
//   }

//   string += "-";
//   console.log(string);
//   delay();
//   console.clear();
//   return getString(symbolIndex, symbol, height - symbolIndex + 1);
// }

// function main() {
//   for (let i = 0; i < height; i++) {
//     return getString(i, "O", 0);
//   }
// }

// main();
// // for (let i = 0; i < height; i++) {
// //   let screen = repeat("-", width);
// //   console.log(screen);
// // }

// // let x = 
// // let index =




function delay() {
  for (let i = 0; i < 1000000000; i++) { }
}

function car(string, carIndex, strIndex, newString) {
  if (strIndex > string.length - 1) {
    return newString;
  }

  if (strIndex === carIndex) {
    newString += "ō͡≡o˞̶";
  }

  newString += string[strIndex];

  return car(string, carIndex, strIndex + 1, newString);
}

function main(string) {
  for (let i = 0; i < string.length - 1; i++) {
    console.log(car(string, i, 0, ''));
    delay();
    console.clear();
    console.log(building);
  }
}

function repeat(string, numberOfTimes) {
  if (numberOfTimes === 0) {
    return '';
  }

  return string + repeat(string, numberOfTimes - 1);
}


let string = "";

for (let j = 0; j < 5; j++) {
  for (let i = 0; i < 10; i++) {
    string += "_";
  }
  string += "\n";
}

console.log(string);
let newString = "";

// main(string)