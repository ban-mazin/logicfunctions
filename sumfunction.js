/* Question 0
 *
 *  Implement the functions defined below
 *
 */

//const { isLength, result } = require("lodash");

/* ===========================================================================
 * COUNT - the number of items in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
/* IMPLEMENT ME */
const count = function(arr) {
    return arr.length;
    
};
console.log(count([6, 2, 3, 4, 9, 6, 1, 0, 6]));

/* SUM - the sum of the numbers in a list
       - safe to assume that all items are numbers already
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */
/* IMPLEMENT ME */
const sum = function(arra) {
    let result = 0;
    for (let i = 0; i < arra.length; i++) {
        result += arra[i];
        
    }
    return result;
};
console.log(sum([6, 2, 3, 4, 9, 6, 1, 0, 6]));