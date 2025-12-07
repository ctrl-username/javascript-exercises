const sumAll = function (min, max) {
  let sum = 0;

  if (min < 0 || max < 0) return "Error";

  let start = 0;
  let end = 0;
  if (min > max) {
    start = max;
    end = min;
  } else if (min < max) {
    start = min;
    end = max;
  } else {
    return (sum += min);
  }

  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumAll(104, 104));
// Do not edit below this line
module.exports = sumAll;
// function takes in two arguements a and b which is presumably used to add numbers starting from a with numbers within a to b
// function gets all possible numbers within a to b
// function adds a with numbers witin then add b
