export default function (grid: string[][]) {
  const visited: boolean[][] = initAsGridWithFalse()
  let islandCount = 0;

  // todo: rewrite this as readable

  // i - columns 

  for (let column = 0; column < grid.length; column++) {
    for (let row = 0; row < grid[column].length; row++) {
      //check if dfs is returning true or false
      if (dfs(column, row, grid, visited)) islandCount++;
    }
  }

  //traverse through each node
  // dfs = traversal
  function dfs(column: number, row: number, grid: string[][], visited: boolean[][]): boolean {
    if (typeof column == undefined || typeof row == undefined)
      return false
    const stack = [[column, row]];
    let islandSize = 0;

    while (stack.length) {
      let currentNode = stack.pop();

      // deconstruction assignment
      if (!currentNode)
        return false

      let [column, row] = currentNode;



      //check if we visited it : skip
      if (visited[column][row]) continue;
      visited[column][row] = true;

      //check if cell is an island piece 
      if (grid[column][row] === '0') continue

      islandSize++;

      //look around
      let adjacentNeighbors: number[][] = getAdjacentNeighbors(column, row, grid, visited);

      stack.push(...adjacentNeighbors)

    }

    function getAdjacentNeighbors(column: number, row: number, grid: string[][], visited: boolean[][]): number[][] | [] {
      const adjacentNeighbors: number[][] = []
      // find column connections
      if (column > 0 && grid[column - 1][row]) adjacentNeighbors.push([column - 1, row])
      if (column < grid.length - 1 && !visited[column + 1][row]) adjacentNeighbors.push([column + 1, row])

      // find row connections
      if (row > 0 && grid[column][row - 1]) adjacentNeighbors.push([column, row - 1])
      if (row < grid[0].length - 1 && !visited[column][row + 1]) adjacentNeighbors.push([column, row + 1])

      return adjacentNeighbors;
    }


    return islandSize > 0;
  }

  return islandCount;

  function initAsGridWithFalse() {
    return grid.map(row => row.map(cell => false));
  }
}


