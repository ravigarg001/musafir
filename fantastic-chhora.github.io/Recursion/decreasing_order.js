function inputNumber2(){
    let n = Number(prompt('Show the numbers in decreasing order from: '));
    function decreasingNumRecursion(n) 
    {
        if(n==0)
        {
            return;
        }
        console.log(n--);
        decreasingNumRecursion(n);
    }
    decreasingNumRecursion(n);
    alert(`Please open console to see the result`);
}