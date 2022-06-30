function inputNumber() {
    let n = Number(prompt('Find the factorial of Number:'));
    function calculateFactorial(n)
    {
        if(n === 0)
        {
            return 1;
        } else 
        {
            return n*calculateFactorial(n-1);
        }
    }
    document.getElementById("result").innerHTML = `Factorial of ${n} is ${calculateFactorial(n)}`;
    // document.write.getElementById('factorial') = "hello";
}
