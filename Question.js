var arr = ["12", "124", "1265", "12564"];

// for (let i = 0; i < arr.length; i++) {
//   var sum = 0;
//   for (let j = 0; j < arr[i].length; j++) {
//           sum = sum +  +arr[i][j]
//         }
//         console.log(sum)

// }

for (let i = 0; i < arr.length; i++) {
  var sum = 0;
  for (let j = 0; j < arr[i].length; j++) {
    sum = sum + +arr[i][j];
  }
  // console.log(sum)
}

var arr = ["1234", "56", "123", "789", "456"];
for (let i = 0; i < arr.length; i++) {
  var sum = 0;
  for (let j = 0; j < arr[i].length; j++) {
    sum = sum + +arr[i][j];
  }
  // console.log(sum)
}
var arr = ["1234", "56", "123", "789", "456", "1236598", "456", "1203"];
for (let i = 0; i < arr.length; i++) {
  var sum = 0;
  for (let j = 0; j < arr[i].length; j++) {
    sum = sum + +arr[i][j];
  }
  //console.log(sum)
}

//console.log("************")
var arr = ["123", "456", "6987", "45698", "123587478965"];
for (let i = 0; i < arr.length; i++) {
  var sum = 0;
  for (let j = 0; j < arr[i].length; j++) {
    sum = sum + +arr[i][j];
  }
 // console.log(sum)
}

//console.log("************")
var arr = [
  "123",
  "456",
  "6987",
  "45698",
  "123587478965",
  "15697586665",
  "9999",
];
for (let i = 0; i < arr.length; i++) {
  var sum = 0;
  for (let j = 0; j < arr[i].length; j++) {
    sum = sum + +arr[i][j];
  }
  //console.log(sum)
}
//console.log("**************")

var arr = [3, 2, 5, 9, 8, 10, 16, 15];
//var sum = 0
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 3 === 0) {
    arr[i] = arr[i] + 2;
  } else {
    arr[i] = arr[i] + 1;
  }
}
//console.log(arr);

var arr = [3, 2, 5, 9, 8, 10, 16, 15];
var sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 3) {
    sum += 2;
  } else {
    sum += 1;
  }
}
//console.log(sum);

var arr = [
  "123",
  "456",
  "6987",
  "45698"
]
for(let i = 0; i<arr.length; i++){
  var sum = 0;
  for(let j = 0; j<arr[i].length; j++){
    sum+=  +arr[i][j]
  }
  //console.log(sum)
}
// console.log("----------")
var arr = ["123", "456", "6987", "45698", "123587478965"];
for (let i = 0; i < arr.length; i++) {
  var sum = 0;
  for (let j = 0; j < arr[i].length; j++) {
    sum = sum + +arr[i][j];
  }
  //console.log(sum)
}
var arr = []
var str = ""
for(let i = 1; i<=10; i++){
  str+= i
  arr.push(str)
}
//console.log(arr)



var arr = ["123", "456", "6987", "45698",]
var sum = 0
for(let i = 0; i<arr.length; i++){
  for(let j = 0; j<arr[0].length; j++){
    sum  = sum +  +arr[i][j]
  }
  //console.log(sum)
}

var arr = ['123','456','4532','78954']
var sum = 0
for(let i = 0; i<arr.length; i++){
  for(let j = 0; j<arr[0].length; j++){
     sum = sum + +arr[i][j]
  }
  //console.log(sum)
}
var arr = []
var str = ""
for(let i = 1; i<=10;i++){
str+= i
arr.push(str)
}
//console.log(arr)
var arr = []
var str = ""
for(let i = 1; i<=10; i++){
  if(i%2==0){
    str+= i
    arr.push(str)
  }
}
//console.log(arr)

var arr = []
var str = ""
for(let i = 1; i<=10; i++){
  if(i%2==0){
    str+=  "*"
    arr.push(str)
  } else{
    str+= "#"
    arr.push(str)
  }
}
//console.log(arr)


var arr = [0,0,1,1,2,2,0,2,1,0]
var zero = 0
var one = 0
var two = 0
for(let i = 0; i<arr.length; i++){
  if(arr[i]===0){
    zero++
  } if (arr[i]===1){
    one++
  }if(arr[i]===2){
    two++
  }

  }
  //console.log(zero + " " + one + " " +  two )
  //console.log(zero,one, two)





  var arr1 = [0,0,1,1,2,2,0,2,1,0]
  function findZeroOneTwo(arr){
    var zero = 0
    var one = 0;
    var two = 0;
    for(let i = 0; i<arr.length; i++){
      if(arr[i]===0){
        zero++
      }
      if(arr[i]===1){
        one++
      }if(arr[i]===2){
        two++
      }
    }
    return {zero,one,two}
  }
   var n = findZeroOneTwo(arr1)
 console.log(n.zero) 
 console.log(n.one)
console.log(n.two)


