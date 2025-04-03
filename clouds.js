// Cloud color
const cloudColor = "#FFFFFF"; // White clouds

// Cloud positions for animation
let cloudPositions = [
  { x: 100, y: 50 },
  { x: 300, y: 100 },
  { x: 600, y: 70 },
  { x: 900, y: 150 },
];

const cloudSpeed = 1; // Speed of cloud movement

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

// Draw and animate multiple clouds
function drawClouds(ctx) {
  cloudPositions.forEach((cloud) => {
    drawCloud(ctx, cloud.x, cloud.y);
    cloud.x -= cloudSpeed; // Move the cloud to the left

    // Reset cloud position when it moves off-screen
    if (cloud.x < -100) {
      cloud.x = ctx.canvas.width + 100; // Move it to the far right
    }
  });
}

// Export functions
export { drawCloud, drawClouds };
