// Question 1-Card
document.querySelector(".card-header").style.color = 'red'

// Question 2
let persons = ["Toba", "Mitems", "Shytemi", "Emmanuel", "Jhenna", "Demand", "Korex", "Obums"]
console.log(persons[2]);

// Question 3
let teamMember = {
    firstName: 'Elizabeth',
    lastName: 'Bamigboye',
    bestMovie: 'Mouse',
    complexion: 'Lightskin',
    birthMonth: 'June',
    state: 'Ekiti',
    groupName: 'Athena'
};
console.log(teamMember.bestMovie);

// Question 4
let noun = "John";
let verb = "slept";
let adjective = "shy";

console.log("I was working while" + " " + noun + " " + verb + " " +  "all day");
console.log(noun + " " + "felt" + " " + adjective + " " + "after giving a speech");
console.log(noun + " " + "is a" + " " + adjective + " " + "person");
console.log("Being" + " " + adjective + " " + "is not that cool");
console.log('My parents was angry because I and' + " " + noun + " " + verb + " " + 'all day');

// Question 5
let X= prompt("Enter the first number");
let Y = prompt("Enter the second number");

console.log(X % Y)

// Question 6
quad(6,3,2)

let root1
let root2

function quad(a,b,c) {
    let numerator = b*b - (4 *a *c)
    if (numerator > 0) {
        root1 = (-b + Math.sqrt(numerator)/ ( 2*a))
        root2 = (-b - Math.sqrt(numerator)/ ( 2*a))
        console.log(root1, root2)
    }

    else {
        console.log("cant be solved, numerator equals to" + " " + numerator)
    }
}

// Question 7
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "My"

console.log(wordBlanks + " " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb)

// Question 8
let radius = 9
let areaOfCircle = 3.142*(radius * radius)

console.log(areaOfCircle);

// Question 9
let p = 8200;
let r = 17.5;
let t = 2.5;

let simpleInterest = (p * r * t)/100;
console.log(simpleInterest);

// Question 10
let result = 10 % 4;
console.log(result)

// Question 11
// N0 i
let meritWeight = 78;
let nutjobWeight = 92;

let meritHeight = 1.69;
let nutjobHeight = 1.95;

function bmi(m1, h1, m2, h2) {
    meritBMI = m1 / h1 ** 2;
    nutjobBMI = m2 / h2 **2;

    if (meritBMI > nutjobBMI) {
        return ("true")
    }

    else {
        return ("false")
    }
}

answer = bmi(meritWeight, meritHeight, nutjobWeight, nutjobHeight)
console.log(answer)

// NO ii
let mW = 85;
let nW = 95;

let mH = 1.76;
let nH = 1.88;

function bmi(m1, h1, m2, h2) {
    mBMI = m1 / h1 ** 2;
    nBMI = m2 / h2 **2;

    if (mBMI > nBMI) {
        return ("true")
    }

    else {
        return ("false")
    }
}

answer = bmi(meritWeight, meritHeight, nutjobWeight, nutjobHeight)
console.log(answer)