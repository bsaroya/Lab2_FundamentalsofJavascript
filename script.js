
let number = -5; 

if (number > 0) {
    console.log(`${number} is positive.`);
} else if (number < 0) {
    console.log(`${number} is negative.`);
} else {
    console.log(`${number} is zero.`);
}


let day = 3; 

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day number.");
        break;
}


console.log("For Loop:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}


console.log("While Loop:");
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}


console.log("Do...While Loop:");
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);


console.log("For Loop with Break:");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break; 
    }
    console.log(i);
}

console.log("For Loop with Continue:");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; 
    }
    console.log(i);
}

let globalVar = "I'm global!";

function scopeExample() {
    let localVar = "I'm local!";
    console.log(globalVar); 
    console.log(localVar);  
}

scopeExample();

try {
    console.log(localVar); 
} catch (error) {
    console.log("localVar is not accessible outside the function.");
}
