 ////////////
  //define ground level:
  const groundLevel = backgroundCanvas.height - grassHeight / 1.5 ;
// Initialize obstacles 
const obstacles = [
  { x: 1200, y: groundLevel - 60, width: 40, height: 30, speed: 2 },
  { x: 1600, y: groundLevel - 50, width: 40, height: 30, speed: 2 },
  { x: 2200, y: groundLevel - 40, width: 40, height: 30, speed: 2 } // Now correctly positioned
];

// Update positions of obstacles
function updateObstacles() {
  obstacles.forEach(obstacle => {
    obstacle.x -= obstacle.speed; // Move obstacle left by speed

    /*
    // Reset obstacle position to the right side once it goes off-screen
    if (obstacle.x + obstacle.width < 0) {
      obstacle.x = backgroundCanvas.width;
      obstacle.speed = Math.random() * 2 + 1; // Random speed for each loop
    }
    */
  });
}


// Draw obstacles
function drawObstacles() {
  obstacles.forEach(obstacle => {
    const obstacleX = obstacle.x - backgroundOffset; // Adjust obstacle position by backgroundOffset

    // Only draw obstacles within the visible area
    if (obstacleX + obstacle.width > 0 && obstacleX < backgroundCanvas.width) {
      bgCtx.fillStyle = "#FF4500"; // Orange color for obstacles
      bgCtx.fillRect(obstacleX, obstacle.y, obstacle.width, obstacle.height);
    }
  });
}



function checkObstacleCollision() {
    obstacles.forEach((obstacle) => {
        const obstacleX = obstacle.x - backgroundOffset;
        const obstacleY = obstacle.y; // Consider if the background offset also affects the Y-coordinate
        const isXColliding = characterX < obstacleX + obstacle.width && characterX + characterWidth > obstacleX;
        const isYColliding = characterY < obstacleY + obstacle.height && characterY + characterHeight > obstacleY;

        if (isXColliding && isYColliding) {
            console.log("Obstacle hit!");
            // Handle the collision (e.g., Game Over or reset)
        }
    });
}



//RESET THE GAME AFTER LOSING:
function resetGame() {
  // Redirect to the index.html page (the main menu or starting point)
  window.location.href = "index.html";
}


// Update positions of everything
function updatePositions() {
  // Update character position (left, right, jumping)
  if (keysPressed.left) {
    if (characterX > leftCutoff) {
      characterX -= speed;
    } else {
      backgroundOffset -= backgroundSpeed;
    }
  }
  if (keysPressed.right) {
    if (characterX < rightCutoff) {
      characterX += speed;
    } else {
      backgroundOffset += backgroundSpeed;
    }
  }

  if (isJumping) {
    characterY += jumpVelocity;
    jumpVelocity += 0.5;
    if (characterY >= backgroundCanvas.height - grassHeight  - characterHeight) {
      characterY = backgroundCanvas.height - grassHeight - characterHeight;
      //characterY = backgroundCanvas.height - grassHeight + 30 - characterHeight;

      isJumping = false;
    }
  }

  if (characterX < 0) characterX = 0;

  // Update obstacle positions
  updateObstacles();
}
   

