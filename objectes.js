const moviereviewe = {
  arrival: 9.5,
  alien: 9,
  coraline: 5
};

for(let movie of Object.keys(moviereviewe)) {
  console.log(movie)
}
for(let vmovie of Object.values(moviereviewe)) {
  console.log(vmovie)
}