function diagonalDifference(arr){
  let leftsum = 0;
  let rightsum = 0;
  let n = arr[0].length;

  for(let i =0, j= n-1; i < n; i++, j--) {
    leftsum += arr[i][i];
    rightsum += arr[i][j]
  }
  let diff = Math.abs(leftsum - rightsum);
  return diff;

}