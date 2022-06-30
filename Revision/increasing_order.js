function inputNumber1() {
    let n = Number(prompt('Print the numbers in increasing orders till:'));
    let f1 = (n) => {
        let i = 1;
        function increaseNum() {
            if(i>n) {
                return;
            }
            console.log(i++);
            increaseNum();
        }
        increaseNum();
    }
    f1(n);
    alert(`Open console to see the result`);
}
