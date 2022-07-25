//var arr = [1, 2, 3, 4, 7, 13, 17, 19];

var check_prime = 4;
var count = 0;
for (let i = 2; i < check_prime; i++) {
  if (check_prime % i == 0) {
    count++;
  }
}
if (count == 0) {
  console.log("prime");
} else {
  console.log("not prime");
}

// var arr = [10, 20, 3, 4, 7, 13, 1, 0];
// var howManyPrime = 0;
// for (let i = 0; i < arr.length; i++) {
//     let check = isPrime(arr[i])
  
//   if (check ===true) {
//     howManyPrime++;
//   }
// }

// console.log(`There are ${howManyPrime} Prime Number.`);

// function isPrime(num) {
//   var count = 0;
//   for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//       count++;
//     }
//   }
//   if(count===2){
//       return true
//   } else{
//       return false
//   }
// }
// var n  = isPrime(3)
// console.log(n)









// var num = 13;
// var count = 0;
// for(let i = 0;i<=num; i++){
//   if(num%i===0){
// count++;
//   }
// }
// if(count===0){
// console.log("prime")
// }
// else{
//   console.log("not prime")
// }


// prime check in array without function
var arr = [10, 20, 3, 4, 7, 13, 17,19,23,1];
var countPrime= 0;
for(let i = 0; i<arr.length; i++){
 let count = 0;
  for(let j= 2;j<arr[i]; j++){
   if(arr[i]%j===0){
    count++;

  } 
  }if(count===0 && arr[i]>1){
    countPrime++
  }
  
}
console.log(countPrime)
