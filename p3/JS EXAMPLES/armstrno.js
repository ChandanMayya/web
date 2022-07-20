n=prompt("Enter a number");
//var p=[0,0,0];
s=0;
l=n.length;
for(i=0;i<l;i++){
    //p[i]=n[i]**3;
    //s+=p[i];
    s+=n[i]**l;
}
if(n==s)
    alert("Amstrong number");
else    
    alert("Not an Amstrong number")