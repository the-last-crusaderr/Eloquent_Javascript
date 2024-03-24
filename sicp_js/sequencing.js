
/*

enlightening myself 
--- data abstraction 

closure - The ability of a funciton to retain the lexical scope of function even when the outer function goes out of scope
checking the data type before calling it with arguments(js is not data type safe)

*/

// implementation of list with pair 
function pair(x,y){

// using message passing scheme

    function dispatch(m){
        return m === 0?
            x:
            m === 1 ?
            y:
            "It is not a valid index in the context of a pair";
    }

    return dispatch;
}


function head(z){
     if (typeof z !== 'function') {
        return null; // Return null if z is not a function
    }
    return z(0);
}


function tail(z){
    if (typeof z !== 'function') {
        return null; // Return null if z is not a function
    }
    return z(1);
}

// to check if the list is empty or not
function is_null(one){
    return one == null || one == undefined ?
        true:
        false;
}

/ To append an element to the end of a list
function append(list, element) {
    if (is_null(list)) {
        return pair(element, null);
    } else {
        return pair(head(list), append(tail(list), element));
    }
}


// to count the size of list
function count_list(one){
    return is_null(one) ?
            0 :
            1 + count_list(tail(one));
}

// to output the last element of a list

function last_element(one){
    return is_null(tail(one))?
            one :
            last_element(tail(one));
}

// to reverse the list 

function reverse(one){
    return is_null ?
         null :
     append(reverse(tail(one)),pair(head(one),null));    
}

// to print the list

function print(one){
    if(one == null)
        return;
     console.log(head(one));
     print(tail(one));   
}


// testing the implementation


var one = pair(1,pair(3,pair(4,5)));
var new_one = pair(10,one);
var for_count = pair(1,null);

console.log(count_list(count_list(for_count)));
console.log(last_element(one));
console.log(reverse(one));

//console.log(head(new_one))
//console.log(head(tail(one)));
//console.log(tail(one));











