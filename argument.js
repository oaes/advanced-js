function add(n1,n2){
    console.log([...arguments])
    return n1*n2*arguments[2];
}
const sum = add(4,3,5);
console.log(sum)