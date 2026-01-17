let h1Change = document.getElementById("myTitle");
h1Change.textContent = "No! Not a cool page";

let firstParagraph = h1Change.nextElementSibling;
firstParagraph.textContent = "This is a hard exercise";

let secondParagraph = document.getElementsByClassName("paragraph second")[0];
secondParagraph.textContent = " For some its easy, for some its hard";

let changeText = secondParagraph.nextElementSibling;
changeText.textContent += " text";

let scriptSrc = document.getElementsByTagName("body")[0].lastElementChild;
console.log(scriptSrc);

let scriptTag = scriptSrc.previousElementSibling;
console.log(scriptTag);
let lastDiv = scriptTag.previousElementSibling;
console.log(lastDiv);

let h1InLastDiv = lastDiv.getElementsByTagName("h1")[0];
h1InLastDiv.textContent = "This is changed now";

let h3InLastDiv = h1InLastDiv.nextElementSibling;
h3InLastDiv.textContent = "This is also changed now";