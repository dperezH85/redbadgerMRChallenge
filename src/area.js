export function setupArea(data) {
	const [upperRightCoords, ...behaviour] = data
	  .split('\n')
	  .filter(line => line.length !== 0);
  
	const [upperX, upperY] = upperRightCoords.split(' ').map(coord => Number.parseInt(coord, 10));
  
	const posRequest = [];
	for (let index = 1; index < behaviour.length; index += 2) {
	  const [x, y, orientation] = behaviour[index - 1].split(' ');
	  posRequest.push({
		initialPosition: {
		  x: Number.parseInt(x, 10),
		  y: Number.parseInt(y, 10),
		  orientation,
		},
		instructions: behaviour[index],
	  });
	}
  
	const grid = {
	  xMin: 0,
	  yMin: 0,
	  xMax: upperX,
	  yMax: upperY,
	  scents: [],
	};
  
	return { grid, posRequest };
  }
  