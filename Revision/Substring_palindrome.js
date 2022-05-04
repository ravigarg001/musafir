 
// let str,l,r;
// function GetSubstring(str,l,r)
// {
//     let tempString = "";
//     for(let i=l; i<=r; i++)
//     {
//         tempString += str.charAt(i);
//     }
//     return tempString;
// }

// let  isPalindrome = (str) =>
// {
//     let reverseStr = str.split('').reverse().join('');
//     if(str==reverseStr){
//         return true;
//  }
// return false;
// }

// let SubstringPalindrome = (str,l,r) =>
// {
//     let substring = GetSubstring(str,l,r);
//     if(isPalindrome(substring) == true)
//     {
//         console.log(`${substring} is a palindrome`)
//     }
//     else 
//     {
//         console.log(`${substring} is not a palindrome`);
//     }

// }

// str = "aabbacabc";
// SubstringPalindrome(str,2,3);
// SubstringPalindrome(str,1,4);

let GetSubstring = (str, l, r) =>
{
let tempStr = "";
for(let i=l;i<=r;i++)
{
tempStr += str.charAt(i);
}
return tempStr;

}
let isPalindrome = (str) =>
{
let reverseStr = str.split('').reverse().join('');
if(str == reverseStr)
{
return true;
}
return false;
}
let SubstringPalindrome = (str, l, r) =>
{
let substring = GetSubstring(str, l, r);
if(isPalindrome(substring) == true)
{
console.log(`${substring} is a palindrome`);
}
else
{
console.log(`${substring} is not a palindrome`);
}
}
const str = "aabbacabc";
SubstringPalindrome(str, 1, 4);
SubstringPalindrome(str, 4, 6);
SubstringPalindrome(str, 2, 5);