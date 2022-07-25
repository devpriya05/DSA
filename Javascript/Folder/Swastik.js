// let top =0
// let left =0
// let bottom = array.length-1
// let right = array[0].length
var n = 7;

var mid = Math.ceil(n / 2);
//console.log(mid)
for (let i = 1; i <= n; i++) {
  let res = "";
  for (let j = 1; j <= n; j++) {
    if (j == mid || i==mid){
      res += "* ";
    } else {
      res += "  ";
    }
  }
  console.log(res);
}
