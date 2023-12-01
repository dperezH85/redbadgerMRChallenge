import { expect } from 'chai';
import { isValidMove, applyGridScents } from '../src/grid.js';

describe('Grid Functions', () => {
  describe('isValidMove', () => {
    it('should return true for a valid move', () => {
      const attempt = { x: 1, y: 1, orientation: 'N' };
      const disallowedMoves = [{ x: 2, y: 2, orientation: 'N' }];

      const result = isValidMove(attempt, disallowedMoves);

      expect(result).to.be.true;
    });

    it('should return false for an invalid move', () => {
      const attempt = { x: 2, y: 2, orientation: 'N' };
      const disallowedMoves = [{ x: 2, y: 2, orientation: 'N' }];

      const result = isValidMove(attempt, disallowedMoves);

      expect(result).to.be.false;
    });
  });

  describe('applyGridScents', () => {
    it('should add a scent to the grid for a lost robot', () => {
      const grid = { scents: [] };
      const robot = { lostStatus: 'LOST', x: 3, y: 3, orientation: 'E' };

      const updatedGrid = applyGridScents(grid, robot);

      expect(updatedGrid.scents).to.deep.equal([{ x: 3, y: 3, orientation: 'E' }]);
    });

    it('should not add a scent to the grid for a non-lost robot', () => {
      const grid = { scents: [] };
      const robot = { lostStatus: '', x: 3, y: 3, orientation: 'E' };

      const updatedGrid = applyGridScents(grid, robot);

      expect(updatedGrid.scents).to.be.empty;
    });

    it('should not modify the original grid object', () => {
      const grid = { scents: [] };
      const robot = { lostStatus: 'LOST', x: 3, y: 3, orientation: 'E' };

      const updatedGrid = applyGridScents(grid, robot);

      expect(updatedGrid).to.not.equal(grid);
    });
  });
});