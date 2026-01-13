let num = Number(prompt("Enter First number"));
let num1 = Number(prompt("Enter second number"));

function closerTo100(num, num1) {

if (num < 0 || num1 < 0 ) {
    
console.log("One or two of the numbers are negative and cannot be checked")

return;

}

let distance1 = Math.abs(100 - num);
let distance2 = Math.abs(100 - num1);

if (distance1 < distance2) {
    console.log(`${num} is closer to 100`);
} 
else if (distance2 < distance1) {
    console.log(`${num1} is closer to 100`);
} 
else {
    console.log("Both numbers are equally close to 100");
}

}


closerTo100(num, num1);