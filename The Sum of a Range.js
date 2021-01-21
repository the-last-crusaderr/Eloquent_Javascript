function range(a,b){
    let arr = []
    for(let i =1;i<=b;i++){
        arr.push(i)
    }
    return arr;
}

function sum(arr){
    let agg =0
    for (let i =0;i<arr.length;i++){
        agg += arr[i]
    }

    return agg;
}


function rangeStep(a,b,step){
    let arr = []
    for(let i =1;i<=b;i +=step){
        arr.push(i)
    }
    return arr;
}


console.log(sum(range(1,10)))

console.log(sum(rangeStep(1,10,2)))