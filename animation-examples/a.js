const SYMBOLS = ["*", "-", " "];
const STAR = "*";
const patterns = [
  ['filled-rectangle', filledRectangle],
  ['hollow-rectangle', hollowRectangle],
  ['alternating-rectangle', alternatingRectangle],
  ['triangle', triangle],
  ['right-aligned-triangle', rightAlignedTriangle],
  ['spaced-alternating-rectangle', spacedAlternatingRectangle],
  ['diamond', diamond],
  ['hollow-diamond', hollowDiamond]
];

function repeat(times, symbol) {
  return symbol.repeat(times);
}

function hollowLine(columns, rows) {
  const array = [];
  if (columns < 1) {
    return '';
  }

  if (columns === 1) {
    return STAR;
  }

  for (let currentRow = 0; currentRow < rows - 2; currentRow++) {
    array.push(STAR + repeat(columns - 2, ' ') + STAR);
  }

  return array.join("\n");
}

function filledRectangle(columns, rows) {
  const array = [];

  for (let currentRow = 0; currentRow < rows; currentRow++) {
    array.push(repeat(columns, STAR));
  }

  return array.join("\n");
}

function hollowRectangle(columns, rows) {
  const array = [];
  array.push(repeat(columns, STAR));

  if (rows < 3 || columns < 3) {
    return filledRectangle(columns, rows);
  }

  array.push(hollowLine(columns, rows));
  array.push(repeat(columns, STAR));

  return array.join("\n");
}

function alternatingRectangle(columns, rows) {
  const array = [];

  for (let currentRow = 0; currentRow < rows; currentRow++) {
    const symbol = SYMBOLS[currentRow % 2];

    array.push(repeat(columns, symbol));
  }

  return array.join("\n");
}

function triangle(size) {
  const array = [];

  for (let column = 1; column <= size; column++) {
    array.push(repeat(column, STAR));
  }

  return array.join("\n");
}

function rightAlignedTriangle(size) {
  const array = [];

  for (let row = 1; row <= size; row++) {
    array.push(repeat(row, STAR).padStart(size));
  }

  return array.join("\n");
}

function spacedAlternatingRectangle(columns, rows) {
  const array = [];

  for (let currentRow = 0; currentRow < rows; currentRow++) {
    const symbol = SYMBOLS[currentRow % 3];

    array.push(repeat(columns, symbol));
  }

  return array.join("\n");
}

function getRow(size, style, i) {
  if (style === 'diamond') {
    return (repeat(i, STAR)).padStart((size + i) / 2);
  }

  return (hollowLine(i, 3)).padStart((size + i) / 2);
}

function getDiamond(size, style) {
  const array = [];
  const validSize = size % 2 === 0 ? size - 1 : size;
  const center = style === 'diamond' ? repeat(validSize, STAR) : hollowLine
    (validSize, 3);

  array.push(center);

  for (let i = validSize - 2; i > 0; i -= 2) {
    const row = getRow(validSize, style, i);
    array.push(row);
    array.unshift(row);
  }

  return array.join("\n");
}

function diamond(size) {
  const style = 'diamond';

  return getDiamond(size, style);
}

function hollowDiamond(size) {
  const style = 'holllow-diamond';

  return getDiamond(size, style);
}

function getStyle(style, dimensions) {
  for (const index of patterns) {
    if (style === index[0]) {
      return index[1](dimensions[0], dimensions[1]);
    }
  }
}

function getMaxLength(array) {
  let maxLength = 0;

  for (let index = 0; index < array.length; index++) {
    maxLength = Math.max(maxLength, array[index].length);
  }

  return maxLength;
}

function combainePattern(style1, dimensions, style2) {
  const array = [];
  const pattern1 = getStyle(style1, dimensions).split("\n");
  const pattern2 = getStyle(style2, dimensions).split("\n");
  const maxLength = getMaxLength(pattern1);

  for (let i = 0; i < pattern1.length; i++) {
    array.push(pattern1[i].padEnd(maxLength) + " " + pattern2[i]);
  }

  return array.join("\n");
}

//------main function----------

function generatePattern(style1, dimensions, style2) {
  const column = dimensions[0];
  const row = dimensions[1];

  if (column <= 0 || row <= 0) {
    return '';
  }

  if (!style2) {
    return getStyle(style1, dimensions);
  }

  return combainePattern(style1, dimensions, style2);
}
//---------------testing part-----------------

function testGeneratePattern(style1, dimensions, expected, failed, style2) {
  const actual = generatePattern(style1, dimensions, style2);
  if (actual !== expected) {
    failed.push([style1, dimensions, actual, expected, style2]);
  }
}

function testFilledRectangle(failed) {
  testGeneratePattern('filled-rectangle', [1, 0], '', failed);
  testGeneratePattern('filled-rectangle', [2, 0], '', failed);
  testGeneratePattern('filled-rectangle', [0, 0], '', failed);
  testGeneratePattern('filled-rectangle', [2, 1], '**', failed);
}

function testHollowRectangle(failed) {
  testGeneratePattern('hollow-rectangle', [1, 1], '*', failed);
  testGeneratePattern('hollow-rectangle', [3, 4], '***\n* *\n* *\n***', failed);
  testGeneratePattern('hollow-rectangle', [1, 5], '*\n*\n*\n*\n*', failed);
  testGeneratePattern('hollow-rectangle', [5, 1], '*****', failed);
  testGeneratePattern("hollow-rectangle", [4, 3], '****\n*  *\n****', failed);
  testGeneratePattern("hollow-rectangle", [5, 4], '*****\n*   *\n*   *\n*****',
    failed);
}

function testAlternatingRectangle(failed) {
  testGeneratePattern("alternating-rectangle", [3, 3], '***\n---\n***', failed);
  testGeneratePattern("alternating-rectangle", [4, 1], '****', failed);
  testGeneratePattern("alternating-rectangle", [6, 2], '******\n------',
    failed);
  testGeneratePattern("alternating-rectangle", [5, 4],
    '*****\n-----\n*****\n-----', failed);
}

function testTriangle(failed) {
  testGeneratePattern("triangle", [0], '', failed);
  testGeneratePattern("triangle", [1], '*', failed);
  testGeneratePattern("triangle", [3], '*\n**\n***', failed);
  testGeneratePattern("triangle", [5], '*\n**\n***\n****\n*****', failed);
}

function testRightAlignedTriangle(failed) {
  testGeneratePattern("right-aligned-triangle", [0], '', failed);
  testGeneratePattern("right-aligned-triangle", [1], '*', failed);
  testGeneratePattern("right-aligned-triangle", [3], '  *\n **\n***', failed);
  testGeneratePattern("right-aligned-triangle", [5], '    *\n   **\n  ***\n ****\n*****', failed);
}

function testSpacedAlternatingRectangle(failed) {
  testGeneratePattern("spaced-alternating-rectangle", [3, 4], '***\n---\n   \n***', failed);
  testGeneratePattern("spaced-alternating-rectangle", [5, 6],
    '*****\n-----\n     \n*****\n-----\n     ', failed);
  testGeneratePattern("spaced-alternating-rectangle", [4, 3],
    '****\n----\n    ', failed);
  testGeneratePattern("spaced-alternating-rectangle", [6, 2],
    '******\n------', failed);
  testGeneratePattern("spaced-alternating-rectangle", [5, 0], '', failed);
  testGeneratePattern("spaced-alternating-rectangle", [0, 9], '', failed);
}

function testDiamond(failed) {
  testGeneratePattern("diamond", [-1], "", failed);
  testGeneratePattern("diamond", [1], "*", failed);
  testGeneratePattern("diamond", [2], "*", failed);
  testGeneratePattern("diamond", [3], " *\n***\n *", failed);
  testGeneratePattern("diamond", [4], " *\n***\n *", failed);
  testGeneratePattern("diamond", [5], "  *\n ***\n*****\n ***\n  *",
    failed);
}

function testHollowDiamond(failed) {
  testGeneratePattern("hollow-diamond", [-1], "", failed);
  testGeneratePattern("hollow-diamond", [0], "", failed);
  testGeneratePattern("hollow-diamond", [1], "*", failed);
  testGeneratePattern("hollow-diamond", [2], "*", failed);
  testGeneratePattern("hollow-diamond", [3], " *\n* *\n *", failed);
  testGeneratePattern("hollow-diamond", [4], " *\n* *\n *", failed);
  testGeneratePattern("hollow-diamond", [5], "  *\n * *\n*   *\n * *\n  *", failed);
}

function testCombinePattern(failed) {
  testGeneratePattern('filled-rectangle', [3, 3], '*** ***\n*** * *\n*** ***', failed, 'hollow-rectangle');
  testGeneratePattern('alternating-rectangle', [4, 3], '**** ****\n---- ----\n****     ', failed, 'spaced-alternating-rectangle');
  testGeneratePattern('triangle', [3], '*     *\n**   **\n*** ***', failed,
    'right-aligned-triangle');
  testGeneratePattern('diamond', [5], '  *     *\n ***   * *\n***** *   *\n ***   * *\n  *     *', failed, 'hollow-diamond');
  testGeneratePattern('hollow-diamond', [5], '  *     *\n * *   ***\n*   * *****\n * *   ***\n  *     *', failed, 'diamond');
  testGeneratePattern('diamond', [2], '* *', failed, 'hollow-diamond');
}

function testAll() {
  const failed = [];

  testFilledRectangle(failed);
  testHollowRectangle(failed);
  testAlternatingRectangle(failed);
  testTriangle(failed);
  testRightAlignedTriangle(failed);
  testSpacedAlternatingRectangle(failed);
  testDiamond(failed);
  testHollowDiamond(failed);
  testCombinePattern(failed);

  console.table(failed);
}

testAll();