$(document).ready(function(){
let myButton = $("#button");
let firstInput = $("#input1");
let secondInput = $("#input2");
let h3 = $("h3");

myButton.click(function(){
    if (firstInput.val() === "") {
        h3.text("Please enter some text!");
        return;  
    }
    if (secondInput.val() === "") {
        h3.text("Please enter a valid color!");
        return; 
    }

$(this).after(`<h1 style="color: ${secondInput.val()}">${firstInput.val()}</h1>`);
});

});