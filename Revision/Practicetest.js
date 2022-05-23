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
    alert(`${num}^${pow} is ${res}`);
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


