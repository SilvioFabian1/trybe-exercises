const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
const expected = myRemove([1, 2, 3, 4], 5);
assert.notStrictEqual(expected, [1, 2, 3, 4]);
console.log(expected);