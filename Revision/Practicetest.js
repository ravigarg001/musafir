// ONLY PROBLEMS

  //Problem 1
  //Solution 1
    /*
    let sumOfDigits = (num) => {
        let sum = 0;
        while(num!=0){
            sum += num%10;
            num = parseInt(num/10);
        }
        return sum;
    }
    */
  
  // Solution 2
    /*
    function sumOfDigits(num) {
        if(num==0){
            return 0;
        }
        return (num%10) + sumOfDigits(parseInt(num/10));
    }
    console.log(sumOfDigits(84));
    */




  //PROBLEM 2  
    /*
    let str;
    for(let i=1; i<=5; i++)
    {
        str = '';
        for(let j=1; j<=5; j++)
        {
            if(i||j == 2 || i||j == 3 || i||j == 4){
                continue;
            }
            str = str + `${j}`+ ' ';
        }
        console.log(str);
    }
    */


    
    
  //PROBLEM 3
    /*
    let ReverseOfNumber = (num) =>
    {
      let rem, reverse = 0;
      while(num>0)
    {
      rem = num % 10;
      reverse = reverse * 10 + rem
      num = parseInt(num/10)
    }
      return reverse;
    }
    
    let num = 122;
    ReverseOfNumber(num) == num? console.log(`Palindrome`) : console.log(`Not a palindrome`);
    */

    
    
    
  //PROBLEM 4
  //Print all prime palindromes till n;
    /*
    let isPrime = (num) => 
    {
        for(let i=2; i<num; i++)
        {
            if(num%i == 0)
            {
                return false;
            } 
        }
        return true;
    }

    let reverseNum = (num) =>
    {
        let rev = 0;
        let rem = 0;
        while(num>0)
        {
            rem = num%10;
            rev = rev*10 + rem;
            num = parseInt(num/10);
        }
        return rev;
    }

    function printPrimePalindrome(num) {
    for( let i=2; i<=num; i++)
    {
        if(isPrime(i))
        {
            if(reverseNum(i) == i)
            {
                console.log(i);
            }
        }
    }

    }
    printPrimePalindrome(250);
    */
   
    
    
   
    
  //PROBLEM 5
    //SOLUTION 1
      /*
      let reverseOfNum = (num) => 
      {
          let reverse;
          let rem = 0;
          while(num>0)
          {
              rem = num % 10;
              reverse = reverse * 10 + rem;
              num = parseInt(num/10);
          }
          return reverse;
      }
      let num = 123;
      console.log(reverseOfNum(num));
      */
     
    //SOLUTION 2
      /*
      let ReverseOfNumber = (num) =>
      {
        let rem, reverse = 0;
        while(num>0)
        {
          rem = num % 10;
          reverse = reverse * 10 + rem
          num = parseInt(num/10)
        }
        return reverse;
      }

      const num = 123;
      console.log(`Reverse of num=${num} is 
      ${ReverseOfNumber(num)}`)
      */
   
    
    
   
      
   //PROBLEM 6 
     
   // Find the max number in the array.
      /*
      const arr = [23,42,34,1,5];
      function findMax()
      {
        let max;
        for(let i=0; i<arr.length; i++)
        {
          for(let j=0; j<arr.length; j++){
          (arr[i]>=arr[j])? (max>arr[i]?max : (max=arr[i])):max;
        }
      }
        return max;
      }
      console.log(findMax());
      */





  //PROBLEM 7
     /*
      const nums = [1,2,3]
      let totalSum = (nums.reduce((sum, item) => sum + item, 5))
      //sum starting with 5
      console.log(totalSum)
      let totalSum1 = (nums.reduce((sum, item) => sum + item, 15))
      sum starting with 15
      console.log(totalSum1)
      let res = 0;
      function  sum(n){
          if(n<=1){
              return n;
          }
        return n + sum(n-1);
      }
      console.log(sum(100));
      let arr = [1,1,1]
      let x = arr[0];
      let y = arr[1];
      let z = arr[2];
      function checkifpass(){
          return parseInt((z-y)/x);
      };

      console.log(checkifpass());
     /*





  //PROBLEM 8
     /*
      let myString = 'tit'
      function palindrome(myString)
      {
          //palindrome logic

          let reverseString = "";
          for(let i=0; i<myString.length; i++)
          {
            reverseString = myString.charAt(i) + reverseString;
          }
          if(reverseString === myString)
          {
            console.log(true);
          }
          else
          {
            console.log(false);
          }
      }
          palindrome(myString);
      */




          
          
          
          
          
// FEATURES ONLY         
   
  // FEATURE 1   
    // Calculate exponent
      let findExponent = (num=Number(prompt(`Enter the base`)),pow=Number(prompt(`Enter the exponent`))) =>
      {
        if (Number.isNaN(num) || Number.isNaN(pow))
        {
          alert(`Enter the number type only`)
        }

        let res = 1;

        if(pow == 0)
        {
            return alert(res);
        }
        for(let i=1; i<=pow; i++)
        {
            res = res*num
        }
          document.getElementById("result").innerHTML = `${num}^${pow} is ${res}`;
      }





  //FEATURE 2    
    // Print the pattern of chess
      function chessPattern(r = Number(prompt(`Enter number of rows (Number only)`)), c = Number(prompt(`Enter number of coloms (Nmber only )`)))
      {
        for(let i=1; i<=r; i++)
        {
          let hold = "";
          for(let j=1; j<=c; j++)
          {
            i%2 ? (j%2 ? hold += " " : hold += "*") : (j%2 ? hold += "*" : hold += " ");
          }
          console.log(hold);
        }
        alert(`Open console for Pattern`);
      };


    


  //FEATURE 3 
    //Add, delete and Show truth.
      let truthArray = ["Time creates existence","more words less meaning","A paralyzed bird cannot fly"];
      let totalTruth = 0;
      
      // Show truth Function 
      let showTruth = () => 
      {
        let likeCount = () =>
        {
          let truthCount = 0;
          ++truthCount;
          totalTruth += truthCount;
          return totalTruth;
        }
            
        if (totalTruth >= truthArray.length)
        {
          alert(`Add your truth. Second hand wisdom doesn't work. Find your own.`);
          totalTruth = 0;
        }
           
        document.getElementById("btn-name").innerHTML = `More Truth`
        document.getElementById("onlyTruth").innerHTML = truthArray[likeCount()-1];
      }

      //Add truth function
      let addTruth = () =>
      {
        truthArray.push(prompt(`Type the truth`));
      }

      //Delete truth function 
      let deleteTruth = () => 
      {
        truthArray.splice((totalLikes-1),1);
      }
      // Add web storage https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage#storing_simple_data_%E2%80%94_web_storage






  //FEATURE 4
    // Arrange numbers in Increasing order
      function arrangeInIncreasingOrder()
      {
        const numArr = [];
        let totalNumbers = Number(prompt(`What is total number of elements to sort?`));
        for(let i=0; i<totalNumbers; i++)
        {
          numArr.push(Number(prompt(`Add the entry number ${i+1}`)))
        }
          
        // function showSortedArr(){
        let swap = (arr,i,j) => 
        {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
          
        function bubbleSort(arr)
        {
          for(let i=0; i<arr.length-1; i++)
          {
            for(let j=0; j<arr.length-1; j++)// total elements is n but number of adjacent pairs is n-1.
            {
              if(arr[j]>arr[j+1])
              {
                swap(arr,j,j+1)
              }
            }
          }
        }
        
          bubbleSort(numArr);
          document.getElementById('result').innerHTML = numArr;
      }
        // renderButtonTag("Show Array","input",showSortedArr)
    // }





  //FEATURE 5
    // Count every time I click. Invoke Startcounting() to execute. 
      function countClicks()
      {
        count = 0;
        return ()=>{return ++count}
      }
      
      const x = countClicks()
      
      function startCounting()
      {
        document.getElementById("result").innerHTML=(`You have clicked me ${x()} times`)
      } 
      



  //FEATURE 6
    // Timer 
      function Timer()
      {
        minCount = 60*Number(prompt(`Enter Minutes`))
        secCount = Number(prompt(`Enter seconds`)) + minCount; 
        function start()
        {
          if(secCount >= 0)
          {
            document.getElementById('result').innerHTML = `${secCount} seconds left`;
            secCount--;
            setTimeout(start,1000)
          }
        }
        start();
      }

    
      

    //  

    //closures

    // function outer()
    // {
    //     let count = 0;
        
    //     return function increment()
    //     {
    //         if(count>=2){
    //            return console.log(`you can't run me now`)
    //         }
    //         return count++
    //     }
    // }


    // function renderInputTag()
              // {   
              //     let input = document.createElement('input')
              //     document.getElementById('input').appendChild(input);
              //     input.placeholder="Enter the number";
              // }
              // renderInputTag()

              // function renderButtonTag(btn_name,id,function_name)
              // {
              //     let button = document.createElement('button');
              //     document.getElementById(id).appendChild(button);
              //     button.innerHTML = `${btn_name}`
              //     button.addEventListener ("click",function_name);
              // }


              // function addNumber()
              // {
              //     numArr.push(document.getElementById("input").innerHTML);
              // }

              // let keepAddingNumber = true;
              // while(keepAddingNumber){
              //     addNumber();
              // }

              // function stopAdding(){
              //     keepAddingNumber = false;
              // }
              // renderButtonTag("Add Number","input",addNumber);
              // renderButtonTag("Stop","input",stopAdding)

    


      // let arr = [3,9,1,6,5,2];
      // arr.splice(3,1);
      // console.log(arr);
      // console.log(arr.indexOf(Math.max(...arr)))
      // // console.log((Math.max(...arr)));
      // // console.log(arr.indexOf(8));
      // let res = [];
      // let temparr = arr;
      // for(let i=0; i<=arr.length; i++)
      // {
      //     res.push(Math.max(...temparr));
      //     console.log(temparr.indexOf(Math.max(...temparr)))
      //     console.log(res);
      //     // temparr.splice((temparr.indexOf(Math.max(...arr)),1));
      //     // console.log(temparr.indexOf(Math.max(...arr)));
      // }
      // console.log(res);
      // let totalLikes = 0;
      // let showTotalLikes = () => {
      //   let likeCount = () => {
      //       let like = 0;
      //       ++like;
      //       totalLikes += like;
      //       return `You clicked me ${totalLikes} times till now`
      //   }
      //   document.getElementById("result").innerHTML=(likeCount())
      // }
      
      
      
      
      
  //FEATURE 7
    //To-do app
    function launchTodo()
    {
      let input = document.createElement('input');
      input.placeholder = "Enter the task name"
      document.getElementById('feature').appendChild(input)

    function createButton(btn_name,id,func_name)
    {
      let button = document.createElement('button');
      button.innerHTML = `${btn_name}`;
      button.onclick = func_name;
      document.getElementById(`${id}`).appendChild(button)
    }
   
    createButton("Add", 'feature',addTask)
    }
    
launchTodo()
    
var toDoList = [];
function addTask() {
  let x = `${document.querySelector}`
  toDoList.push(x);
  console.log(toDoList);
}
    
    



  












  
  
  
 
  


 



  
  


  