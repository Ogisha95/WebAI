function maxMinNumbers() {
let arr = [95, "hello", 6, 30, 35, true, 90];
let max = arr[0];
let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
        if (arr[i] > max) max = arr[i]
        if (arr[i] < min) min = arr[i]
        }
    }
    return "Max: " + max + ", Min: " + min + ", Sum: " + (max + min);

}

console.log(maxMinNumbers());