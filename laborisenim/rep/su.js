switch (lastDirection) {
  case "up":
    moveUp();
    break;
  case "down":
    moveDown();
    break;
  case "left":
    moveLeft();
    break;
  case "right":
    moveRight();
    break;
  default:
    console.log("Invalid direction");
}
