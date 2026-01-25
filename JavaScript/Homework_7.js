let userCollumns = Number(prompt("How many collumns would you like your table to have?"));
let userRows = Number(prompt("How many rows would you like your table to have?"));
let tableBody = document.getElementsByClassName("tablebody")[0];

function userTable(){
    tableBody.innerHTML = ""; 
    for (let i = 1; i <= userRows; i++) {
        let rowHTML = "<tr>"; 
        for (let j = 1; j <= userCollumns; j++) {
            rowHTML += `<td>Row-${i} Column-${j}</td>`; 
        }
        rowHTML += "</tr>"; 
        tableBody.innerHTML += rowHTML; 
    }
}

userTable();