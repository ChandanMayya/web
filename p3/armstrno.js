n=prompt("Enter a number");
var p=[0,0,0];
s=0;
for(i=0;i<3;i++){
    p[i]=n[i]**3;
    console.log(n[i]);
    s+=p[i];
}
    
alert(s)
if(n==s)
    alert("Armstrong number");
else    
    alert("Not an")