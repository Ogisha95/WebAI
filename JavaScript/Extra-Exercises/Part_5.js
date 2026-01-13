let studentName = "Bob Bobsky"
let math = 10;
let english = 6;
let science = 8;
let sport = 9;
let chemistry = 6;
let average = (math + english + science + sport + chemistry) / 5


if (average >= 8) {
    console.log("You passed");
} else {
    console.log("You didn't pass");
}

console.log(`${studentName}'s grades:
Math: ${math}
English: ${english}
Science: ${science}
Sport: ${sport}
Chemistry: ${chemistry}`);
console.log(`${studentName}'s average was ${average}`)
