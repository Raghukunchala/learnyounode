var num=process.argv.slice(2);
var sum=0;
for(let  i of num){
    sum=sum+(+i);
}
console.log(sum);
