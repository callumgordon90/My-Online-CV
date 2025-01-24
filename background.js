// background.js

// Cloud color
const cloudColor = "#FFFFFF"; // White clouds

// Draw a pixelated, rounded cloud using a simpler shape
function drawCloud(ctx, x, y) {
  ctx.fillStyle = cloudColor;

  const cloudShape = [
    [1],            // Top row (single block)
    [1, 1, 1, 1, 1],  // Second row
    [1, 1, 1, 1, 1, 1, 1], // Third row
    [1, 1, 1, 1, 1],  // Fourth row
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
function drawClouds(ctx) {
  drawCloud(ctx, 100, 50);  // Cloud 1
  drawCloud(ctx, 300, 100); // Cloud 2
  drawCloud(ctx, 600, 70);  // Cloud 3
  drawCloud(ctx, 900, 150); // Cloud 4
}

// Export functions
export { drawCloud, drawClouds };
