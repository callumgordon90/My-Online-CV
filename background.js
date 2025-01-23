// Select the canvas
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Colors for the scene
const skyColor = "#87CEEB"; // Light blue for sky
const grassColor = "#32CD32"; // Bright green for grass
const cloudColor = "#FFFFFF"; // White for clouds

// Draw the background
function drawBackground() {
  // Sky
  ctx.fillStyle = skyColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Grass
  const grassHeight = canvas.height / 4; // Bottom quarter for grass
  ctx.fillStyle = grassColor;
  ctx.fillRect(0, canvas.height - grassHeight, canvas.width, grassHeight);
}

// Draw a pixelated, rounded cloud using a simpler shape
function drawCloud(x, y) {
    ctx.fillStyle = cloudColor;
  
    // Simplified cloud shape based on your suggestion
    const cloudShape = [
      [1],            // Top row (single block
      [1, 1, 1, 1, 1],  // Second row 
      [1, 1, 1, 1, 1, 1, 1],// Third row 
      [1, 1, 1, 1, 1],// Fourth row 
                
    ];
  
    // Draw each row from the cloudShape array
    for (let i = 0; i < cloudShape.length; i++) {
      const row = cloudShape[i];
      const startX = x - Math.floor(row.length / 2) * 20; // Center the row horizontally
      const startY = y + (i * 20); // Increase Y coordinate for each row
  
      // Draw the blocks in this row
      for (let j = 0; j < row.length; j++) {
        ctx.fillRect(startX + j * 20, startY, 20, 20);
      }
    }
  }
  
  // Draw multiple clouds
  function drawClouds() {
    drawCloud(100, 50);  // Cloud 1
    drawCloud(300, 100); // Cloud 2
    drawCloud(600, 70);  // Cloud 3
    drawCloud(900, 150); // Cloud 4
  }
  
  

// Render the entire scene
function render() {
  drawBackground();
  drawClouds();
}

render();
