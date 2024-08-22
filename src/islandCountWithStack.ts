export default function (grid: string[][]) {
  const visited: boolean[][] = initAsGridWithFalse()
  let islandCount = 0;

  // todo: rewrite this as readable
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      //check if dfs is returning true or false
      if (dfs(i, j, grid, visited)) islandCount++;
    }
  }

  //traverse through each node
  // dfs = traversal
  function dfs(i: number, j: number, grid: string[][], visited: boolean[][]): boolean {
    if (typeof i == undefined || typeof j == undefined)
      return false
    const stack = [[i, j]];
    let islandSize = 0;

    while (stack.length) {
      let currentNode = stack.pop();

      // deconstruction assignment
      if (!currentNode)
        return false

      let [i, j] = currentNode;



      //check if we visited it : skip
      if (visited[i][j]) continue;
      visited[i][j] = true;

      //check if cell is an island piece 
      if (grid[i][j] === '0') continue

      islandSize++;

      //look around
      let adjacentNeighbors: number[][] = getAdjacentNeighbors(i, j, grid, visited);

      stack.push(...adjacentNeighbors)

    }

    function getAdjacentNeighbors(i: number, j: number, grid: string[][], visited: boolean[][]): number[][] | [] {
      const adjacentNeighbors: number[][] = []
      // find column connections
      if (i > 0 && grid[i - 1][j]) adjacentNeighbors.push([i - 1, j])
      if (i < grid.length - 1 && !visited[i + 1][j]) adjacentNeighbors.push([i + 1, j])

      // find row connections
      if (j > 0 && grid[i][j - 1]) adjacentNeighbors.push([i, j - 1])
      if (j < grid[0].length - 1 && !visited[i][j + 1]) adjacentNeighbors.push([i, j + 1])

      return adjacentNeighbors;
    }


    return islandSize > 0;
  }

  return islandCount;

  function initAsGridWithFalse() {
    return grid.map(row => row.map(cell => false));
  }
}


