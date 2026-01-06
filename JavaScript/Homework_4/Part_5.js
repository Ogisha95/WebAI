function maxMinNumbers() {
    let arr = ["hello", 95, 6, 30, 35, true, 90];
    let max, min;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number") continue; 

        if (max === undefined) {
            max = arr[i];
            min = arr[i];
        }

        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }

    return "Max: " + max + ", Min: " + min + ", Sum: " + (max + min);
}

console.log(maxMinNumbers());
