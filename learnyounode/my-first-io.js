const fs=require('fs');
var Buffer=fs.readFileSync(process.argv[2]);
const str= Buffer.toString();
var arr= str.split('\n');
console.log(arr.length-1);