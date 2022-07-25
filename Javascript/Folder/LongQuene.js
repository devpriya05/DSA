var arr = [1, 2, 4, 3, 5,8]
function longQuene(arr){


var count = 1
for(let i = 1; i<arr.length; i++){
    if(arr[i] >arr[i+1]){
        count++
    }
}
console.log(count)
}
longQuene(arr)