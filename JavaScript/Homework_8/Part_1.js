$(document).ready(function(){
let myButton = $("#button");
let myInput = $("#input");
let h1 = $("h1");

myButton.click(function(){
    $(h1).text(`Hello there ${myInput.val()}`);
}

)});