n=prompt("Enter a number");
//var p=[0,0,0];
s=0;
for(i=0;i<3;i++){
    //p[i]=n[i]**3;
    //s+=p[i];
    s+=n[i]**3;
}
if(n==s)
    alert("Amstrong number");
else    
    alert("Not an Amstrong number")