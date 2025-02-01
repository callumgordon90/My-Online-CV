function checkTokenCollection() {
  tokens.forEach((token, index) => {
    const tokenX = token.x - backgroundOffset;
    if (
      characterX < tokenX + tokenRadius &&
      characterX + characterWidth > tokenX - tokenRadius &&
      characterY < token.y + tokenRadius &&
      characterY + characterHeight > token.y - tokenRadius
    ) {
      // Remove the token and show the panel
      tokens.splice(index, 1);
      console.log(`Collected token at ${token.x}, ${token.y}, ${token.t}`);
      console.log(`Token index in array: ${token.t}`);

      // Show the corresponding panel text ('one', 'two', etc.)
      showPanel(token.t); // Adjust based on the token index
      console.log(token.t);
    }
  });
}



/////
// Check for obstacle collision
function checkObstacleCollision() {
  obstacles.forEach((obstacle, index) => {
    const obstacleX = obstacle.x - backgroundOffset; // Adjust obstacle position by backgroundOffset

    // Collision detection between the character and obstacles
    if (
      characterX < obstacleX + obstacle.width &&
      characterX + characterWidth > obstacleX &&
      characterY < obstacle.y + obstacle.height &&
      characterY + characterHeight > obstacle.y
    ) {
      alert("Game Over!");
      resetGame();
    }
  });
}
