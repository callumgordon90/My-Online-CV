const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Resize the canvas to fill the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Example: draw a static rectangle for the character
ctx.fillStyle = '#FF0000'; // Red color for the character
ctx.fillRect(50, canvas.height - 100, 50, 50); // x, y, width, height
