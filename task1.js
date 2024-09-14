let number = prompt("Enter a number:");
document.getElementById("result").textContent = "The number you entered: " + number;
let numPercentage = parseInt(prompt("Enter a percentage:"));
let percentage = (numPercentage / number) * 100;
document.getElementById("result").textContent = `The percentage of the number you entered:  ${percentage} ` ;
