function countDown(num) {
let result = []

for (let i = num; i >= 0; i-- ) {
    result.push(i);
}
return result;
}

console.log(countDown(5))