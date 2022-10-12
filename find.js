let movies = [
  "the fantastic Mr. fox",
  "Mr. and Mrs. smith",
  "Mrs Doubtfire",
  "Mr. Deeds"
];
const movie = movies.find(movie => {
  return movie.includes('Mrs')

})
console.log(movie)