const lessThan = function (index , to) {
  return index < to;
}

const greaterThan = function (index , to) {
  return index > to;
}

const range = function (from, to, step) {
  const array = [];
  const functionName = getFunctionName(from, to);

  for (let index = from; functionName(index, to); index += step) {
    array.push(index);
  } 

  return array;
}

const getFunctionName = function(from, to) {
  return from < to ? lessThan : greaterThan;
}