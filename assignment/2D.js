
var arr1 = [1, 2, 4, 6, 8, 5, 6, 3];
var arr2 = [1, 2, 4, 6, 8, 5, 6];
var mid = Math.floor(arr1.length / 2);
//var mid = Math.floor(arr2.length/2)
//console.log(mid)
var first = 0;
for (let i = 0; i < mid; i++) {
  first = first + arr1[i];
}
var last = 0;
for (let i = mid; i < arr1.length; i++) {
  last = last + arr1[i];
}

if (first > last) {
  console.log("first is bigger then last");
} else {
  console.log("last is bigger then first");
}

var arr2 = [12, 16, 14, 6, 8, 5, 6];
var mid = Math.floor(arr2.length / 2);
console.log(mid);

var first = 0;
for (let i = 0; i < mid; i++) {
  first = first + arr2[i];
}
//console.log(sum)
var last = 0;
for (let i = mid; i < arr2.length - 1; i++) {
  last = last + arr2[i];
}
//console.log(sum2)
if (first > last) {
  console.log("first is bigger then last");
} else {
  console.log("last is bigger then first");
}

// function solve_me(arr){

// var mid = Math.floor(arr2.length/2)

// }


