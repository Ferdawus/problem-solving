let sum = 0;
var minimumSum = function minimumSum(num) {
  const arr = num.toString().split("").sort();
  console.log(arr);
  const sum = parseInt(arr[0] + arr[2]) + parseInt(arr[1] + arr[3]);

  return sum;
};
