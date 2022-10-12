const nums = [1, 2, 3, 4, 5, 6];
const double = nums.map(function(num){
  return num * 2;
})

const double2 = nums.map(num => num*2);
const double3 = nums.map(num => {
  return num*2
})
console.log(double);
console.log(double2);
console.log(double3);

const list = nums.map((num) => num % 2 === 0 ? 'even' : 'odd');
console.log(list);

const list2 = nums.find((num) => num % 2=== 0 ? 'x' : 'y');
console.log(list2);