function reverseArray(arr){
    let newArr = []
    for(let i=arr.length-1;i>=0;i--){
        newArr.push(arr[i])
    }

    return newArr
}


function reverseAtPlace(arr){
    let a = 0
    let b = arr.length-1
    while(a<b){
        let temp = arr[a]
        arr[a] = arr[b]
        arr[b] = temp
        a += 1
        b -= 1
    }
    return arr
}

let arr = [1,2,3,4,5,6]

console.log(reverseArray(arr));
console.log(reverseAtPlace(arr))
