import islandCountWithStack from './islandCountWithStack.js'
import islandCountWithStackClean from './islandCountWithStackClean.js'

const DataSets = {
  grid1: [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
  ],

  grid2: [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
  ]
}
BootServer();

console.log(`grid2 has ( ${islandCountWithStack(DataSets.grid2)} ) islands according to islandCountWithStack`);
console.log(`grid2 has ( ${islandCountWithStackClean(DataSets.grid2)} ) islands according to islandCountWithStackClean`);

function BootServer(): void {
  const timeFormat: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour12: false
  };

  const date = new Date().toLocaleTimeString('en-US', timeFormat);
  console.log("Ran On: ", date)
}