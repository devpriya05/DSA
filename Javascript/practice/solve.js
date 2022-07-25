var arr = [];
var str = "";
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    str += i;
    arr.push(str);
  }
}
//console.log(arr)
var arr = [];
var str = "";
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    str += i;
    arr.push(str);
  }
}
//console.log(arr)
var arr = [];
var str = "";
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    str += "$";
    arr.push(str);
  } else {
    str += "@";
    arr.push(str);
  }
}
//console.log(arr)
var arr = [1, 2, 3, 4, 5];
var str = arr.toString();
var rev = "";
for (let i = str.length - 1; i >= 0; i--) {
  rev += str[i];
}
//console.log(rev);

var num = 971;
var str = num.toString();
var reverse = "";
for (let i = str.length - 1; i >= 0; i--) {
  reverse += str[i];
}
//console.log(reverse);

// var arr = [1,2,3,4,5]
// var sum = 0
// for(let i = 0; i<arr.length; i++){
// sum = sum + arr[i]
// }
// console.log(sum)

function find_ascii() {
  var obj = {};
  var first = 97;
  var last = 97 + 25;
  var count = 0;
  for (let i = first; i <= last; i++) {
    let key = String.fromCharCode(first);
    first++;
    count++;
    obj[key] = count;
  }
  return obj;
}
var ascii = find_ascii();
function ascii_value_sum(object, string) {
  var sum = 0;
  for (let i = 0; i < string.length; i++) {
    sum = sum + object[string[i]];
  }
  return console.log(sum);
}
//ascii_value_sum(ascii, "amar");

function find_ascii_number(){
        var obj = {} 
        var start = 97;
        var end = 97+25
        var count = 0
        for(let i = start; i<=end; i++){
                let key = String.fromCharCode(start)
                start++
                count++
                obj[key] = count
        }
        return(obj)
}


var value = find_ascii_number()
//console.log(value)
function find_word_value(obj, str){
        var sum = 0
        for(let i = 0; i<str.length; i++){
                sum = sum+ obj[str[i]]
        }
        return console.log(sum)
}
find_word_value(value, "amar")
