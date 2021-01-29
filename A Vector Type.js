class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;

    }


}


Vec.prototype.plus = function (vec1){

    let newVec = new Vec(this.x+vec1.x,this.y+vec1.y);
    return newVec;

}

Vec.prototype.minus = function (vec1){

    let newVec = new Vec(this.x-vec1.x,this.y-vec1.y);
    return newVec;

}






let origin = new Vec(0,0);
let originPlus = origin.plus(new Vec(1,6))
console.log(originPlus.x)
console.log(originPlus.y)

let lastVec = new Vec(3,8)
let lastVecMinus = lastVec.minus(originPlus)
console.log(lastVecMinus.x)
console.log(lastVecMinus.y)
