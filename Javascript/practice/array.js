// var arr = [1, 2, 3, 4]
// var even = 0
// var odd = 0

// for(let i = 0; i<arr.length; i++){
//         if(arr[i]%2==0){
// even += arr[i]
//         }
//         else {
//                 odd+= arr[i]
//         }

// }
// var sum = (odd*even)
// console.log(sum)

// var arr = [
//         [1, 2, 3],    // 741852963
//         [4, 5, 6],
//         [7, 8, 9]
// ]

// var arr = [
//         [1,2,3,4],
//         [5,6,7,8],
//         [1,2,3,4],
//         [5,6,7,8]
//     ];

//      for(let j = 0; j<arr.length; j++){
//              let bag = ""
//             for(let i = arr[0].length-1;i>=0;i--){
//                bag = bag + arr[i][j] + " "

//             }
//             console.log(bag)
//         }

//         var age = 50;
//         if(age>=60){
//                 console.log("senior citizen")

//         }
//         else{
//                 console.log("not a senior citzen")
//         }

// var str = "AmanZ";
// var upper = 0;
// var lower = 0;
// for (let i = 0; i < str.length; i++) {
//   let up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   let low = "abcdefghijklmnopqrstuvwxyz";
//   for (let j = 0; j < up.length; j++) {
//     if (str[i] === up[j]) {
//       upper++;
//     } 
//     else if (str[i]===low[j])
//     {
//       lower++;
//     }
//   }
// }
// console.log(upper);
// console.log(lower);
// console.log(5*lower + 3*upper)


// var n = 5;
// for(let i = 1; i<=n; i++){
//         if(i%2===0){
//                 console.log("#")
//         }
//         else{
//                 console.log("*****")
//         }
// }

// var arr = [     [1, 2, 3],
//                 [4, 5, 6],
//                 [7, 8, 9]
//         ]
//         let count = 0
//         for(let i = 0; i<arr.length; i++){
//                 for(let j = 0; j<arr[0].length; j++){
//                         if(arr[i][j]% i ===0){
//                         count++;
//                    }
//                 }
//          }
//         console.log(count)

var arr = [
        [1, 2, 3, 4 ],
        [5, 6, 7, 8 ],
        [9, 10, 11, 12]

]
let row = arr.length;
let cols = arr[0].length;

var bag = ""
for(let i = row-1; i>=0;i--){
         bag+= arr[i][0] + " "
}
//console.log(bag)
for(let i = 1; i<cols; i++){
        bag+= arr[0][i] + " "
}
//console.log(bag)
for(let i = 1; i<row; i++){
        bag+= arr[i][3] + " "
}
console.log(bag)
// for(let i= cols-1; i>=1; i++){
//         bag+= arr[i][row-1]
// }
// console.log(bag)




// var arr = [0, 1, 1, 1, 1]
// var sum = 0;
// for(let i = 0; i<=arr.length; i++){
//         if(arr[i]===1){
//                sum = sum + i+1
             
//         }
// }
// console.log(sum)
        

// var str = "ankush"
// var vowel = 0;
// var consonant= 0
// for(let i = 0; i<str.length; i++){

// if(str[i]==="a"|| str[i]=== "e"|| str[i]==="i"|| str[i]==="o"||
//  str[i]==="u"){
//         vowel++;
//  }else{
//          consonant++
//  }
// }
// var equation = (5*2 + 7*4)
// console.log(vowel)
// console.log(consonant)
// console.log(equation)



//BORDERLESS SUM
var arr =  [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
        ]
var n = arr.length; 
var m = arr[0].length
var sum = 0
for(let i = 0; i<m; i++){
        for(let j = 0; j<n; j++){
                if(i!==0 && i!==n-1 && j!==0 && j!==m-1){
                        sum = sum + arr[i][j]
                       
                 }
                
          }
        }
       

console.log(sum)