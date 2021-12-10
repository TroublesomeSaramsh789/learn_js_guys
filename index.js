let current;
const visited = [];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function moveLeft(currentPosition) {
  visited.push(currentPosition);
  current = currentPosition - 1;
  let toRemove = numbers.indexOf(currentPosition);

  numbers.splice(toRemove, 1);
  console.log("\n New Step:");
  console.log("Position =" + current);
  console.log("Visited =" + visited);
  console.log("Number =" + numbers);
}

function moveRight(currentPosition) {
  if (visited.includes(currentPosition)) {
    console.log("You cannot make the same move");
  }

  console.log("Game Win");
}

moveLeft(9);
moveLeft(1);
moveLeft(6);
moveLeft(5);
moveRight(3);
