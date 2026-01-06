let animal = {
name: "Bob",
kind: "Pug",
speak: function(message) {

    console.log(this.name + " says: " + message )
    }
};

animal.speak("Hey bro!!!");

// Bonus
let nameInput = prompt("Enter the animal's name:");
let kindInput = prompt("Enter the animal's kind:");
let messageInput = prompt("What does the animal say?");

let yourAnimal = {
    name: nameInput,
    kind: kindInput,
    speak: function (message) {

        console.log(" Your dog is called a " + this.name + " ," + " is a " + this.kind + " and says " + messageInput)
    }
};

yourAnimal.speak();
