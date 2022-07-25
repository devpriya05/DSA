// var arr = [3, 4, 5, 9, 7, 11, 13, 17, 19];
// function checkPrime(num) {
//   var count = 0;
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       count++;
//     }
//   }

//   return count === 0;
// }
// var primecount = 0;

// for(let i =0; i<arr.length; i++){
//         let res = checkPrime(arr[i])
//         if(res ==true){
//          primecount++ 
//         }
        
// }
//console.log(primecount)


//var arr1 = ["naman", "mom", "ama","priya", "amar"]
//var str = "naman"
function checkPalindrome (str){
        var rev = ""
      var ans = "no"
        for(let i = str.length-1; i>=0; i--){
                rev+= str[i]
        }     
        if(rev ===str){
                ans = "yes"
}
console.log(ans)
}
var arr1 = ["naman", "mom", "ama"]
let text = arr1.toString();
//checkPalindrome(arr)
//console.log(text)

let res  = ''

let arr = text.split(" ")
for(let i = arr.length-1; i>=0; i--){
  var n = checkPalindrome(arr[i])
  if(arr[i]===n)
    res+= arr[i] + " "
}
console.log(res)














//checkPalindrome(str)
// function palindrome(arr){
//   let ans = []
//   for(let i = 0; i<arr.length; i++){
//     if(checkPalindrome(i)){
// ans.push(arr[i])
//     }
//   }
//   return ans 

// }
// palindrome(arr)

