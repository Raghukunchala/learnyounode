const fs=require('fs');
const path=require('path');
module.exports=function( first,ext,callback){

fs.readdir(first,(err,list)=>{
   if(err){
       return callback(err)
   }
   else{
      result= list.filter(function(files){
        return path.extname(files)=='.'+ext
    })
    
   }
   callback(null,result);
})
}