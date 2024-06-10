function twoSum(param1, param2) {
  return param1 + param2;
}
console.log(twoSum(1, 2));

function totalSum(...param) {
  total = 0;
  param.forEach((element) => {
    total += element;
  });
  return total;
}
console.log(totalSum(1, 2, 3, 4, 5, 6, 7, 8, 9));
