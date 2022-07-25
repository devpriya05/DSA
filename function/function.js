var x;
//console.log(x);
var y;
y = null;
//console.log(y);

function getProduct(i) {
  var product = ["earphn", "head", "tv", "mike", "freeze"];
  if (i < 0 || i > product.length - 1) {
    return null;
  }
  return product[i];
}
var x = getProduct(2);
if (x == null) {
  console.log("not found");
} else {
  console.log("my product is", x);
}
var arr1 = [1,2,3,4,5,-6,7,8]
function findAverage(arr){
       
        var sum = 0
        for(let i = 0; i<arr.length; i++){
                sum = sum + arr[i]
        }
        console.log(sum/arr.length)
}
findAverage(arr1)