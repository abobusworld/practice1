// Show name and group
document.getElementById("name").innerText = "Akerke";
document.getElementById("group").innerText = "CS-2202";

// Function to format time to 00:00:00
function formatTime(date) {
    return date.toTimeString().split(' ')[0];
}

// Display current date and time
const now = new Date();
document.getElementById("year").innerText = now.getFullYear();
document.getElementById("dayOfWeek").innerText = now.toLocaleDateString('en-US', { weekday: 'long' });
document.getElementById("day").innerText = now.getDate();
document.getElementById("month").innerText = now.toLocaleDateString('en-US', { month: 'long' });
document.getElementById("time").innerText = formatTime(now);

// Calculate days left until graduation
const graduationDate = new Date('2024-06-01'); // Replace with your graduation date
const daysUntilGraduation = Math.ceil((graduationDate - now) / (1000 * 60 * 60 * 24));
document.getElementById("daysUntilGraduation").innerText = `${daysUntilGraduation} days left until the freedom!`;
