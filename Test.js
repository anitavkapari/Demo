const arr = [{id: 1, name:'a'}, {id: 2, name:'b'}, {id: 3, name:'c'}, {id: 4, name:'d'}, {id:5, name:'e'}, {id:6, name:'f'},
{id:7, name:'g'}, {id:8, name: 'h'},{id: 9, name: 'j'}, {id:10, name: 'k'}];

//arr.slice(0,2);
let arr1 = [];
// arr1.push(arr.splice(0,2));
// console.log('arr1', arr1);
// console.log('arr', arr);

for (let i = 0; i = arr.length; i++) {
    arr1.push(arr.splice(0,2));
}

console.log('arr1', arr1);