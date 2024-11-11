const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  // Helper function for DFS traversal
  function dfs(row, col) {
    // Base case: if out of bounds or in water, stop
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      grid[row][col] === "W"
    )
      return;

    // Mark current cell as visited by changing it to water
    grid[row][col] = "W";

    // Traverse neighboring cells
    dfs(row + 1, col); // down
    dfs(row - 1, col); // up
    dfs(row, col + 1); // right
    dfs(row, col - 1); // left
  }

  // Loop through each cell in the grid
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // Start a new DFS if we find an unvisited land cell
      if (grid[i][j] === "L") {
        islandCount++;
        dfs(i, j); // Perform DFS to mark the entire island
      }
    }
  }

  return islandCount;
};

module.exports = getTotalIsles;
