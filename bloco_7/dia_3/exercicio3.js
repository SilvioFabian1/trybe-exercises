const { notStrictEqual } = require('assert');
const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
const expected =  myRemoveWithoutCopy([1, 2, 3, 4], 3);
// console.log(myRemoveWithoutCopy([1, 2, 3, 4], 3));
assert.notStrictEqual(expected, [1, 2, 3, 4]);