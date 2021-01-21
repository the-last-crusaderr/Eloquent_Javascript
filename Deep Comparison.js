function deepEqual(obj1,obj2){

    if(typeof obj1 === typeof obj2){
        if(typeof obj1 === "object"){
            if(obj1.here === obj2.here && obj1.next === obj2.next )
                return true
        }
    }

    return false
}



let obj1 = {here:2, next:"go"}
let obj2 = {here:1 ,next:"go"}


console.log(deepEqual(obj1,obj2))