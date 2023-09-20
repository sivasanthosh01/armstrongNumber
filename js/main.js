var a=prompt("enter the number")
var len=a.length;
sum=0;
for(i=0;i<len;i++){
    
    sum=sum+a[i]**len;
    
}
console.log(sum);
if(a==sum){
    document.write("Armstrong Number");
}
else{
    document.write("Not Armstrong Number");
}