function arrayToList(arr){
    let ls = {value: arr[0],rest: undefined}
    let pt = ls

    for (let i=1;i<arr.length;i++){
        let temp = {value: arr[i], rest: null}
        pt.rest = temp
        pt = temp
    }

    pt = null
    return ls
}


function ListToArray(ls){
    let temp = ls
    let arr = []
    while(temp.rest != null){
        arr.push(temp.value)
        temp = temp.rest
    }

    return arr
}


function prepend(ls,val){
    let temp = {value:val,rest:ls}
    return temp
}

function nth(ls,val){
    let temp = ls
    count = 0
    while(temp.value != val) {
        count++
        temp = temp.rest
    }

    console.log(count)
}


let arr = [1,2,3,4,5,6]
ls = arrayToList(arr)
console.log(ls)

console.log(ListToArray(ls))

console.log(prepend(ls,10))

nth(ls,4)
