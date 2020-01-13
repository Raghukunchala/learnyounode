const fs=require('fs');
var func= process.argv[2];
fs.readFile(func,(err,data)=>
    {
    if(err){
        console.log(err)
    }
    else{
        var num=data.toString().split('\n');
        console.log(num.length-1);
    }
})