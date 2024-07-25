// Display name and group
document.getElementById("name").innerText = "Akerke";
document.getElementById("group").innerText = "CS-2202";

// Display current date and time
const now = new Date();
document.getElementById("year").innerText = now.getFullYear();
document.getElementById("dayOfWeek").innerText = now.toLocaleDateString('en-US', { weekday: 'long' });
document.getElementById("day").innerText = now.getDate();
document.getElementById("month").innerText = now.toLocaleDateString('en-US', { month: 'long' });
document.getElementById("time").innerText = now.toLocaleTimeString('en-US');

// Calculate days until graduation
const graduationDate = new Date('2024-06-01'); // Replace with your graduation date
const daysUntilGraduation = Math.ceil((graduationDate - now) / (1000 * 60 * 60 * 24));
document.getElementById("daysUntilGraduation").innerText = `${daysUntilGraduation} days left until freedom!`;

// Functions for multiplication and division
function multiply() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 * num2;
    document.getElementById("calcResult").innerText = `The Result Is: ${result}`;
}

function divide() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (num2 !== 0) {
        const result = num1 / num2;
        document.getElementById("calcResult").innerText = `The Result Is: ${result}`;
    } else {
        document.getElementById("calcResult").innerText = "Cannot divide by zero!";
    }
}
