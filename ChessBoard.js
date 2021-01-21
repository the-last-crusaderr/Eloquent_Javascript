let str = ""
for (let i =1;i<=8;i++){
    for(let j=1;j<=8;j++){
        if(i % 2 != 0){
            if(j%2 != 0)
                str += " "
            else
                str += "#"
        }
        else{
            if(j%2 != 0)
                str += "#"
            else
                str += " "
        }
    }
    console.log(str)
    str = ""
}
