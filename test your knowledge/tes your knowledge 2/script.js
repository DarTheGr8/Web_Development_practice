/*Question 1
let firstName = prompt("Enter first name: ");
let lastName = prompt("Enter last name: ");
let age = prompt("Enter age: ");



document.write(`Hello, ${firstName} ${lastName}`);
document.write("<br>");
document.write(`Your age is ${age}`);

//Question 2

let daysLived = age * 365;
document.write(`You have lived for ${daysLived} days`);

//Question 3

let numberToGuess = 7;
let guessedNumber = prompt('Enter a number: ');

if (guessedNumber > numberToGuess)
{
    document.write("<br>");
    document.write("Your guess is too high");
}

else if (guessedNumber < numberToGuess)
{
    document.write("<br>");
    document.write("Your guess is too low");
}

else{
    document.write("<br>");
    document.write("Your guess is correct");
}*/

// question 4
// let numSet1=[10-19];
// document.write(numSet1);

//print values between 10 and 40
/*
document.write("<p>Print values between 10 and 40:</p> ");

let uservalue=-10;
while(uservalue<=19){
    document.write(uservalue+ ' ');
    uservalue++;
}

//print all even numbers between 10 and 40;

document.write("<p>Even numbers between 10 and 40:</p>");

for (let evenNumber = 10; evenNumber <= 40; evenNumber+=2)
{
    document.write(evenNumber + " > ");
}

//print all odd numbers between 300 and 333;
document.write("<p>Print all odd Numbers between 300 and 333:</p> ");

// let counter = 0;

for(let counter=300; counter<=333; counter++) {
    if(counter%2===1){
        document.write(counter+ " > ");
    }
}


document.write("Print all numbers divisible by 5 AND 3 between 5 and 50: ");

for(let counter=5; counter<50; counter++)
{
    if(counter % 5 === 0 && counter % 3 === 0)
    {
        document.write(counter + " > ");
    }
}
*/

// test your knowledge 1 practice 1


/*

function calculate() {
    // let billTotal = prompt('Enter a bill');
    
    // Convert the input to a number and assign it back to billTotal
    billTotal = Number(billTotal);
    
    // Check if billTotal is not a number
    if (isNaN(billTotal)) {
        alert("Please enter a valid number");
        // Call calculate function again to get a valid input
        calculate();
    } else {
        const tipPercentage = 0.1;
        let tip = billTotal * tipPercentage;
        
        // Use document.write to display the result
        document.write(`For a bill of ${billTotal}, the tip is ${tip}`);
    }
}

// Call the calculate function
calculate();
// else{}
*/

// end of the calculate fucntion line
/* test your knowledge 1 practice 2
if (isNaN(billTotal)) {
   
}*/

document.write('hi ');
document.write("<br>");
//! let billTotal=300;
//! let tips=[55,];
//! let billTotals=[550, 150, 54, 20, 80, 10, 75,54];

// let billTotal=300;
let tips = [];
let billTotals = [550, 150, 20, 54, 80, 10, 75, 54];

for (let bill = 0; bill < billTotals.length; bill++) //push tip amount
{
    let newTip = calculateTip(billTotals[bill]);
    tips.push(newTip);
}

//print both tip and billtotals

for (let i = 0; i < billTotals.length; i++) {
    document.write(`for bills of $${billTotals[i]} the tip is $${tips[i]}`);
    document.write("<br>");
}

function calculateTip(total) {
    let tip = 0;
    if (total >= 75) {
        tip = total * .10;
    }
    else if (total < 75 && total > 30) {
        tip = total * .20;
    }
    else if (total < 30) {
        tip = total * .30;
    }
    return tip;
}



/*for (let b=0; b < billTotals.length; b++) //loops through all bills, checks the bill totals, and calculates a tip based on the bill amount
{
    let tip = 0;
    if (billTotals[b]>=75)
    {
        tip = billTotals[b] * .10;
    }
    else if (billTotals[b] < 75 && billTotals[b] > 30)
    {
        tip =billTotals[b] * .20;
    }
    else if(billTotals[b] < 30)
    {
        tip =billTotals[b] * .30;
    }
    tips.push(tip);
}

for (let i=0; i<billTotals.length; i++)
{

    document.write(`for bills of $${billTotals[i]} the tip is $${tips[i]}`);
    document.write("<br>");
}*/

//push the tip percentage to tips array


//     for(let i=0; i<billTotals.length; i++){

//         let currentBill=billTotals[i];
//         const tip1=currentBill*.10;
//         const tip2=currentBill*.20;
//         const tip3=currentBill*.30;

//         if(currentBill>75){
//             tips.push(tip1);
//             document.write(`For bill $${currentBill} your tip is $${tips[tips.length-1]}. <br>`);
//         }
//         else if(currentBill<75&&currentBill>30){

//             tips.push(tip2);
//             document.write(`For bill $${currentBill} your tip is $${tips[tips.length-1]}. <br>`);
//         }
//         else if(currentBill<30){
//             tips.push(tip3);
//             document.write(`For bill $${currentBill} your tip is $${tips[tips.length-1]}. <br>`);
//         }
//     }
// }

// let Newbill=prompt('Enter a new bill');12
// userInputBills(Number(Newbill));

// let NewBill=prompt('enter a new bill');
// userInputBills.push(NewBill);
// document.write(userInputBills);







