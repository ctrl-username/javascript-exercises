const removeFromArray = function (arr, ...num) {
  for (let i = 0; i < arr.length; i++) {
    if (num.includes(arr[i])) {
      console.log("num", num);
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
};
console.log(removeFromArray([1, 2, 3, 4, 5], 2, 1, 3));
// Do not edit below this line
module.exports = removeFromArray;
