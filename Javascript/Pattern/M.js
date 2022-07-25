//Print M
// var n =11;
// var mid = Math.floor(n / 2);
// for (let i = 0; i < n; i++) {
//   let ans = "";
//   for (let j = 0; j < n; j++) {
//     if (
//       j === 0 ||
//       j == n - 1 ||
//        (i + j === n - 1 && i <= mid) ||
//        (i === j && i <= mid)
//     ) {
//       ans += "* ";
//     } else {
//       ans += "  ";
//     }
//   }
//   console.log(ans);
// }
//console.log("---------------------------")
// PRINT W
// var n =11;
// var mid = Math.floor(n / 2);
// for (let i = 0; i < n; i++) {
//   let ans = "";
//   for (let j = 0; j < n; j++) {
//     if (
//       j === 0 ||
//       j == n - 1 ||
//       (i + j === n - 1 && i >= mid) ||
//       (i === j && i >= mid)
//     ) {
//       ans += "* ";
//     } else {
//       ans += "  ";
//     }
//   }
//  // console.log(ans);
// }
// var n = 5
// var mid = Math.floor(n / 2);
// for(let i = 0; i<n; i++){
//   let ans = ""
//   for(let j = 0; j<n; j++){
//     if (
//       j === 0 ||
//       j == n - 1 ||
//        (i + j === n - 1 && i <= mid) ||
//        (i === j && i <= mid)
//     ) {
//       ans += "* ";
//     } else {
//       ans += "  ";
//     }
//   }
//   console.log(ans);
// }











// V print
// var num = 4;
// let count = 0;
// for (let i = 0; i < num; i++) {
//   let ans = "";
//   let right = num * 2;
//   for (let j = 0; j < num; j++) {
//     if (i === j) {
//       ans += "* ";
//     } else ans += "  ";
//     count++;
//   }
//   for (let j = num + 1; j < right; j++) {
//     if (i + j === right - 1) {
//       ans += "* ";
//     } else ans += "  ";
//     count++;
//   }
//  // console.log(ans);
// }

// var n = 5

// //console.log(mid)

// for(let i = 0; i<n; i++){
//   let res = " "
//   for(let j = 0; j<n;j++){
//     if(i-j/2==0 || i+j /2==n-1){
//     res+= "* "
//   }else{
//     res+= "  "
//   }
 
// } 
// console.log(res)
// }

// var n = 5
// var mid = Math.ceil(n/2)
// //console.log(mid)

// for(let i = n-1; i>=0; i--){
//   let res = " "
//   for(let j = n-1; j>=0;j--){
//     if(i-j/2==0 || i+j /2==n-1){
//     res+= "* "
//   }else{
//     res+= "  "
//   }
 
// } 
// console.log(res)
// }

// v print
var n = 5
var mid = Math.ceil(n/2)
//console.log(mid)

for(let i = n; i>=0; i--){
  let res = " "
  for(let j = n-1; j>=0;j--){
    if(j-i/2==0 || j+i /2==n-1){
    res+= "* "
  }else{
    res+= "  "
  }
 
} 
//console.log(res)
}

var n = 5
//var mid = Math.ceil(n/2)


for(let i = 0; i<n; i++){
  let res = " "
  for(let j = 0; j<n;j++){
    if(j-i/2==0 || j+i /2==n-1){
    res+= "* "
  }else{
    res+= "  "
  }
 
} 
console.log(res)
}


// PRINT T
var n = 5
 var mid = Math.floor(n/2)
 //console.log(mid)
 for(let i = 0; i<n; i++){
  let res = ""
  for(let j = 0; j<n; j++){
    if(i==0 ||j==mid){
      res+= "* "
  } else{
    res+= "  "
  }
  }
  //console.log(res)
 }
// PRINT Z
var n = 5
for(let i = 0; i<n; i++){
  let res = ""
  for(let j = 0; j<n; j++){
    if(i==0||i+j==n-1||i==n-1){
      res+= "* "
    }
    else{
      res+= "  "
    }
  }
  //console.log(res)
}
// print S
var n = 5
for(let i = 0; i<n; i++){
  let res = ""
  for(let j = 0; j<n; j++){
    if(i==0||i==j||i==n-1){
      res+= "* "
    }
    else{
      res+= "  "
    }
  }
  //console.log(res)
}

// var n = 5;
// let mid = Math.ceil(n/2)
// for(let i = 0; i<n;i++){
//   let res = ""
//   for(let j = 0; j<n;j++){
// if(i==)
//     res+= "* "
//   }
 
 
//   console.log(res)
// }
