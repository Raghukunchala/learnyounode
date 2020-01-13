const mymodule = require('./make-it-modular.js')

var first = process.argv[2];
var ext = process.argv[3];
mymodule(first,ext,function(err,list){
   if(err){
       console.log(err)
   }
   else{
       list.forEach(function(file){
           console.log(file)
       })
   }
})