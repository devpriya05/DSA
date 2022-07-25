// var arr = ['ram','shyam','sita','ram','mohan','shyam']
// var unique = {}
// for(let i = 0;i<arr.length; i++){
//   var present = arr[i]
//   unique[present] = 1
// }
// console.log(unique)

// var arr = ["ram", "shyam", "sita", "ram", "mohan", "shyam"];
// var result = [];
// for (let i = 0; i < arr.length; i++) {
//   if (!result.includes(arr[i])) {
//     result.push(arr[i]);
//   }
// }
// console.log(result);

// var arr = ["lily", "sily", "jily", "pily", "mily", "jily", "pily", "sily"];
// var res = [];
// for (let i = 0; i < arr.length; i++) {
//   if (!res.includes(arr[i])) {
//     res.push(arr[i]);
//   }
// }
// console.log(res);

// var arr = ["pagal", "gadha", "ullu", "gawar", "pagal", "gadha"];
// var res = [];
// for (let i = 0; i < arr.length; i++) {
//   if (!res.includes(arr[i])) {
//     res.push(arr[i]);
//   }
// }
// console.log(res)

var arr = [
  { names: "Priya", age: 20 },
  { names: "Priya", age: 200 },
  { names: "Amarjeet", age: 210 },
  { names: "Amarjeet", age: 202 },
  { names: "Ujjawal", age: 203 },
  { names: "Ujjawal", age: 204 },
  { names: "Riya", age: 205 },
  { names: "Riya", age: 206 },
];
// var res = [];
// for (let i = 0; i < arr.length; i= i + 2) {
//   for(let j = i; j<arr.length; j++){
//     if (!res.includes(arr[i])) {
//       res.push(arr[i]);
//     }
//   }
  
// }

// console.log(res);

// var x = arr.names
// console.log(x)
 var str = "amarjeet"
var diary = {}
for(let i = 0; i<str.length; i++){
  var char = str[i]

  if(diary[char]==undefined){
    diary[char]= 1
  }else{
    diary[char]= diary[char]+ 1
  }
}
for(var key in diary){
  console.log(key, " :", diary[key])
}
