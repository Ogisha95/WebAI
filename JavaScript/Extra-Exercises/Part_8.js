let arr = ["Oleg", "", "Marko", null, NaN, "Stefan", undefined, "Sharko", "Igor", "Lemon"]

function removeFalsy(arr) {

let newArray = [];

for (let i = 0; i < arr.length; i++ ) {
    let element = arr[i];
    
    if (element) {
        newArray.push(element);
    }
}

return newArray;
}

let filteredArray = removeFalsy(arr);
console.log(filteredArray);
