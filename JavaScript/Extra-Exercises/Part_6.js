let num = Number(prompt("Enter a number"))

function fizzBuzz(num) {

    if (num < 0) {
        console.log("Your number is negative")
        return
    }
        else if (num % 3 === 0 && num % 7 === 0) {
        console.log("FizzBuzz")
    }
    else if (num % 3 === 0) {
        console.log("Fizz")
    }
    else if (num % 7 === 0) {
        console.log("Buzz")
    }
    else{
        console.log("Not divisible by 7 nor 3")
    }
}

fizzBuzz(num)