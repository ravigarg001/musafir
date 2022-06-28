// let sumOfDigits=(num)=>{
//     let sum = 0;
//     while(num!=0){
//         sum += num%10;
//         num = parseInt(num/10);
//     }
//     return sum;
// }


// function sumOfDigits(num){
//     if(num==0){
//         return 0;
//     }
//     return (num%10) + sumOfDigits(parseInt(num/10));
// }
// console.log(sumOfDigits(84));

// let str;
// for(let i=1; i<=5; i++)
// {
//     str = '';
//     for(let j=1; j<=5; j++)
//     {
//         if(i||j == 2 || i||j == 3 || i||j == 4){
//             continue;
//         }
//         str = str + `${j}`+ ' ';
//     }
//     console.log(str);
// }



/*let ReverseOfNumber = (num) =>
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

//Print all prime palindromes till n;

// let isPrime = (num) => 
// {
//     for(let i=2; i<num; i++)
//     {
//         if(num%i == 0)
//         {
//             return false;
//         } 
//     }
//     return true;
// }

// let reverseNum = (num) =>
// {
//     let rev = 0;
//     let rem = 0;
//     while(num>0)
//     {
//         rem = num%10;
//         rev = rev*10 + rem;
//         num = parseInt(num/10);
//     }
//     return rev;
// }
// function printPrimePalindrome(num) {
// for( let i=2; i<=num; i++)
// {
//     if(isPrime(i))
//     {
//         if(reverseNum(i) == i)
//         {
//             console.log(i);
//         }
//     }
// }
// }
// printPrimePalindrome(250);

// let reverseOfNum = (num) => 
// {
//     let reverse;
//     let rem = 0;
//     while(num>0)
//     {
//         rem = num % 10;
//         reverse = reverse * 10 + rem;
//         num = parseInt(num/10);
//     }
//     return reverse;
// }
// let num = 123;
// console.log(reverseOfNum(num));

// let ReverseOfNumber = (num) =>
// {
// let rem, reverse = 0;
// while(num>0)
// {
// rem = num % 10;
// reverse = reverse * 10 + rem
// num = parseInt(num/10)
// }
// return reverse;
// }
// const num = 123;
// console.log(`Reverse of num=${num} is 
// ${ReverseOfNumber(num)}`)

// const arr = [23,42,34,1,5];
// function findMax(){
//     let max;
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             (arr[i]>=arr[j])? (max>arr[i]?max : (max=arr[i])):max;
//         }
//     }
//     return max;
// }
// console.log(findMax());

// const nums = [1,2,3]
// let totalSum = (nums.reduce((sum, item) => sum + item, 5))
// //sum starting with 5
// console.log(totalSum)
// let totalSum1 = (nums.reduce((sum, item) => sum + item, 15))
//sum starting with 15
// console.log(totalSum1)
// let res = 0;
// function  sum(n){
//     if(n<=1){
//         return n;
//     }
//   return n + sum(n-1);
// }
// console.log(sum(100));
// let arr = [1,1,1]
// let x = arr[0];
// let y = arr[1];
// let z = arr[2];
// function checkifpass(){
//     return parseInt((z-y)/x);
// };

// console.log(checkifpass());
// Length of string. 



// let myString = 'tit'
// function palindrome(myString){

//     //write palindrome logic
//     let reverseString = "";
//     for(let i=0; i<myString.length; i++){
//             reverseString = myString.charAt(i) + reverseString;
//     }
//     if(reverseString === myString){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
//     }
//     palindrome(myString);

//     let a = 1;
//     let b = 0;
//     while(a<=3)
//     {
//         ++a;
//         b += a*2;
//         console.log(b);
//         a++;
//     }


let findExponent = (num=Number(prompt(`Enter the base`)),pow=Number(prompt(`Enter the exponent`))) =>
{
    if(Number.isNaN(num) || Number.isNaN(pow)){
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

// Your code here.
function chessPattern(r=Number(prompt(`Enter number of rows (Number only)`)),c=Number(prompt(`Enter number of coloms (Nmber only )`))) {
for(let i=1; i<=r; i++)
{
  	let hold = "";
	for(let j=1; j<=c; j++)
	{
      i%2 ? (j%2 ? hold += " " : hold += "*") : (j%2 ? hold += "*" : hold += " ");
    } console.log(hold);
}
alert(`Open console for Pattern`);
};

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

let truthArray = [`Truth is such a sword that years of tightly held chains break away just by a touch of it in just one moment.`,`force is futile`,`And then he leave`,'Life is a falling leaf','In cycles move the life of ordinary man','Man default to his defaults','Be SuperNatural - Instinct not the Instructions'];
let showTruth = () => {
  let totalLikes = 0;
    let likeCount = () => {
        let like = 0;
        ++like;
        totalLikes += like;
        return totalLikes;
    }
    if(totalLikes>=truthArray.length){
        alert(`Add your truth. Second hand wisdom doesn't work. Find your own.`);
        totalLikes = 0;
    }
    document.getElementById("btn-name").innerHTML = `More Truth`
    document.getElementById("onlyTruth").innerHTML = truthArray[likeCount()-1];
}

let addTruth = () =>{
    truthArray.push(prompt(`Type the truth`));
}

let deleteTruth = () => {
    truthArray.splice((totalLikes-1),1);
    // console.log(showTruth());
}
// note: Even after calling showTruth() in deleteTruth(), it's not rendering the next element as the showTruth function is designed to do 
// Add web storage https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage#storing_simple_data_%E2%80%94_web_storage

// let initialLikes = 0;

// // function like(){
// //     return ++initialLikes;
// // }
// function likes(){
//     return function countLikes(){
//        return ++initialLikes;
//     }
    
// }

// const v1 = likes();
// console.log(v1());
// console.log(v1())
// console.log(v1());
// console.log(like());
// console.log(like());
// console.log(like());

function arrangeInIncreasingOrder()
{
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

// const something = outer();

// console.log(something());
// console.log(something());
// console.log(something());
// let increaseClicks;


function countClicks(){
    count = 0;
    return ()=>{return ++count}
}
    const x = countClicks()

    function startCounting(){
    document.getElementById("result").innerHTML=(x())
} 

// CHALLENGE 1
function createFunction() {
    return () => {return console.log(`hello`)}
  }
  
  // /*** Uncomment these to check your work! ***/
//   const function1 = createFunction();
//   function1(); // => should console.log('hello');
  
  
  // CHALLENGE 2
  function createFunctionPrinter(input) {
    return () => {return console.log(input)}
  }
  
  // /*** Uncomment these to check your work! ***/
//   const printSample = createFunctionPrinter('sample');
//   printSample(); // => should console.log('sample');
//   const printHello = createFunctionPrinter('hello');
//   printHello(); // => should console.log('hello');
  
  
  // CHALLENGE 3
  function outer() {
    let counter = 0; // this variable is outside incrementCounter's scope
    function incrementCounter () {
      counter ++;
      console.log('counter', counter);
    }
    return incrementCounter;
  }
  
  const willCounter = outer();
  const jasCounter = outer();
  
  // Uncomment each of these lines one by one.
  // Before your do, guess what will be logged from each function call.
  
  // /*** Uncomment these to check your work! ***/
//   willCounter();
//   willCounter();
//   willCounter();
  
//   jasCounter();
//   willCounter();
  
  
  function addByX(x) {
    function once(y) {
    let count = 0;
    let save;
    function inner(){
      if(count == 0){
      count++;
      save = x+y;
      return console.log(save);
      } else {
        return console.log(save);
      }
    } inner();
  }
    return once;
  }
  
  // /*** Uncomment these to check your work! ***/
//   const addByTwo = addByX(2);
//   addByTwo(1); // => should return 3
//   addByTwo(2); // => should return 4
//   addByTwo(3); // => should return 5
  
  // const addByThree = addByX(3);
  // addByThree(1); // => should return 4
  // addByThree(2); // => should return 5
  
  // const addByFour = addByX(4);
  // addByFour(4); // => should return 8
  // addByFour(5); // => should return 9
  
  
  // CHALLENGE 4
  function once(func) {
  
  }
  
  // /*** Uncomment these to check your work! ***/
  // const onceFunc = once(addByTwo);
  // console.log(onceFunc(4));  // => should log 6
  // console.log(onceFunc(10));  // => should log 6
  // console.log(onceFunc(9001));  // => should log 6
  
  
  // CHALLENGE 5
  function after(count, func) {
  
  }
  
  // /*** Uncomment these to check your work! ***/
  // const called = function() { console.log('hello') };
  // const afterCalled = after(3, called);
  // afterCalled(); // => nothing is printed
  // afterCalled(); // => nothing is printed
  // afterCalled(); // => 'hello' is printed
  
  
  // CHALLENGE 6
  function delay(func, wait) {
  
  }
  
  
  // CHALLENGE 7
  function rollCall(names) {
  
  }
  
  // /*** Uncomment these to check your work! ***/
  // const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
  // rollCaller() // => should log 'Victoria'
  // rollCaller() // => should log 'Juan'
  // rollCaller() // => should log 'Ruth'
  // rollCaller() // => should log 'Everyone accounted for'
  
  
  // CHALLENGE 8
  function saveOutput(func, magicWord) {
  
  }
  
  // /*** Uncomment these to check your work! ***/
  // const multiplyBy2 = function(num) { return num * 2; };
  // const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
  // console.log(multBy2AndLog(2)); // => should log 4
  // console.log(multBy2AndLog(9)); // => should log 18
  // console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }
  
  
  // CHALLENGE 9
  function cycleIterator(array) {
  
  }
  
  // /*** Uncomment these to check your work! ***/
  // const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
  // const getDay = cycleIterator(threeDayWeekend);
  // console.log(getDay()); // => should log 'Fri'
  // console.log(getDay()); // => should log 'Sat'
  // console.log(getDay()); // => should log 'Sun'
  // console.log(getDay()); // => should log 'Fri'
  
  
  // CHALLENGE 10
  function defineFirstArg(func, arg) {
  
  }
  
  // /*** Uncomment these to check your work! ***/
  // const subtract = function(big, small) { return big - small; };
  // const subFrom20 = defineFirstArg(subtract, 20);
  // console.log(subFrom20(5)); // => should log 15
  
  
  // CHALLENGE 11
  function dateStamp(func) {
  
  }
  
  // /*** Uncomment these to check your work! ***/
  // const stampedMultBy2 = dateStamp(n => n * 2);
  // console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
  // console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }
  
  
  // CHALLENGE 12
  function censor() {
  
  }
  
  // /*** Uncomment these to check your work! ***/
  // const changeScene = censor();
  // changeScene('dogs', 'cats');
  // changeScene('quick', 'slow');
  // console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'
  
  
  // CHALLENGE 13
  function createSecretHolder(secret) {
  
  }
  
  // /*** Uncomment these to check your work! ***/
  // obj = createSecretHolder(5)
  // obj.getSecret() // => returns 5
  // obj.setSecret(2)
  // obj.getSecret() // => returns 2
  
  
  // CHALLENGE 14
  function callTimes() {
  
  }
  
  // /*** Uncomment these to check your work! ***/
  // let myNewFunc1 = callTimes();
  // let myNewFunc2 = callTimes();
  // myNewFunc1(); // => 1
  // myNewFunc1(); // => 2
  // myNewFunc2(); // => 1
  // myNewFunc2(); // => 2
  
  
  // CHALLENGE 15
  function roulette(num) {
  
  }
  
  // /*** Uncomment these to check your work! ***/
  // const play = roulette(3);
  // console.log(play()); // => should log 'spin'
  // console.log(play()); // => should log 'spin'
  // console.log(play()); // => should log 'win'
  // console.log(play()); // => should log 'pick a number to play again'
  // console.log(play()); // => should log 'pick a number to play again'
  
  
  // CHALLENGE 16
  function average() {
  
  }
  
  // /*** Uncomment these to check your work! ***/
  // const avgSoFar = average();
  // console.log(avgSoFar()); // => should log 0
  // console.log(avgSoFar(4)); // => should log 4
  // console.log(avgSoFar(8)); // => should log 6
  // console.log(avgSoFar()); // => should log 6
  // console.log(avgSoFar(12)); // => should log 8
  // console.log(avgSoFar()); // => should log 8
  
  
  // CHALLENGE 17
  function makeFuncTester(arrOfTests) {
    
  }
  
  // /*** Uncomment these to check your work! ***/
  // const capLastTestCases = [];
  // capLastTestCases.push(['hello', 'hellO']);
  // capLastTestCases.push(['goodbye', 'goodbyE']);
  // capLastTestCases.push(['howdy', 'howdY']);
  // const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
  // const capLastAttempt1 = str => str.toUpperCase();
  // const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
  // console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
  // console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true
  
  
  // CHALLENGE 18
  function makeHistory(limit) {
  
  }
  
  // /*** Uncomment these to check your work! ***/
  // const myActions = makeHistory(2);
  // console.log(myActions('jump')); // => should log 'jump done'
  // console.log(myActions('undo')); // => should log 'jump undone'
  // console.log(myActions('walk')); // => should log 'walk done'
  // console.log(myActions('code')); // => should log 'code done'
  // console.log(myActions('pose')); // => should log 'pose done'
  // console.log(myActions('undo')); // => should log 'pose undone'
  // console.log(myActions('undo')); // => should log 'code undone'
  // console.log(myActions('undo')); // => should log 'nothing to undo'
  
  
  // CHALLENGE 19
  function blackjack(array) {
  
  }
  
  // /*** Uncomment these to check your work! ***/
  
  // /*** DEALER ***/
  // const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);
  
  // /*** PLAYER 1 ***/
  // const i_like_to_live_dangerously = deal(4, 5);
  // console.log(i_like_to_live_dangerously()); // => should log 9
  // console.log(i_like_to_live_dangerously()); // => should log 11
  // console.log(i_like_to_live_dangerously()); // => should log 17
  // console.log(i_like_to_live_dangerously()); // => should log 18
  // console.log(i_like_to_live_dangerously()); // => should log 'bust'
  // console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
  // console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
  
  // /*** BELOW LINES ARE FOR THE BONUS ***/
  
  // /*** PLAYER 2 ***/
  // const i_TOO_like_to_live_dangerously = deal(2, 2);
  // console.log(i_TOO_like_to_live_dangerously()); // => should log 4
  // console.log(i_TOO_like_to_live_dangerously()); // => should log 15
  // console.log(i_TOO_like_to_live_dangerously()); // => should log 19
  // console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
  // console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
  // console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
  
  // /*** PLAYER 3 ***/
  // const i_ALSO_like_to_live_dangerously = deal(3, 7);
  // console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
  // console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
  // console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
  // console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
  // console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
  
  function everyXsecsForYsecs(func,interval,duration) {
    // ADD CODE HERE
    let count = 0;
    function print(){
      if(count<duration){
        func();
        count++
        setTimeout(print,interval*1000)
        };
    }
    print();
  }
  // Uncomment the following lines to check your work!
  function theEnd() {
   console.log('This is the end!');
  }
  
  //everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!

  function delayCounter(target, wait) {
    let count = 1;
      return function print(){
      if(count<=target){
              console.log(count);
        count++;
        setTimeout(print,wait)
      }
      }
    }
  
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  //const countLogger = delayCounter(21,1000);
  //countLogger();

  const userData = {
    name:'ravi',
    score:0,
    increment : function (){userData.score++},
    increaseAge : function(){userData.age++;
    console.log(userData.age)}
  }

  userData.increment();
  userData.increment();
  console.log(userData.name);
  console.log(userData.score);
  userData.age = 21;
  function print(){
    console.log(userData.age);
    setTimeout(print, 1000);
  }
  
  
  function Timer(){
    minCount = 60*Number(prompt(`Enter Minutes`))
    secCount = Number(prompt(`Enter seconds`)) + minCount; 
    function start(){
    if(secCount >= 0){
      document.getElementById('result').innerHTML = secCount;
      secCount--;
      setTimeout(start,1000)
    }
  }
  start();
  }
  
  // factory function 
  function createUser(name,age){
    const user = {};
    user.name = name;
    user.age = age;
    user.score = 0;
    user.increment = function increment(){user.score++};
    return user;
  }

  // let user1 = createUser('ravi', 21);
  // let user2 = createUser('will',29);
//   let obj = {
//     a: 1,
//     b : 2,
//     c : 3,
//     d : 4,
//     e : 5,
//     f : 6,
//     g : 7,
//     h : 8,
//     i : 9,
//     j : 10,
//     k : 12,
//     l : 13,
//     m : 14,
//     n : 15,
//     o : 16,
//     p : 17,
//     q : 18,
//     r : 19,
//     s : 20,
//     t : 21,
//     u : 22,
//     v : 23,
//     w : 24,
//     y : 25,
//     z : 26
//   }
//   console.log(obj.w);
//  let alphabets = ['a','b','c']
//  let alphToNum = alphabets.map(alphabet => { alphabets.forEach(element => {
//    return obj.element
//  }); });

//   console.log(alphToNum);