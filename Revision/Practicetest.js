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

const arr = [23,42,34,1,5];
function findMax(){
    let max;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            (arr[i]>=arr[j])? (max>arr[i]?max : (max=arr[i])):max;
        }
    }
    return max;
}
console.log(findMax());