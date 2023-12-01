import { isValidMove } from './grid.js';

const directions = { L: -90, R: 90 };
const points = ['N', 'E', 'S', 'W'];

export function orientationHandler(currentOrientation, desiredOrientation) {
  const turn = 360;
  const directionCount = points.length;
  const currentDegrees = (points.indexOf(currentOrientation) * turn) / directionCount;
  const degrees = directions[desiredOrientation] + currentDegrees;
  let index = Math.round((degrees % turn) / turn * directionCount);

  // Handle the negative number case
  index = index < 0 ? (index += directionCount) : index;

  return points[index] || currentOrientation;
}

export function posHandler({ orientation, x, y }, movement) {
  if (movement === 'F') {
    switch (orientation) {
      case 'N': y++; break;
      case 'E': x++; break;
      case 'S': y--; break;
      case 'W': x--; break;
    }
  }

  return { x, y };
}

export function isOutOfGrid(grid, x, y) {
  return x > grid.xMax || y > grid.yMax || x < grid.xMin || y < grid.yMin;
}

export function robotMovementHandler(robot, instruction = '', grid = {}) {
  return instruction.split('').reduce((robot, direction) => {
    const orientation = orientationHandler(robot.orientation, direction);
    const { x, y } = posHandler(robot, direction);
    let updatedRobot;

    if (isOutOfGrid(grid, x, y) && isValidMove(robot, grid.scents)) {
      updatedRobot = { ...robot, lostStatus: 'LOST' };
    } else if (!isOutOfGrid(grid, x, y)) {
      updatedRobot = { ...robot, x, y };
    }

    return robot.lostStatus === 'LOST'
      ? robot
      : { ...updatedRobot || robot, orientation };
  }, robot);
}
