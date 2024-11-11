const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  // Helper function for DFS traversal
  function dfs(row, col) {
    // Check boundaries and water cells
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      grid[row][col] === "W"
    )
      return;

    grid[row][col] = "W";

    dfs(row + 1, col); 
    dfs(row - 1, col); 
    dfs(row, col + 1); 
    dfs(row, col - 1); 
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "L") {
        islandCount++;
        dfs(i, j); 
      }
    }
  }

  return islandCount;
};

module.exports = getTotalIsles;
