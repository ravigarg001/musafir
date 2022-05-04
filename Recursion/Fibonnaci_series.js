function inputNumber3() {
let num = Number(prompt(`Which term do you want to find in the fibonnaci series?`));
function fib(n){
    if(n==1||n==0)
    {
        return n;
    } 
    return fib(n-2) + fib(n-1)
}
alert(fib(num));
}

function fibo(num){
let arr = [0,1];
for(let i=2; i<num+1; i++)
{
    arr.push(arr[i-2]+arr[i-1])
}
return arr[num]
}


