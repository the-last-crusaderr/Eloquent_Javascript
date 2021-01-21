function isEven(a){
    a = Number(a)
    if (a%2 == 0)
        return true
    else
        return false
}

console.log(isEven(4))
console.log(isEven(3))
console.log(isEven(0))
console.log(isEven(-1))