$(document).ready(function(){
let myButton = $("#button");
let firstInput = $("#input1");
let secondInput = $("#input2");
let h1 = $("h1");
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

$(h1).text(`${firstInput.val()}`)
$(h1).css("color", secondInput.val());
});

});