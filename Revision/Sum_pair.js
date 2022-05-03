function checkSumPair()
{
    let nums = Number(prompt('How many numbers do you want in array?'))
    let arr = [];
    for(let i=0; i<nums; i++){
        arr.push(Number(prompt(`Enter your element Number at index ${i}`)))
    }

    let sum = Number(prompt(`What value of sum you want to check against?`));

    function sumPair(arr, sum){
        let exeNum = 0;
        for(let i=0; i<arr.length; i++){
            for(let j=i+1; j<arr.length; j++){
                exeNum++;
                if(arr[i]+arr[j]==sum){
                    alert(`Sum of ${arr[i]} and ${arr[j]} is equal to ${sum}`);
                    alert(`Function returned a value after ${exeNum} number of executions`)
                    return true;
                }
            }
        }
        return false;
    }
    if(sumPair(arr, sum)==false){
        alert(`No such pair exists!!`);
    };
}
