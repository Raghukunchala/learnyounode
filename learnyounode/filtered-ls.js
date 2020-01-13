const fs=require('fs');
const path=require('path');
var file='.'+process.argv[3];
fs.readdir(process.argv[2],(err,list)=>{
   if(err){
       console.log(err)
   }
   else{
       list.forEach(function(files){
        if(path.extname(files)===file){
            console.log(files)
        }
    })
   }

})