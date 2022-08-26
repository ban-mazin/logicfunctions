const objOne = {
  key: 'value',
  childObj: {
    name: 'Alice',
    likes: ['pizza']
  }
};
const newobject = {...objOne};
newobject.childObj.name = 'Bob';
console.log(objOne.childObj.name);
