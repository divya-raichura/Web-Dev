function getMaxSubSum(arr) {
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      sum += arr[j];
      ans = Math.max(sum, ans);
    }
  }
  return ans;
}

console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));


// optimised 
function getMaxSubSumOpt(arr) {
    let ans = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum+= arr[i];
        if(sum < 0) {
            sum = 0;
        }
        ans = Math.max(ans, sum);
    }
    return ans;
}

console.log(getMaxSubSumOpt([2, -1, 2, 3, -9]));
console.log(getMaxSubSumOpt([-1, 2, 3, -9, 11]));
console.log(getMaxSubSumOpt([-1, 2, 3, -9]));
console.log(getMaxSubSumOpt([-2, -1, 1, 2]));
console.log(getMaxSubSumOpt([100, -9, 2, -3, 5]));
console.log(getMaxSubSumOpt([1, 2, 3]));
