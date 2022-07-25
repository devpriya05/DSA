var fullName = "priya";
var age = 75;
var district = "samastipur";
var state = "bihar";
var country = "India";

// var obj1 = { fullName, age, district: "patna" };
// var obj2 = { district, state, country };
// var bankDetails = Object.assign(obj1, obj2);
// var newBankDetails = { ...obj1, ...obj2, state: "up" };
// console.log(newBankDetails);

var names = "age";
var newObj = { fullName, age, district, state, country };
// newObj[names] = "motki";
// newObj = { ...newObj, fullName: "Guriya" };
// console.log(newObj, "newObj");

var obj = {
  1: 1,
  2: 1,
  3: 1,
  4: 1,
  5: 1,
  6: 1,
  7: 1,
  8: 1,
  9: 1,
  10: 1,
};

// for (let key in obj) {
//   obj[key] = +key;
// }
// console.log(obj);

var obj = {
  1: 1,
  2: 1,
  3: 1,
  4: 1,
  5: 1,
  6: 1,
  7: 1,
  8: 1,
  9: 1,
  10: 1,
};

for (let key in obj) {
  obj[key] = +key * key;
}
// console.log(obj);

// var char = {};
// let start = 97;
// let end = 97 + 25;
// let count = 1;

// while (start <= end) {
//   let key = String.fromCharCode(start);
//   char[key] = count;
//   start++;
//   count++;
// }

// console.log(char);

// var char2 = {};
// var starts = 97;
// var ends = 97 + 25;
// let counts = 0;
// for (let i = starts; i <= ends; i++) {
//   let key = String.fromCharCode(starts);
//   starts++;
//   counts++;
//   char2[key] = counts;
// }
// console.log(char2);

// function getSum(charObj, str) {
//   let sum = 0;
//   for (let i = 0; i < str.length; i++) {
//     sum += charObj[str[i]];
//   }
//   return console.log(sum);
// }

// getSum(char2, "priya");

// let char3 = {};
// let starting = 97;
// let ending = 97 + 25;
// let counting = 0;
// for (let i = starting; i <= ending; i++) {
//   let keys = String.fromCharCode(starting);
//   starting++;
//   counting++;
//   char3[keys] = counting
// }
//  console.log(char3)
// function find_sum(object, str){
//   var sum = 0;
//   for(let i = 0; i<str.length; i++){
//     sum += object[str[i]]

//   }
//   return console.log(sum)
// }
// find_sum(char3, "priya")


// var char = {}
// var start = 65;
// var end = 65 + 25;
// var count = 0;
// for(let i = start; i<=end; i++){
// let key = String.fromCharCode(start)
// start++
// count++
//   char[key] = count
// }
//console.log(char)

// function find_sum(obj, str){
//   var sum = 0;
//   for(let i = 0; i<str.length; i++){
//     sum+= obj[str[i]]
//   }
//  return  console.log(sum)
// }
// find_sum(char, 'AMARJEET')



