

//ARRAY 2D TRAVERSE 
/*
    [1,2,3],     [7,4,1,8,5,2,9,6,9]
    [4,5,6],     
    [7,8,9]

*/
// 
// var arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

// for(let j = 0; j<arr.length; j++){
//     for(let i = arr[0].length-1;i>=0;i--){
//        console.log(arr[i][j])
    
//    }
// }


// var arr = [
// [0, 0, 0, 0]
// [1, 1, 1, 1],
// [2, 2, 2, 2],
// [3, 3, 3, 3]
// [4, 4, 4, 4],
// ];
// for(let i = 0; i<arr.length; i++){
//     for(let j= 0; j<arr[0].length; j++){
//         console.log(arr[j][i])
    

//     }
// }
//

var arr = [
    [1,2,3,4],
    [5,6,7,8],
    [1,2,3,4],
    [5,6,7,8]
];

 for(let j = 0; j<arr.length; j++){
        for(let i = arr[0].length-1;i>=0;i--){
           console.log(arr[i][j])
          
        }
    }



//ZIGZAG ARRAY
//  var arr = [
// [ 4, 7, 1, 1, 7],
// [8, 9, 9, 6, 1],
// [6, 4, 9, 5, 1],
// [7, 7, 4, 7, 7],
// [8, 6, 2, 5, 5]
// ];
// for(let i = 0; i<arr.length; i++){
//     if(i%2!==0){
//         for(let j = 0; j<arr[0].length; j++){
//          console.log(arr[i][j])
//         }
//      }
//     else
//     {
//         for(let j=arr[0].length-1; j>=0;j--){
//         console.log(arr[i][j])
//         }
    
//     }

// }

// ROTATE OF 90 DEGEREEE..
// var arr = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [1,2,3,4],
//     [5,6,7,8]
// ];

// let row = arr.length;
// let col = arr[0].length;
// for(let i=col-1;i>=0;i--){
//  let bag = []
//     for(let j=0;j<row;j++){
//         bag+= arr[j][i] + " "
//     }
//     console.log(bag)
// }
var arr = [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [4, 4, 4, 4]
    ];
    let row = arr.length
    let cols = arr[0].length
     for(let i = 0; i<cols; i++){
             let bag = ""

             for(let j = 0; j<row; j++){
            bag = bag + arr[j][i] + " "
             }
             console.log(bag)
     }

