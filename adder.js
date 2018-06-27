console.log('yo');

// should return sum of all numbers passed in an array
const adder = (arr) => {
  let sum = 0;
  arr.forEach((val) => {
    sum += val;
  });
  return sum;
}

isEqual(adder([2, 3]), 5);
isEqual(adder([]), 0);
isEqual(adder([-2, 3]), 1);
isEqual(adder([2, -3]), -1);
isEqual(adder([3]), 3);
isEqual(adder([3, 3]), 6);
isEqual(adder([2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]), 25);
isEqual(adder([2.5, 3]), 5.5);
isEqual(adder([0, 0]), 0);
isEqual(adder([2.5, 3.5]), 6);
console.log('--');
isEqual(adder([0.1, 2.2]), 2.3);

function isEqual(actual, expected) {
  if (actual == expected) {
    console.log('test passed');
  }
  else {
    console.log(actual, expected);
  }
}

module.exports = adder;