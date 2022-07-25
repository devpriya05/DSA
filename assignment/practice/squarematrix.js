var arr = [
        [1,2,3,5],
        [3,2,1,4],        // square matrix only
        [8,6,2,7],
        [4,5,6,8]
]


//function spiralTraversal(arr){
var top = 0;
 var left = 0
 var right= 3;
 var bottom = 3
 var bag = ""
 for(let i = top; i<=bottom; i++){
         bag = bag + (arr[i][left]) + " "
        
 }
 left++
 for(let i = left; i<=right; i++){
        bag = bag + (arr[bottom][i]) + " "
 }
 bottom--
 for(let i = bottom; i>=top; i--){
         bag = bag + (arr[i][right]) + " "
 }
 right--
 for(let i = right; i>=left; i--){
         bag = bag + (arr[top][i]) + " "
 }
 top++
 for(let i = top; i<=bottom; i++){
        bag = bag + (arr[i][left]) + " "
}
left++
for(let i = left; i<=right; i++){
        bag = bag + (arr[bottom][i]) + " "
}
bottom--
for(let i = bottom; i>=top; i--){
        bag = bag + (arr[i][right]) + " "
}
right--
for(let i = right; i>=left; i--){
        bag = bag + (arr[top][i]) + " "
}
top++
//console.log(bag)



//spiralTraversal()

// rectangular matrix 

var arr = [
        [1,2,3,4],
        [5,6,7,8],
        [9,1,4,3]
]
var top = 0; 
var left = 0;
var bottom = arr.length-1
var right = arr[0].length-1
for(let i = bottom; i>=top; i--){
        console.log(arr[i][left])
}
left++
for(let i = left; i<=right; i++){
        console.log(arr[top][i])
}
top--
for(let i = top; i<=bottom; i++){
        console.log(arr[right][i])
}
right++