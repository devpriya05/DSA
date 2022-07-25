// let arr= [13, 89, 81, 66, 81, 63, 71, 76, 73, 81]
// let target = 65


//   let arr1 = arr.sort(function(a,b) {  a-b })
// console.log(arr)

// function firstGreater(arr,target){
//         let arr1 =[]
//         for(let i=0;i<arr.length;i++ ){
//                 if(arr[i]>target){
//                         arr1.push(arr[i])
//                 }
//         }
//         // console.log(Math.min(...arr1))

// let ans =-1
// let min = Infinity
// for(let i=0;i<arr1.length;i++){
//         if(arr1[i]<min){
//                 min = arr1[i]
//                 ans = arr1[i]
//         }
// }

// // console.log(ans)
// }


// firstGreater(arr,target)
// /let ans = -1
// let min = Infinity
// for(let i=0;i<arr.length;i++){
//         if(arr[i]>target&&arr[i]<min){
// min = arr[i]
// ans = arr[i]
//         }
// }
// console.log(ans)


let array = [
[1,2,3,4,3,2,5],
[5,6,7,7,5,0,9],
[9,1,3,8,4,3,9],
[1,2,3,4,5,0,6],
[1,2,3,4,5,6,5],
[7,8,9,1,2,6,5]
]


let top =0
let left =0
let bottom = array.length-1
let right = array[0].length

let count = 0
let result = 6*7
let bag =""

while(count<result){
for(let i=top;i<=bottom && count<result;i++){
bag+= array[i][left] + " "
count++

}
left++
for(let i=left;i<=right && count<result;i++){
        bag+= array[bottom][i] + " "
        count++
}
bottom--
for(let i=bottom;i>=top && count<result;i--){
        bag+= array[i][right] + " "
        count++
}
right--
for(let i=right;i>=left && count<result;i--){
        bag+= array[top][i] + " "
        count++
}
top++
}
console.log(bag)

// var arr = [
//         [1,2,3,4],
//         [7,8,9,1],
//         [8,9,8,2],
        
// ]
// let top = 0;
// let left = 0;
// let bottom = arr.length-1
// let right = arr[0].length-1
// let bag = ""
// let count = 0
// let res = 5*5
// while(count<res){
// for(let i = top; i<=bottom && count<res; i++){
//         bag = bag + arr[i][left] + " "
//         count++
// }
// left++
// for(let i = left; i<=right && count<res; i++){
//         bag+= arr[bottom][i] + " "
//         count++
// }
// bottom--
// for(let i = bottom; i>=0 && count<res; i--){
//         bag+= arr[i][right] + " "
//         count++
// }
// right--
// for(let i = right; i>=left  && count<res; i--){
//         bag+= arr[top][i] + " "
//         count++
// }
// top++
// }
// console.log(bag)



