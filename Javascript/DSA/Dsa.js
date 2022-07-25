// const arr = [1,2,3,4]
// arr.push(5)
// console.log(arr)
// var array =[1,2,3,4]
// array.push(5)
// console.log(array)
// let arrays = [1,2,3,4]
// arrays.push(6)
// console.log(arrays)

// const str = ['priya', 'kumari', 'amar','jeet']
// str.push('kumar')
// console.log(str)

// var data = [1, 2, 3, 4, 5]
// var even = 0;
// var odd = 0;

// for (i = 0; i < data.length; i++) {
//   if (i % 2 != 0) {
//     even += data[i] * 3;
//   } else {
//     odd += data[i] * 2;
//   }
// }
// console.log(even + odd);
// var arr = [1,2,3,4,5]
// var even = 0
// var odd= 0
// for(let i = 0; i<arr.length; i++){
//         if(i%2==0){
//                 even+= arr[i]*2
//         }else{
//                 odd+= arr[i]*3
//         }
// }
// console.log(even+odd)
// let arr = [13, 89, 81, 66, 81, 63, 71, 76, 73, 81];
// let target = 65;

// //   let arr1 = arr.sort(function(a,b) {  a-b })
// // console.log(arr)

// function firstGreater(arr, target) {
//   let arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > target) {
//       arr1.push(arr[i]);
//     }
//   }
//   //console.log(Math.min(...arr1));

//   let ans =-1
//   let min = Infinity
//   for(let i=0;i<arr1.length;i++){
//           if(arr1[i]<min){
//                   min = arr1[i]
//                   ans = arr1[i]
//           }
//   }

//    console.log(ans)
// }

//firstGreater(arr, target);
// let ans = -1
// let min = Infinity
// for(let i=0;i<arr.length;i++){
//         if(arr[i]>target&&arr[i]<min){
// min = arr[i]
// ans = arr[i]
//         }
// }
// console.log(ans)

var item = "abcxyz"

function divideArray(item) {
  var len = item.length;
  var arr1 = "";
  var arr2 = "";
  if (len % 2 == 0) {
    for (i = len - 1; i >= 0; i--) {
      if (i < len / 2) {
        arr1 += item[i];
      } else {
        arr2 += item[i];
      }
    }
  } else {
    for (i = len - 1; i >= 0; i--) {
      if (i < len / 2 - 1) {
        arr1 += item[i];
      } else if (i > len / 2) {
        arr2 += item[i];
      }
    }
  }

  if (item.length % 2 == 0) {
    console.log(arr1 + arr2);
  } else {
    console.log(arr1 + item[Math.floor(len / 2)] + arr2);
  }
}

function runProgram(input) {
  var data = input;
  divideArray(data);
  

}
