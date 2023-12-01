import fs from 'fs';
import { robotMovementHandler } from './robot.js';
import { applyGridScents } from './grid.js';
import { setupArea } from './area.js';

function createRobot(initialPosition) {
  return {
    x: initialPosition.x,
    y: initialPosition.y,
    orientation: initialPosition.orientation,
    lostStatus: '',
  };
}

function processInstructions({ initialPosition, instructions }, grid) {
  const robot = createRobot(initialPosition);
  const updatedRobot = robotMovementHandler(robot, instructions, grid);

  if (updatedRobot.lostStatus === 'LOST') {
    applyGridScents(grid, updatedRobot);
  }

  return updatedRobot;
}

function displayResults(results) {
  results.forEach(({ x, y, orientation, lostStatus }) =>
    console.log(`${x} ${y} ${orientation} ${lostStatus ? 'LOST' : ''}`)
  );
}

function start() {
  const fileContents = fs.readFileSync('./input.txt').toString();
  const { grid, posRequest } = setupArea(fileContents);

  const results = posRequest.map((instructionSet) =>
    processInstructions(instructionSet, grid)
  );

  displayResults(results);
}

start();
