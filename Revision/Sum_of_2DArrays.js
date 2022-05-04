function SumOf2DArray()
{ 
    alert(`This code is fucked up, so don't run and do something else`);
    function createArray()
    {
        let rowNum = Number(prompt(`Enter the Number of Rows you want in the arrays?`));
        let colNum = Number(prompt(`Enter the Number of columns you want in the array?`));
        
        let arr = [];
        for(let k=0; k<rowNum; k++)
        {
            arr[k] = [];
        }

        function fillArray()
        {   
        for(let i=0; i<rowNum; i++)
        {
            for(let j=0; j<colNum; j++)
            {
                arr[i][j] = Number(prompt(`Enter the ${i}${j}th element of Array`));
            }
            alert(arr);
        }
        }
        fillArray();
    }

    let array1 = createArray();
    console.log(array1);
    alert(array1);
    let array2 = createArray();
    let resArray = [];

    for(let i=0; i<array1.length; i++)
    {
        resArray[i] = [];
    }

    function sumOfArray()
    {
        for(let i=0; i<array1.length; i++)
        {
            for(let j=0; j<array1.length; j++)
            {
                resArray[i][j] = array1[i][j] + array2[i][j];
            }
        }
    }
    sumOfArray();
    
    let out_res;
    for(let i=0; i<array1.length; i++)
    {
        out_res = ' ';
        for(let j=0; j<array1.length; j++)
        {
            out_res = resArray[i][j]
        }
        alert(`is it working?`);
    }
}
