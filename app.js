//Skriv alt jeres kode her

console.log(
  "Opgave 1.1 - Lav et program, som skriver “Hello World” i konsollen"
);
//Lav jeres svar her
console.log("Hello World");
//Opgave 1.2
console.log("Hello\nWorld")
//Opgave 1.3
console.log("*\n**\n***\n**\n*")
//Opgave 1.4
const ferretsNumber = 2
console.log (typeof ferretsNumber);
//Opgave 1.5
console.log (10-5);
console.log (25/3);
console.log (25%3);
console.log (25%2);
console.log (3**2);
//Opgave 1.6
let tekst1 = ("hello ");
let tekst2 = ("world!");
console.log (tekst1+tekst2);
//Opgave 1.7
const holdet = 'GF2 Online'; 
console.log(holdet.length);
//Opgave 1.8
let x = Math.floor(Math.random()*100+1)
console.log(x);
//Opgave 1.9
let number = 23;
console.log(number)
console.log(number = "23")
console.log (number == "23")
console.log (number === "23")
console.log(number -=23)
console.log(number += 23)
console.log (number += "23")
console.log (number -= "46")
console.log (number != "23")
console.log (number **=2)
//Opgave 2.1
let tal = 200; 
if(tal % 2 == 0) {
  console.log("The number is even.");
}

// if the number is odd
else {
  console.log("The number is odd.");
}
//Opgave 2.2
let tal2 = 27; 
if(tal2 % 5 == 0) {
  console.log("går op i.");
}

// if the number is odd
else {
  console.log("går ik op i.");
}
//Opgave 2.3
let randomtal = Math.floor(Math.random()*100+1)
console.log(randomtal);

if(randomtal % 5 == 0) {
  console.log("går op i.");
}

// if the number is odd
else {
  console.log("går ik op i.");
}
//Opgave 2.4
const num1 = 25;
const num2 = 33;
const num3 = 12;

const highestNumber = Math.max(num1, num2, num3);

console.log(`The highest number is: ${highestNumber}`);

// Two different ways to do this

let a = 25;

let b = 33;

let c = 12;

 

if(a > b && a  > c){

  console.log("a er størst");
} else if (b > a && b > c){
  console.log("b er størst");
} else {console.log("c er størst");
}   


//Opgave 2.5
let temp = 40;
if (temp <= 0){
  console.log("Det er frostvejr");
} else if (temp >= 1 && temp <= 10){
  console.log("Det er meget koldt");
} else if (temp >= 11 && temp <= 20){
  console.log("Det er koldt");
} else if (temp >= 21 && temp <= 30){
    console.log("Det er normalt vejr");
} else if (temp >= 31 && temp <= 40){
  console.log("Det er varmt");
} else if (temp >= 41){
console.log("Det er meget varmt");
}

//Opgave 2.6
let dag = 7;
if (dag == 1){
  console.log("Mandag");
} else if (dag == 2){
  console.log("Tirsdag");
} else if (dag == 3){
  console.log("Onsdag");
} else if (dag == 4){
  console.log("Torsdag");
} else if (dag == 5){
  console.log("Fredag");
} else if (dag == 6){
  console.log("Lørdag");
} else if (dag == 7){
  console.log("Søndag");
} else {
  console.log("Tallet er ikke en ugedag");
}

//Opgave 3.1

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

//Opgave 3.2

for (let i = 0; i <= 100; i++) {
  console.log(i+" " + (i+1) + " " + (i+2) );
}

//Opgave 3.3


