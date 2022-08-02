/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
/* IMPLEMENT ME */
const min = function(arr) {
  // return Math.min(...arr);
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
};
console.log(min([6, 2, 3, 4, 9, 9, 1, 0, 5]));

/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
/* IMPLEMENT ME */
const max = function (arr) {
    //return Math.max(...arr);
    let max = arr[0];
    for (let i = 0; i <arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;


}
console.log(max([6, 2, 3, 4, 9, 9, 1, 0, 5]));


/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
 const range = function(arr) {
    return (max(arr)- min(arr));
 }
 console.log(range([6,2, 3, 4, 9, 1, 0, 5]));
















