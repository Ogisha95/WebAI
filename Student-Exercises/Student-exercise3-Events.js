let clickButton = document.getElementById("button");
let firstName = document.getElementsByClassName("firstname")[0];
let lastName = document.getElementsByClassName("lastname")[0];
let inputEmail = document.getElementsByClassName("email")[0];
let inputPassword = document.getElementsByClassName("password")[0];
let getParagraph = document.getElementById("paragraph");


clickButton.addEventListener("click", function(event) {
    let fName = firstName.value;
    let lName = lastName.value;
    let email = inputEmail.value;
    let password = inputPassword.value;
    let combinedString = combineInfo(fName, lName, email, password);
    getParagraph.textContent = combinedString;
});

function combineInfo(fName, lName, email, password) {
    return `Your inputs were ${fName} ${lName} ${email} and ${password}`;
}