-- John Conway's game of Life --

The 'Game of Life' is not actually a game, but a 'cellular automation' invented by John Conway in 1970. Each cell in a grid represents a biological cell, and the cells will live or die based on a set of mathematical rules. A player interacts with the game only at the beginning by setting an inital configuration of the grid and then observing the outcome.

-- RULES OF THE CELLULAR AUTOMATION --

1. Any live cell with fewer than two live neighbors dies, as if by underpopulation
2. Any live cell with two or three live neighbors lives on to the next generation.
3.Any live cell with more than three live neighbors dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

The first generation is created by applying the above rules to the initial configuration of the grid. Deaths and births occur simultaneously and the next generations and created applying the rules to the new configuration.