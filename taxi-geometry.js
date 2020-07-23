const north = [0, 1];
const south = [0, -1];
const east = [1, 0];
const west = [-1, 0];

const turn = function(heading, turn) {
  const turningRight = turn === 'right';
  switch (heading) {
  case north:
    return turningRight ? east : west;
  case east:
    return turningRight ? south : north;
  case south:
    return turningRight ? west : east;
  case west:
    return turningRight ? north : south;
  }
};

const blocksAway = function(directions) {
  let coordinates = [0, 0];
  let heading;
  for (let direction of directions) {
    if (typeof direction === 'string') {
      if (!heading) {
        heading = direction === 'right' ? east : north;
      } else {
        heading = turn(heading, direction);
      }
    } else if (typeof direction === 'number') {
      coordinates[0] += heading[0] * direction;
      coordinates[1] += heading[1] * direction;
    } else {
      return 'invalid directions given!';
    }
  }
  // couldn't resist expanding this challenge to handle southern and western destinations
  let destination = {};
  if (coordinates[0] >= 0) {
    destination.east = coordinates[0];
  } else {
    destination.west = -coordinates[0];
  }
  if (coordinates[1] >= 0) {
    destination.north = coordinates[1];
  } else {
    destination.south = -coordinates[1];
  }
  return destination;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
