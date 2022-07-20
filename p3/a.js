document.write("<h3>3a.Fibonacci!</h3>")
n=prompt("Enter a number minimum 2!");
/*if(n==1)
console.log(0);
else if(n==2)
{
    console.log(0)
    console.log(1);
}/*
for(i=0,j=0;i!=n;i++){
    console.log(i+j)
    j=i;
}
*/
f1=0;
f2=1;
document.write("Fibonacci Series upto " + n + "is: <br/>");
document.write(f1 + "<br/>" + f2 + "<br/>" );
for(i = 3; i <= n; i++){
    f3=f1+f2;
    f1=f2;
    f2=f3;
    document.write(f3 + "<br/>");
}