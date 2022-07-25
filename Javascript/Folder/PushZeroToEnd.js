var arr = [0,1,2,3,0]
var arr1= [0, 0, 1, 2, 3]
function pushZeroToEnd(arr){
var res = ""
var countZero = ""
for(let i = 0; i<arr.length; i++){
    if(arr[i]>0){
    res+= arr[i] + " "
    }else{
        countZero+= arr[i] + " "

    }
}
console.log(res + countZero)

}

pushZeroToEnd(arr1)
