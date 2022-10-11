//function pick() {
  //alert("hi there");
//}
//setTimeout(pick, 5000);

// setTimeout(function(){
//   alert("welcome")
// }, 5000)

// const numbers = [2, 10, 3, 7, 8];
// // numbers.forEach(function(num) {
// //   console.log(num);
// // })
// function printTriple(n) {
//   console.log(n * 3);
// }
// numbers.forEach(printTriple);

const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ['asap', 'byob', 'rsvp', 'dgfd'];

const m = numbers.map(function(num){
  return num * 2
})
console.log(m);

const breave = words.map(function(word){
  return word.toUpperCase().split('').join('.');
})
console.log(breave);

