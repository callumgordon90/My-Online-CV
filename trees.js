// Tree color palette
const foliageColor = "#228B22"; // Green foliage
const trunkColor = "#8B4513"; // Brown trunk

// Tree positions for animation
let treePositions = [
  { x: 200, y: 360 },
  { x: 1400, y: 360 },
  { x: 3000, y: 360 },
  { x: 1100, y: 360 },
];



const treeSpeed = 1; // Speed of tree movement

// Draw a pixelated tree using a similar shape to clouds
function drawTree(ctx, x, y) {
  ctx.fillStyle = foliageColor;

  const foliageShape = [
    [1 , 1],            // Top row (single block)
    [1, 1, 1, 1, 1],  // Second row
    [1, 1, 1, 1, 1, 1, 1], // Third row
    [1, 1, 1, 1, 1],  // Fourth row
  ];

  // Draw the foliage
  for (let i = 0; i < foliageShape.length; i++) {
    const row = foliageShape[i];
    const startX = x - Math.floor(row.length / 2) * 20; // Center the row horizontally
    const startY = y + (i * 20); // Increase Y coordinate for each row

    // Draw the blocks in this row
    for (let j = 0; j < row.length; j++) {
      ctx.fillRect(startX + j * 20, startY, 20, 20);
    }
  }

  // Draw the trunk below the foliage
  ctx.fillStyle = trunkColor;
  const trunkWidth = 20;
  const trunkHeight = 40;
  const trunkX = x ; // Center trunk under foliage
  const trunkY = y + foliageShape.length * 20;
  ctx.fillRect(trunkX, trunkY, trunkWidth, trunkHeight);
}

// Draw and animate multiple trees
function drawTrees(ctx) {
  treePositions.forEach((tree) => {
    drawTree(ctx, tree.x, tree.y);
    //let backgroundOffset = 0;
    tree.x -= backgroundOffset; // Move the tree to the left

    // Reset tree position when it moves off-screen
    //if (tree.x < -100) {
    //  tree.x = ctx.canvas.width + 100; // Move it to the far right
    //}
  });
}

// Export functions
export { drawTree, drawTrees };
