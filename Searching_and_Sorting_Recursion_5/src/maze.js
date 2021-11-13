/**
 * Return a string representing the path through the maze.
 * @param {array} maze
 * @param {array} index The starting point
 */

// let maze = [
//   [" ", " ", " ", "*", " ", " ", " "],
//   ["*", "*", " ", "*", " ", "*", " "],
//   [" ", " ", " ", " ", " ", " ", " "],
//   [" ", "*", "*", "*", "*", "*", " "],
//   [" ", " ", " ", " ", " ", " ", "e"],
// ];

// let maze = [
//   [" ", " ", " "],
//   [" ", "*", " "],
//   [" ", " ", "e"],
// ];

const mazeSolver = (maze, index = [0, 0]) => {
  // console.log({ Phase: maze, index });

  let i = index[0];
  // console.log({ i: i });
  let j = index[1];
  // console.log({ jumn: j });

  // Base case
  if (maze[i][j] === "e") {
    // console.log({ Base: maze });
    return "";
  }

  // Block passages
  maze[i][j] = "*";
  // console.log({ Block: maze });

  // Recursive Cases
  if (maze[i][j + 1] && maze[i][j + 1] !== "*") {
    j++;
    return "R" + mazeSolver(maze, [i, j]);
  }
  if (maze[i][j - 1] && maze[i][j - 1] !== "*") {
    j--;
    return "L" + mazeSolver(maze, [i, j]);
  } else if (maze[i + 1] && maze[i + 1][j] !== "*") {
    i++;
    return "D" + mazeSolver(maze, [i, j]);
  } else if (maze[i - 1] && maze[i - 1][j] !== "*") {
    i--;
    return "U" + mazeSolver(maze, [i, j]);
  }
};

// console.log(mazeSolver(maze, [0, 0]));
module.exports = mazeSolver;
