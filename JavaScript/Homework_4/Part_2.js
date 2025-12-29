    function sumNumbers(arr) {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum = sum + arr[i]
            }
        return sum;
    }
    console.log(sumNumbers([10, 25, 3, 9, 12]));


function validateNumber() {
    let arr = [
        Number(prompt("Enter number 1")),
        Number(prompt("Enter number 2")),
        Number(prompt("Enter number 3")),
        Number(prompt("Enter number 4")),
        Number(prompt("Enter number 5"))
    ];

    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            console.log("One of the numbers is invalid!");
            return; 
        }
    }
    console.log("All numbers are valid!");
}
validateNumber();
