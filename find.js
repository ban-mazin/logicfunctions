let movies = [
  "the fantastic Mr. fox",
  "Mr. and Mrs. smith",
  "Mrs Doubtfire",
  "Mr. Deeds"
];
const movie = movies.find(movie => {
  return movie.includes('Mrs')

})
console.log(movie);

const movie2 = movies.find((movie2) => {
  return movie2.indexOf("Mrs") === 0
})
console.log(movie2)

// const square = function(x) {
//   return x * x;
// }; 

// const square = (x) => {
//  return x * x;
// };

// const isEven = (num) => {
//   return num % 2 === 0;
// }

// const isEven = function(num) {
//   return num %2===0
// }
//  const isEven = num => (
//    num % 2 === 0

//  )
//  const isEven = num => num %2 ===0;

// const multiply = (num) => {
//   return num * num;
// }

