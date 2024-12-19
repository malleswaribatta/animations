function half(value) {
  return (value / 2);
}

function getUpperCase(value) {
  return value.toUpperCase();
}

const map = function (referenceOffunction, array) {
  const result = [];

  for (const value of array) {
    result.push(referenceOffunction(value));
  }

  return result;
}

const squareRoot = map(Math.sqrt,[1, 2, 3]);
const halfValues = map(half,[1, 2, 3]);
const upperCase = map(getUpperCase,['abcd', 'fghi']);

console.log(squareRoot, halfValues, upperCase);

//-------------second pattern-------------

function isOdd(number) {
  return (number & 1) === 1;
}

function isMoreThan5Charecters(string) {
  return string.length > 5;
}

const fillteredArray = function (referenceOffunction, array) {
  const result = [];

  for (const element of array) {
    if (referenceOffunction(element)) {
      result.push(element);
    }
  }

  return result;
}

const odds = fillteredArray(isOdd,[1, 2, 3]);
const moreThan5 = fillteredArray(isMoreThan5Charecters,['hello world','hello']);

console.log(odds, moreThan5);