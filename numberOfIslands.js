"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const baseGrid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
];
const grid2 = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
];
function default_1(grid) {
    grid = grid || baseGrid;
    const checkedNodes = grid.map((row) => row.map(cell => false));
    let islandCount = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let i2 = 0; i2 < grid[i].length;) {
            if (grid[i][i2] === "1") {
                checkedNodes[i][i2] = true;
            }
            else {
                checkedNodes[i][i2] = false;
            }
        }
    }
}
// 1 - node of land
// 0 - node of water
// island is a group of 1s that are connected horizontally or vertically
// we need to find the number of islands in the grid
//verify there is any land in the grid
const checkGridEntryForLand = (gridEntry) => {
    let containsLand = false;
    for (let i = 0; i < grid.length; i++) {
        if (gridEntry[i].includes("1")) {
            containsLand = true;
            break;
        }
    }
    return containsLand;
};
