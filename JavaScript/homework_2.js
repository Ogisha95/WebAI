let year = prompt("Enter a year:");
year = Number(year);
let zodiacIndex = (year - 4) % 12;

let zodiacSigns = [
  "Rat", //index 0 (Ovie gi pisav kako potsetnik deka prviot index e sekogas 0)
  "Ox", //index 1
  "Tiger", //index 2
  "Rabbit", //index 3
  "Dragon", //index 4
  "Snake", //index 5
  "Horse", //index 6
  "Goat", //index 7
  "Monkey", //index 8   
  "Rooster", //index 9
  "Dog", //index 10
  "Pig", //index 11   
];
let zodiac = zodiacSigns[zodiacIndex];
alert("Your Chinese Zodiac sign is: " + zodiac);
