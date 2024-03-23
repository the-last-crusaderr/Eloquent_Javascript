
/*
(make-rat n d) make_rat(n
, d) returns the rational number whose numerator is the integer n
 and whose denominator is the integer d

(numer x) numer(x) returns the numerator of the rational number x

(denom x) denom(x) returns the denominator of the rational number x
.
*/



function pair(x,y)  {
    var obj = {
        head : x,
        tail : y
    }

    return obj;
}



function make_rat(x,y){
    return pair(x,y);
}

function den(x){
    return x.tail;
}

function num(y){
    return y.head;
}


function gcd(b,a){
    return b == 0?
                a : 
                (b,a%b);
}


function lowest_term(obj){

    var a = obj.head;
    var b = obj.tail;

    var g = gcd(a,b);
    console.log("value of g = ",g);

    if(g == 0)
        return make_rat(a,b);

    return make_rat( a/g, b/g );
}

function add_rat(a,b){
    
    var comb_num = num(a) * den(b) + num(b) * den(a) ;
    var comb_den =  den(a) * den(b);

    return make_rat(comb_num, comb_den);

}

function mult_rat(a,b){

    var comb_num = num(a) * num(b);
    var comb_den = den(a) * den(b);

    return make_rat(comb_num, comb_den);
}

function display(obj){
    return num(obj) + "/" + den(obj);
}
    

const a = make_rat(1,3);
const b = make_rat(1,3);

console.log(den(a));
console.log(num(a));

console.log(display(lowest_term(add_rat(a,b))));
console.log(display(lowest_term(mult_rat(a,b))));
console.log(display(a));
