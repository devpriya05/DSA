//TOM AND JERRY.........

// var data = "1111100000"
// var data = "10101"
// let countZero = 0;
// let countOne = 0;

// for(let i=0;i<data.length;i++){
//     if(data[i]==0){
//         countZero++
//     }else{
//         countOne++
//     }
// }
// if(countZero>countOne){
//     console.log("Jerry")
// }else if(countOne>countZero){
//     console.log("tom")
// }else{
//     console.log("Another round")
// }

// EVEN PALINDROME..........

// var data = "abcdcfa"

// function checkPalidrom(res){

// let bag = ""
// for(let i=res.length-1;i>=0;i--){
//     bag+= res[i]
// }if(res==bag){
//     return  "yes"
// }else{
//     return "No"
// }

// }
// let res = ""
// for(let i=0;i<data.length;i++){
//     if(i%2==0){
// res+= data[i]
//     }
// }
//  let y = checkPalidrom(res)
//  console.log(y)

//SUBSTRING ENDING WITH A...........

// let str = "aman"

// let count= 0
// for(let i=0;i<str.length;i++){
//     let bag = ""
//     for(let j=i;j<str.length;j++){
//         bag+= str[j]
//         // console.log(bag)

//         if(bag[bag.length-1]=="a"){
//             count++
//         }
//     }
// }
// console.log(count)


//even no palindrome

// var str = "abcdcfa"
// let res = ""
// for(let i= 0;i<str.length; i++){
//     if(i%2==0){
//         res+= str[i]

//     }
// }
// let rev = ""
// let ans = "no"
// for(let i = res.length-1; i>=0 ;i--){
// rev = rev + res[i]
// }
// if(res==rev){
//     ans = "yes"
// }
// console.log(ans)

// var str ="thisracecarisgood";
// let res = ""
// for(let i = 0; i<str.length; i++){

//     for(let j = i;j<str.length; j++){
//         res+= str[j] + " "
//         //console.log(res)
//     }
// }
// let rev = "";
// let count = 0;
// for(let i = res.length-1; i>=0; i--){
//     rev = rev + res[i]
// if(rev==res){
//     count++;
// }
// }
// console.log(count)

//SUM OF 1D ARRAY...

// var arr = [1,2,3,4]
//     let res = []
//     let sum = 0;
//     for(let i = 0; i<arr.length; i++){
//         let current_value = arr[i]
//         sum = sum + current_value
//         res.push(sum)
//     }
//     console.log(res)

// var arr = [1,2,3,4,5,6]
// let res = []
// let sum = 0
// for(let i = 0; i<arr.length; i++){
// let c_v = arr[i]
// sum = sum + c_v
// res.push(sum)
// }
// console.log(res)

// MISSING NUMBER...........

//     var arr = [1,2,3,5]

// var arr = [1,2,3,5]
// var res = 0;
// for(let i = 0; i<arr.length; i++){
//  var sum = (arr.length+1)*(arr.length+2)/2
//      res = res + arr[i]
//         var ans = (sum-res)
//     }

//    console.log(ans)

// var arr = [1,2,3,4]
// let res = []
// let sum = 0;
// for(let i = 0; i<arr.length; i++){
//     sum = sum + arr[i]
//     res.push(sum)
// }
// console.log(res)

// var arr = [1,2,3,4,5,8,6,5,7];
// var res = []
// var sum = 0;
// for(let i = 0; i<arr.length; i++){
//     sum = sum + arr[i]
//     res.push(sum)
// }
// console.log(res)

// var arr = [1,2,3,5]
// var res = 0;
// for(let i = 0; i<arr.length; i++){
//  var sum = (arr.length+1)*(arr.length+2)/2
//      res = res + arr[i]
//         var ans = (sum-res)
//     }

// console.log(ans)

//SUBSTRING STARTING WITH A......

//   let str = "aman"

//   let count= 0
//   for(let i=0;i<str.length;i++){
//       let bag = ""
//       for(let j=i;j<str.length;j++){
//           bag+= str[j]
//           // console.log(bag)

//           if(bag[i]=="a"){
//               count++
//           }
//       }
//   }
//   console.log(count)

// INTERSECTION OF ARRAY.....
// var arr1 = [4,5,7]
// var arr2 = [9,2,5]

// for(let i = 0; i<arr1.length; i++){
//     for(let j=0; j<arr2.length;j++){
// if( arr1[i] == arr2[j]){
// console.log(arr2[j]);
// }
//     }
// }

//COUNT SUCH PAIR.....

// var n = [3,0,6,2,7]
// var target = [5,9]
// var count = 0;
//      for(let i=0;i<n;i++){
//          for(let j=i+1;j<n;j++){
//              let  sum = n[i]+ n[j];
//              if(sum==target[i]){
//                  count++;
//              }
//          }
//      }
//  console.log(count);

// var n = 5;

// for (let i = 1; i <= n; i++) {
//   let ans = "";
//   for (let j = 1; j <= n; j++) {
//     if (j == 1 || i == j || j == n) {
//       ans += "* ";
//     } else {
//       ans += "  ";
//     }
//     // console.log(ans)
//   }
//   console.log(ans);
// }

//check palindrome
// var str = "naman";
// var rev = "";
// let ans = "no";
// for (let i = str.length - 1; i >= 0; i--) {
//   rev = rev + str[i];
// }
// if (rev === str) {
//   ans = "yes";
// }
// console.log(ans);

