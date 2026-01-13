let userInput = Number(prompt("Enter a number"));

function numSum(num) {    
    let difference;

    if (num > 13) {
        difference = (num - 13) * 2;
    } else {
        difference = 13 - num;
    }

    return difference;     
}

console.log(numSum(userInput));
