// let str = "110001110"
// let zero = 0;
// let one = 0;
// for(let i = 0; i<str.length; i++){
//     if(str[i]===0){
//         zero++;

//     }
//     else{
//         one++;
//     }
// }
// if(zero<one){
// console.log("tom")
//     }
//     else if (zero>one){
//         console.group("jeryy")
//     }
//     else{
//         console.log("not found")
//     }


    

// var arr = [1,2,3,5]
// var res = 0;
// for(let i = 0; i<arr.length; i++){
//  var sum = (arr.length+1)*(arr.length+2)/2
//      res = res + arr[i]
//         var ans = (sum-res)
//     }

//    console.log(ans)

var arr = [
    [1, 2, 3, 4]
    [0, 5, 6, 1]
    [9, 3, 0, 8]
    ]
    
    var sum1 = 0
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j < arr[i].length;j++){
            sum1+= mat[i][j]+ " "
        }
    }
    console.log(sum1)