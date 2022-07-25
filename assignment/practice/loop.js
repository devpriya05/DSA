// var arr = []
// var str = ""
// for(let i = 1; i<=10; i++){
//         str+= i;
//         arr.push(str)
// }
// console.log(arr)

// var arr = []
// var str = ""

// for(let i = 1; i<=4; i++){
// str+= i;
// arr.push(str)
// }
// console.log(arr)
// var arr = [];
// var str = "";
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     str += i;
//     arr.push(str);
//   }
// }
//console.log(arr)

// var arr = [];
// var str = "";
// for (let i = 1; i <= 9; i++) {
//   if (i % 2 !== 0) {
//     str += i;
//     arr.push(str);
//   }
// }
//console.log(arr)

// var arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     //console.log("*******")
//   } else {
//     //console.log("#")
//   }
// }

// var arr = [];
// var str = "";
// for(let i = 1; i<=10; i++){
//   if(i%2==0){
//     str+= "*"
//     arr.push(str)
//   }
//   else{
//     str+= "#"
//     arr.push(str)
//   }
// }
//console.log(arr)

// var n = 4;
// var sum = 0
// for(let i = 1; i<=n; i++){
//   if(i%2!==0){
//     sum = sum + i
//   }
//   console.log(sum)
// }
// var arr = [0,1, 0, 1, 1, 1, 0, 2, 2, 0 ]
// let zero = 0;
//     let one = 0;
//     let two = 0;
//     //let str = ""
//     for(let i= 0; i<arr.length; i++){
//         if(arr[i]===0){
//           zero++
//         }
//         if(arr[i]===1){
//           one++
//         }
//         if(arr[i]===2){
//           two++
//         }

//     }
// console.log(zero, one, two )

var num = 971;
var str = num.toString();
var reverse = "";
for (let i = str.length - 1; i >= 0; i--) {
  reverse += str[i];
}
//console.log(reverse);

var arr = [1, 2, 3, 4, 5];
var str = arr.toString();
var rev = "";
for (let i = str.length - 1; i >= 0; i--) {
  rev += str[i];
}
//console.log(rev);

var num = 123456897;
var str = num.toString();
rev = "";
for (let i = str.length - 1; i >= 0; i--) {
  rev += str[i];
}
//console.log(rev);

var arr = ["ram", "shyam", "ravi", "sita"];
var str = arr.toString();
res = "";
for (let i = 0; i < str.length; i++) {
  res += str[i];
}
//console.log(res);

var res = [];
var str = "";
for (let i = 1; i <= 10; i++) {
  str += i;
  res.push(str);
}
//console.log(res);
// var n = 3
// var price = [100,20,40]
// var quantity = [2,1,2]
// var mult = 1;
// var sum = 0;

//   for(let i = 0; i<n; i++){
//      mult = price[i]* quantity[i]
//      sum = sum + mult 
//   }
//   console.log(sum)
