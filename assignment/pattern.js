//N TRAverse


var arr = [
    [1,2,3],   
    [4,5,6],
    [7,8,9]     
];
var row = arr.length;
var cols = arr[0].length
var bag = ""
for(let i = row-1; i>=0;i--){
bag+= arr[i][0] + " "
}
for(let i= 1; i<row; i++){
    bag+= arr[i][i] + " "
}
for(let i = row-2; i>=0; i--){
    bag+= arr[i][cols-1] + " "
}
// console.log(bag);

//Z TRAVERSE

var arr = [
    [1,2,3],   
    [4,5,6],
    [7,8,9]     
];
var row = arr.length;
var cols = arr[0].length
var bag = ""
for(let i = 0; i<cols; i++){
bag+= arr[0][i]
}
for(let i = 1, j = 1; i<row, j>=0; i++, j--){
    bag+= arr[i][j]
}

for(let i = 1; i<cols; i++){
    bag+= arr[2][i]
}

//console.log(bag)


var arr = [
    [1,2,3,4],               // [5 1 5 1]
    [5,6,7,8],               // [6 2 6 2]
    [1,2,3,4],              // [7 3 7 3]
    [5,6,7,8]              // [8 4 8 4]
                    
];

 for(let j = 0; j<arr.length; j++){
         let bag = ""
        for(let i = arr[0].length-1;i>=0;i--){
                bag+= arr[i][j] + " "
          
          
        }
       // console.log(bag)
    }

   // check prime number in 2d array 
    var arr = [     [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9]
            ]
            let count = 0
            for(let i = 0; i<arr.length; i++){
                    for(let j = 0; j<arr[0].length; j++){
                            if(arr[i][j]% i ===0){
                            count++;
                       }
                    }
             }
           // console.log(count)



var arr = [
    [1,2,3,4],
    [5,6,7,8],
    [2,6,9,3],
    [9,6,2,3]
]
    var row = arr.length
var cols = arr[0].length
for(let i = 0; i<arr.length; i++){
    if(i%2!==0){
        for(let j = 0; j<arr[0].length; j++){
            //console.log(arr[i][j])
        } 
        }
        else{
            for(let j = cols-1; j>=0; j--){
                //console.log(arr[i][j])
            }
        }
    }

    var arr = [
        [1,2,3,4],              //3269269387651234
        [5,6,7,8],          
        [2,6,9,3],
        [9,6,2,3]
    ] 
var row = arr.length
var cols = arr[0].length
for(let i = cols-1; i>=0; i--){
    // console.log(arr[row-1][j])
   if(i%2==0){
       for(let j = 0; j<row; j++){
           //console.log(arr[i][j])
       }
   }
   else{
       for(let j = cols-1; j>=0; j--){
          // console.log(arr[i][j])
       }
   }
    
}
var arr = [
    [1,4,6,4],              // 1 5 2
    [5,2,3,8],              //4 2 9
    [ 2,9,4,2]              // 6 3 4
]                               // 4 8 2
let row = arr.length
let cols= arr[0].length
for(let i = 0; i<cols; i++){
    var bag = ""
    for(let j = 0; j<row; j++){
            bag = bag + arr[j][i] + " "
    }
    console.log(bag)
}

