// function muliply(x, y){
//   if(typeof y === 'undefined'){
//     y =1;
//   }
//   return x * y;
// }
// console.log(muliply(4,7));
// console.log(muliply(5));




const ingredients = ['water', 'corn strach', 'flour', 'cheese', 'eel'];

// const list = ingredients.push('brown sugar');
// const list2 = ingredients.pop();
const list3 = ingredients.shift();
const list4 = ingredients.unshift('onion');
if(ingredients.includes('eell')) {
  console.log(ingredients);
};
const list5 = ingredients.reverse();
// const list6 = ingredients.join();
// // const list7 = ingredients.join('')
// // console.log(ingredients.join('-'))
// console.log(ingredients.indexOf('cheese'));
// console.log(ingredients.join('*'));

console.log(ingredients.splice(3))