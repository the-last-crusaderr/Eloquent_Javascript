// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


function cube(x){
    return x*x*x;
}


function sum_of_cube(a,b){
    
    return a > b?
        0 :
        cube(a) +  sum_of_cube(a+1,b);
}


// concept of summation used here.   

function sum(term,a,next,b){
    
    return a>b?
           0 :
           term(a) + sum(term,next(a),next,b)
 
}



function sum_of_pi(a,b){
    
    
    function term(x){
        return 1 / (x*(x+2));
    }
    
    
    function next(x){
        return x+4;
    }
    

    return sum(term,a,next,b);
}


console.log(8*sum_of_pi(1,1000));


console.log(sum_of_cube(1,3));
