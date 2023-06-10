# cmpm120-sceneflow
https://t-amandawong.github.io/cmpm120-sceneflow/ <br />
Requirements met: <br />
Four distinct scene types: Title scene, Menu scene, Credits scene, Two gameplay scenes: Maze and Puzzle scene <br />
Communication between scenes: Global variable **solvedPuzzle** (line 2) has a status change in the Puzzle scene (line 148), and its status is checked in the Maze scene (line 119). <br />
Reachability: all scenes are reachable from the title scene, and the gameplay scenes display in a linear sequence. <br />
Transitions: all scenes coming from the title scene have a coordinated fadeOut/fadeIn.
