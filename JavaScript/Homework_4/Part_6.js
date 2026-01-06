function combineNames(firstNames, lastNames) {
    let fullNames = []; 

    for (let i = 0; i < firstNames.length; i++) {
        let name = (i + 1) + ". " + firstNames[i] + " " + lastNames[i];
        fullNames.push(name);
    }
    return fullNames; 
}

let first = ["Bob", "Jill"];
let last = ["Gregory", "Wurtz"];

console.log(combineNames(first, last));
