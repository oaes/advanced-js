const students =[
{id:4, name:'akash'},
{id:9, name:'batash'},
{id:4, name:'anis'},
{id:8, name:'paul'}
];

const ids = students.map(i=> i.name)
console.log(ids)
const demo = students.filter(i=> i.id<9)
console.log(demo)