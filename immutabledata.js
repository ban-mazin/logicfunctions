

const myArr = [1, 2, 3];
const copy = [...myArr];
copy.push(4);

const myObj = {name: 'Alice'};
const newObj = {...myObj};
newObj.name = 'Bob';

const myObj = {name:'Alicce', age:27};
const newObj= {...myObj, name: 'Bob'};
console.log(newObj);