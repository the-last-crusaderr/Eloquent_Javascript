


function average(x,y){
    return (x+y)/2;
}



function improve(guess,x){
    return average(guess,x/guess);
}

function square(x){
    return x*x;
}

function good_enough(guess,x){
    return abs(square(guess) - x) < 0.01;
}

function sq_root(guess, x){
    
    return good_enough(guess,x) ?
        guess
    :   sq_root(improve(guess,x),x);
    
}

sq_root(1,5);
