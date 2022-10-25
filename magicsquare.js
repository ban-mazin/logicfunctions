const magic = [[2, 7, 6], [9, 5, 1], [4, 3, 8]];

for(let row of magic) {
  let sum = 0;
  for(let num of row) {
    sum += num;
  }
  console.log(`${row} summed to ${sum}`);
}