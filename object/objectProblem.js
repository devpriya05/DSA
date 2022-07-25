// var char = {};
// var start = 65;
// var end = 65 + 25;
// var count = 0;
// for (let i = start; i <= end; i++) {
//   let key = String.fromCharCode(start);
//   start++;
//   count++;
//   char[key] = count;
// }
// console.log(char);
// function find_sum(obj, str){
//         var sum = 0;
//         for(let i = 0; i<str.length; i++){
//                 sum+= obj[str[i]]
//         }
//         return console.log(sum)
// }
// find_sum(char, "UJJAWAL")

//   var char = {};
//   var start = 65;
//   var end = 65 + 25;
//   var count = 0;
//   for (let i = start; i <= end; i++) {
//     let key = String.fromCharCode(start);
//     start++;
//     count++;
//     char[key] = count;
//   } console.log(char);

// function find_sum(obj, str) {
//   var sum = 0;
//   for (let i = 0; i < str.length; i++) {
//     sum += obj[str[i]];
//   }
//   return console.log(sum);
// }
// find_sum(char, "UJJAWAL");

// var char = {}
// var start = 97;
// var end = 97 + 25;
// var count = 0;
// for(let  i = start; i<=end; i++){
//         let key = String.fromCharCode(start)
//         start++
//         count++
//         char[key] = count
// }
// console.log(char)
// function sumOf_char(obj, str){
//         var sum = 0;
//         for(let i = 0; i<str.length; i++){
//                 sum+= obj[str[i]]
//         }
//         return console.log(sum)
// }
// sumOf_char(char, "priya")
// function find_ascii() {
//   var obj = {};
//   var first = 97;
//   var last = 97 + 25;
//   var count = 0;
//   for (let i = first; i <= last; i++) {
//     let key = String.fromCharCode(first);
//     first++;
//     count++;
//     obj[key] = count;
//   }
//   return obj;
// }
// var  ascii = find_ascii();
// function ascii_value_sum(object, string) {
//   var sum = 0;
//   for (let i = 0; i < string.length; i++) {
//     sum = sum + object[string[i]];
//   }
//   return console.log(sum);
// }
// ascii_value_sum(ascii, "amar");

// function find_ascii_value() {
//   var char = {};
//   var start = 65;
//   var end = 65 + 25;
//   var count = 0;
//   for (let i = start; i <= end; i++) {
//     let key = String.fromCharCode(start);
//     start++;
//     count++;
//     char[key] = count;
//   }
//   return char;
// }
// var ascii= find_ascii_value();
// function ascii_value_sum(object, string) {
//   var sum = 0;
//   for (let i = 0; i < string.length; i++) {
//     sum = sum +  object[string[i]];
//   }

//   return console.log(sum);
// }
// ascii_value_sum(ascii, "AMAR");

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
  obj[key] = +key;
}
//console.log(obj);

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
//console.log(obj);

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
var sum = 0
for (let key in obj) {
        obj[key] = +key
}
//console.log(obj)

