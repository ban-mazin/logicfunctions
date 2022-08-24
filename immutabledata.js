
// copy an array with the spread operator
const myArr = [1, 2, 3];
const copy = [...myArr];
copy.push(4);
// works the same for objects
const myObj = {name: 'Alice'};
const newObj = {...myObj};
newObj.name = 'Bob';
// it's possible to overwrite keys in a single step
const myObj = {name:'Alicce', age:27};
const newObj= {...myObj, name: 'Bob'};
console.log(newObj);