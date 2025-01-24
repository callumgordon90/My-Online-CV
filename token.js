export class Token {
    constructor(x, y, width, height, imageSrc) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.image = new Image();
      this.image.src = imageSrc; // Sprite for the token
    }
  
    draw(ctx) {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  
    // Check for collision with character
    isCollected(characterX, characterY, characterWidth, characterHeight) {
      return (
        characterX < this.x + this.width &&
        characterX + characterWidth > this.x &&
        characterY < this.y + this.height &&
        characterY + characterHeight > this.y
      );
    }
  }
  
  // Function to create an array of tokens
  export function createTokens() {
    const tokens = [
      new Token(1000, 400, 30, 30, 'lightbulb_sprite.png'),
      new Token(2000, 350, 30, 30, 'lightbulb_sprite.png'),
      new Token(3000, 450, 30, 30, 'lightbulb_sprite.png'),
      // Add more tokens as needed
    ];
  
    return tokens;
  }
  
  export function drawTokens(tokens, ctx) {
    tokens.forEach((token) => {
      token.draw(ctx);
    });
  }
  
  export function checkTokenCollection(tokens, characterX, characterY, characterWidth, characterHeight) {
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i].isCollected(characterX, characterY, characterWidth, characterHeight)) {
        // Remove the collected token
        tokens.splice(i, 1);
        i--; // Adjust index after removal
      }
    }
  }
  