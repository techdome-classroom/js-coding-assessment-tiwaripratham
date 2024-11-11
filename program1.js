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

    dfs(row + 1, col); 
    dfs(row - 1, col); 
    dfs(row, col + 1); 
    dfs(row, col - 1); // left
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "L") {
        islandCount++;
        dfs(i, j); 
    }
  }

  return islandCount;
};

module.exports = getTotalIsles;
