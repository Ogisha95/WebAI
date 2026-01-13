function adjustArray(arr) {
  let result = [];

for (let i = 0; i < arr.length; i++) {
if (arr[i] % 2 !== 0) {
  result.push(arr[i] + 1);
} else {
  result.push(arr[i] - 1);
}

}

  return result;
}

console.log(adjustArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
