function countBs(str){
    count =0
    for(let i = 0 ;i< str.length; i++){
        if (str[i] == 'B')
            count += 1;
    }
    return count
}



function countChar(str, ch){
    count = 0;
    for(let i = 0 ;i< str.length; i++){
        if (str[i] == ch)
            count += 1;
    }
    return count
}


console.log(countBs("Bean Counting"))
console.log(countChar("Bean Counting",'n'))