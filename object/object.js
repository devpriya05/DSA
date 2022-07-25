// var user = {
//   name: "Priya kumari",
//   age: 25,
//   gender: "Female",
//   city: "Bihar",
//   hobbies: "coding",
// };
// //console.log(user)

// var user = {
//   name: "Priya kumari",
//   age: 25,
//   gender: "Female",
//   city: "Bihar",
//   hobbies: "coding",
//   name: "Singh priya",
// };
// //console.log(user)

// var data = {
//   name: "priya",
//   age: 19,
//   batch: "Ptweb_07",
//   rollno: "Ptweb_07_001",
//   city: "Bihar",
//   hobbies: ["coding", "farming"],
//   smoking: false,
// };
// //console.log(data)

// // bracket notation
// // console.log(data["name"])
// // console.log(data["age"])
// // console.log(data["city"])
// // console.log(data["hobbies"])
// // dot notatation
// // console.log(data.name)
// // console.log(data.age)
// // console.log(data.city)
// // console.log(data.batch)

// // update the information
// var data = {
//   name: "priya",
//   age: 19,
//   batch: "Ptweb_07",
//   rollno: "Ptweb_07_001",
//   city: "Bihar",
//   hobbies: ["coding", "farming"],
//   smoking: false,
// };

// //bracket
// data["city"] = "patna";
// // dot
// data.age = 20;
// //console.log(data)

// // addd the information
// var data = {
//   name: "priya",
//   age: 19,
//   batch: "Ptweb_07",
//   rollno: "Ptweb_07_001",
//   city: "Bihar",
//   hobbies: ["coding", "farming"],
//   smoking: false,
// };

// data["mobille"] = "98746652112";
// //dot notation
// data.state = "india";
// // console.log(data);

// // HOW WE CAN DELETE THE INFORMATION

// var data = {
//   name: "priya",
//   age: 19,
//   batch: "Ptweb_07",
//   rollno: "Ptweb_07_001",
//   city: "Bihar",
//   hobbies: ["coding", "farming"],
//   smoking: false,
// };
// // bracket
// let s = "smoking";
// // delete data[s];
// // delete data.city;

// var newData = Object.assign(data);

// //console.log(newData)
// var data = {
//   name: "priya",
//   age: 19,
//   batch: "Ptweb_07",
//   rollno: "Ptweb_07_001",
//   city: "Bihar",
//   hobbies: ["coding", "farming"],
//   smoking: false,
// };
// var x = data.hobbies;
// // console.log(x)
// // console.log(x[0])
// // console.log(x[1])

// var user = {
//   name: "priya kumari",
//   name: "priya",
//   age: 19,
//   batch: "Ptweb_07",
//   rollno: "Ptweb_07_001",
//   hobbies: ["coding", "farming"],
//   smoking: false,
//   adress: {
//     village: "Adla",
//     post: "Sarasat",
//     thana: "naubatpur",
//     city: "patna",
//   },
// };
// // console.log(user)
// // console.log(user.adress)
// // console.log(user.adress.city)

// var user = {
//   name: "priya kumari",
//   name: "priya",
//   age: 19,
//   batch: "Ptweb_07",
//   rollno: "Ptweb_07_001",
//   hobbies: ["coding", "farming"],
//   smoking: false,
// };
// for (var i in user) {
//   //console.log(i)
//   //key printed
//   //console.log(user[i])
// }
// for (var i in user) {
//   //onsole.log(i," :", user[i])
// }

// //INBUILT FUNCTION

// var user = {
//   name: "priya kumari",
//   name: "priya",
//   age: 19,
//   batch: "Ptweb_07",
//   rollno: "Ptweb_07_001",
//   hobbies: ["coding", "farming"],
//   smoking: false,
// };
// // console.log(Object.keys(user))
// // console.log(Object.values(user))

// var user = {
//   name: "priya kumari",
//   name: "priya",
//   age: 19,
//   batch: "Ptweb_07",
//   rollno: "Ptweb_07_001",
//   hobbies: ["coding", "farming"],
//   smoking: false,
// };

// for (var k in user) {
//   if (user[k] === 19) {
//     //console.log(k)
//   }
// }

// // given in array find the unique item in array
// var arr = ["A", "B", "C", "D", "A", "B", "F"];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   let isMoreThanOne = true;
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] === arr[j] && i !== j) isMoreThanOne = false;
//   }
//   if (isMoreThanOne) newArr.push(arr[i]);
// }
// console.log(newArr);

// var arr = ["A", "B", "C", "D", "A", "B", "F"];

// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   if (!arr2.includes(arr[i])) {
//     arr2.push(arr[i]);
//   }
// }
// console.log(arr2);

// var str = "aabbccccddddff";
// getTimesOfChar(str);
// function getTimesOfChar(str) {
//   var ans = "";
//   var count = 1;
//   var currentValue = "";

//   for (let i = 0; i < str.length; i++) {
//     currentValue = str[i];
//     if (currentValue === str[i + 1]) {
//       count++;
//     } else {
//       ans += currentValue + count;
//       count = 1;
//     }
//   }
//   return console.log(ans);
// }

// var str2 = "priyaa";
// getNumberOfTimesOfChar(str2);
// function getNumberOfTimesOfChar(str) {
//   let ans = "";
//   let currentValue = "";
//   let count = 1;

//   for (let i = 0; i < str.length; i++) {
//     currentValue = str[i];
//     for (let j = i + 1; j < str.length; j++) {
//       if (str[i] === str[j]) count++ ;
//     }
//     if (!ans.includes(currentValue)) ans += currentValue + count;
//     count = 1;
//   }
//   return console.log(ans);
// }

// var str = ["a", "m", "a", "r", "j", "e", "e", "t"];
// let res = [];
// for (let i = 0; i < str.length; i++) {
//   if (!res.includes(str[i])) {
//     res.push(str[i]);
//   }
// }
//console.log(res);

// var str = ["P", "R", "I", "Y", "A"];
// var result = [];
// for (let i = 0; i < str.length; i++) {
//   if (!result.includes(str[i])) {
//     result.push(str[i]);
//   }
// }
//console.log(result)

// var arr = ["my", "name", "is", "priya", "kumari"];
// var ans = arr.join(" ");
// //console.log(ans)

// var party = ["ramu", "shyam", "rubi", "suraj", "ramu", "rubi", "shyam"];
// var house = {};
// for (let i = 0; i < party.length; i++) {
//   var person = party[i];
//   house[person] = 1;
// }
//console.log(house);

// var party = ["ram", "sita", "gita", "babli", "ram", "gita"];
// var guest = {};
// for (let i = 0; i < party.length; i++) {
//   var person = party[i];
//   guest[person] = 1;
// }
//console.log(guest);

// var names = ["rahul", "ravi", "tina", "lily", "jasmin", "ravi", "tina"];
// var list = {};
// for (let i = 0; i < names.length; i++) {
//   var present = names[i];
//   list[present] = 1;
// }
//console.log(list);

// var str  = "amarjeet"
// var diary = {}
// for(let i = 0; i<str.length; i++){
//   var char = str[i]
//   diary[char] = 1
// }console.log(diary)

// var str  = "amarjeet"
// var diary = {}
// for(let i = 0; i<str.length; i++){
//   var char = str[i]
//   if(diary[char]==undefined){
//     diary[char] = 1
//  }
//  else{
//   diary[char]= diary[char] + 1
//  }
// }
//console.log(diary)

// var str = "amarjeet"
// var diary = {}
// for(let i = 0; i<str.length; i++){
//   var char = str[i]

//   if(diary[char]==undefined){
//     diary[char]= 1
//   }else{
//     diary[char]= diary[char]+ 1
//   }
// }
// for(var key in diary){
//   console.log(key, " :", diary[key])
// }

// var str = 'prriiyyaa'
// var store= {}
// for(let i = 0; i<str.length; i++){
//   var char = str[i]
//   if(store[char]===undefined){
//     store[char] = 1
//   }
//   store[char]= store[char] + 1
// }
// for(let k in store){
// console.log(k," ", store[k])

// }

// var arr = [1,2,2,7,8,8,7,9,8,3,4]
// var num = {}
// for(let i = 0; i<arr.length; i++){
//   var noStore = arr[i]
//   if(num[noStore]===undefined){
//     num[noStore] = 1
//   }
//   else{
//     num[noStore] = num[noStore]+ 1
//   }
// }
// for(let l in num){
//   console.log(l," ", num[l])
// }

// var str = "priyapriya"
// var obj = {}
// for(let i = 0; i<str.length;i++){
//   var char = str[i]
//   if(obj[char]===undefined){
//     obj[char]= 1
//   }else{
//     obj[char] = obj[char]+ 1
//   }
// }
// for(let s in obj){

//   console.log(s, " ",obj[s])
// }

// var str = ["P", "R", "I", "Y", "A","A", "B","Y"];
// var result = [];
// for (let i = 0; i < str.length; i++) {
//   if (!result.includes(str[i])) {
//     result.push(str[i]);
//   }
// }
// console.log(result)

// var arr = [7,8,8,7,2,3,3,6,5]

// var obj = {}
// for(let i = 0; i<arr.length; i++){
//   var num = arr[i]
//   if(obj[num]===undefined){

//     obj[num] = 1
//   }else{
//     obj[num] = obj[num] + 1
//   }
// }
// for(let key in obj){
//   console.log(key, " ",obj[key])
// }

// FIND THE SUM OF ELEMENT WHOSE OCCURENCE IS 2
// var arr = [2,2,7,7,5,5,3,6]
// var obj = {}
// for(let i = 0; i<arr.length; i++){
//   var num = arr[i]
//   if(obj[num]===undefined){
//     obj[num] = 1
//   }
//   else{
//     obj[num] = obj[num] + 1
//   }
// }
// var sum = 0
// for(let k in obj){
//   // console.log(k, " ",obj[k])
//   if(obj[k] === 2){
//     sum = sum + +k
//   }
// }
// console.log(sum)

// FIND THE SUM OF ELEMENT WHOSE OCCURENCE IS 1
// FIND THE UNIQUE ELEMENT IN ARRAY
// var arr = [1,2,2,3,3,5,6,8,8,]
// var obj = {}
// for(let i = 0; i<arr.length; i++){
//   var num = arr[i]
//   if(obj[num]===undefined){
//     obj[num]= 1
//   }else{
//     obj[num] = obj[num] + 1
//   }
// }
// for(let key in obj){
//  if(obj[key] ===1){
//   console.log(key)
//  }
// }

// OBJECT INSIDE OBJECT
// var data = {
//   name: "Priya",
//   grade: "A1",
//   section: "A",
//   marks: {
//     math: 90,
//     science: 75,
//     english: 89,
//   },
// };
// console.log(data);
// console.log(data.marks.math);
// console.log(data.marks.english);
// console.log(data["marks"]["math"]);

// ARRAY INSIDE OBJECT

// var arr = [
//   {firstName : 'Priya' , lastName : 'Singh'},
//   {firstName : 'Ridhhi' , lastName : 'Kasyab'},
//   {firstName : 'Shiddhi' , lastName : 'Arya'},
//   {firstName : 'Rehana' , lastName : 'Kumari'}
// ]
// var obj = {firstName : 'Samridhi' , lastName : 'Kumari'}
// arr.push(obj)

// console.log(arr)
//console.log(arr[0])

// var arr = [
//   { firstName: "Priya", lastName: "Singh" },
//   { firstName: "Ridhhi", lastName: "Kasyab" },
//   { firstName: "Shiddhi", lastName: "Arya" },
//   { firstName: "Rehana", lastName: "Kumari" },
// ];

// // indirect
// var x = arr[1];
// console.log(x.firstName);
// console.log(x.lastName);
// // direct
// console.log(arr[1].firstName)
// console.log(arr[0].firstName)
// console.log(arr[2].firstName)

// var arr = [
//   { firstName: "Priya", lastName: "Singh" },
//   { firstName: "Ridhhi", lastName: "Kasyab" },
//   { firstName: "Shiddhi", lastName: "Arya" },
//   { firstName: "Rehana", lastName: "Kumari" },
// ];
// for(let i = 0; i<arr.length; i++){
//   console.log(arr[i])
//   console.log(arr[i].firstName)
// }
// var data = {
//   name : "Sidddhi",
//   grade : "B",
//   section : "C",
//   marks : {
//     math : 90,
//     science : 89,
//     english : 56
//   },
//   hobbies :["coding", "singing"]
// }
// console.log(data.marks.english)
// console.log(data.hobbies)
// console.log(data.hobbies[1])
// // change
// console.log(data.marks)
// console.log(data.marks.math)
// console.group(data.marks.science)

// var amazon = [
//   { name: "speaker", price: 4500, rating: 4 },
//   { name: "iphone", price: 55000, rating: 5 },
//   { name: "makeup", price: 3300, rating: 4 },
//   { name: "ref", price: 5600, rating: 4 },
//   { name: "earbuds", price: 8900, rating: 3 },
//   { name: "tv", price: 12300, rating: 4 },
// ];
// var product = { name: "mixer", price: 9000, rating: 5};
// amazon.push(product);
// console.log(amazon);
// find all the prouct name
// for (let i = 0; i < amazon.length; i++) {
//   console.log(amazon[i].name);
//   console.log(amazon[i].name, amazon[i].price);
//   console.log(amazon[i].name, amazon[i].rating);
//   console.log(amazon[i].name, amazon[i].price, amazon[i].rating);
// }
//find all the product name whose rating is 4
// for (let i = 0; i < amazon.length; i++) {
// if(amazon[i].rating===4){
//   console.log(amazon[i].name, amazon[i].price)
// }
// }

// find all the product price whose price is greater then 5000
//  for (let i = 0; i < amazon.length; i++) {
//    if(amazon[i].price>5000){
//     console.log(amazon[i].name, amazon[i].price)
//   }
//   }
// find the all the product whose price is less then 5000
// f
// FIND THE ALL PRODUCT WHOSE PRICE IS GREAETER THEN 5000 & LESS THEN 7000
// for (let i = 0; i < amazon.length; i++) {
//   if(amazon[i].price>5000 && amazon[i].price <7000){
//    console.log(amazon[i].name, amazon[i].price)
//  }
//  }
// FIND AVERAGE RATING ALL THE PRODUCT
// var sum = 0

// for (let i = 0; i < amazon.length; i++) {
//  sum = sum + amazon[i].rating

//  }
//  var x = Math.floor(sum/amazon.length)
//  console.log(x)

// var products = ['macbook', 'iphone','tv']
// var price = [74000, 50000, 25000]
// var container = []
// for(let i = 0; i<products.length; i++){
//   console.log(products[i], price[i])
// var packet = {}
// packet.name = products[i]
// packet.price = price[i]
// container.push(packet)
// }
// console.log(container)

/*
a-1
b-2
c-3
d-4
e-5*/
// var n = 5
// var lower = "abcdegfhijklmnoprstuvwxyz"
// var obj = {}
// for(let i = 0; i<n; i++){
//   var char = lower[i]

// obj[char] = i+1 // i
// }
// // console.log(obj)
// for(let key in obj){
//   console.log(key+"-"+obj[key])
// }

// var char2 = {};
// var starts = 97;
// var ends = 97 + 4;
// let counts = 0;
// for (let i = starts; i <= ends; i++) {
//   let key = String.fromCharCode(starts);
//   starts++;
//   counts++;
//   char2[key] = counts;
// }
//console.log(char2);
// for(let k in char2){
//   console.log(k+ "-"+char2[k])
// }

//FUNCTION INSIDE OBJECT....OBJECT METHOD

// var details = {
//         name : 'shubhan',
//         age : 26,
//         print : function(){
//                 console.log('hello')
//         }
// };
// //console.log(details.name)
// details.print();

// var user = {
//         name: 'priya',
//         age: 20,
//         details :function(){
//                 console.log('my name is priya')
//                 console.log('i live in bihar')
//         }
// }
// user.details()
//PASSING FUNCTION PARAMETER......
// var user = {
//         name: 'priya',
//         age: 19,
//         details : function(msg){
//                 console.log(msg)
//         }
// }
// user.details("hello world")

// var user = {
//   name: "priya",
//   age: 19,
//   details: function (name, city) {
//     console.log("my name is", name);
//     console.log("i live in", city)
//   }
// };
// user.details('ram','city');

// var user = {
//   name: "priya",
//   age: 19,
//   sum: function (x, y) {
//     var value = x + y;
//     return value;
//   },
// };
// var a = user.sum(2, 3);
// console.log(a);

// var user = {
//   name: "priya",
//   age: 19,
//   details: function (name, age) {
//     console.log("my name is", this.name);
//     console.log("my age is", this.age);
//   },
// };
// user.details("ram", "city");

// var user = {
//   name: "priya",
//   age: 19,
//   details: function (name, age) {
//     console.log("my name is", this.name,name);
//     console.log("my age is", this.age,age);
//   },
// };
// user.details("ram", 36);

// UPDATE THIS VALUE........

// var user = {
//   name: "priya",
//   age: 19,
//   details: function (name, age) {
//     console.log("my name is", this.name);
//     console.log("my age is", this.age);
//   },
// };
// user.details();
// user.name = "Amarjeet"
// user.details();
// user.age = 13
// user.details()
// var user = {
//   name: "priya",
//   age: 19,
//   hobbies : ['coding', 'reading'],
//   print: function (name) {
//     console.log('hello',name);

//   },
// };
//  user.print("ram")

// console.log(user.age)
// console.log(user.hobbies)

//JOIN METHOD....
// hobbies = ['coding','reading']
// console.log(hobbies.join())

// var user = {
//   name: "priya",
//   age: 19,
//   hobbies: ["coding", "reading"],
//   print: function ()
//   {
//     console.log("hello", this.name);
//     console.log('age', this.age)
//     console.log('hobbies', this.hobbies.join())
//   },
// };
// user.print();

// var rectangle = {
//         length: 10,
//         breath: 20,
//         perimeter : function(){
// console.log(2*(this.length + this.breath))
//         },
//         area: function(){
// console.log(this.length*this.breath)
//         }
// }
// rectangle.area()
// rectangle.perimeter()
// rectangle.length = 100
// rectangle.breath = 200
// rectangle.area()
// rectangle.perimeter()

// create an object with the following functionality ability to add student details and 3 subject
// var details = {
//   data: [],
//   addStudent: function (nam, math, sci, eng) {
//     var obj = {};
//     obj.name = nam;
//     obj.maths = math;
//     obj.science = sci;
//     obj.english = eng;

//     this.data.push(obj);
//   },
// };
// details.addStudent("priya", 10, 20, 30);
// details.addStudent("ram", 20, 30, 40);
// console.log(details.data);

// var details = {
//   data: [],
//   addStudent: function (nam, math, sci, eng) {
//     var obj = {
//       name: nam,
//       maths: math,
//       science: sci,
//       english: eng,
//     };

//     this.data.push(obj);
//   },
// };
// details.addStudent("priya", 10, 50, 30);
// details.addStudent("ram", 15, 35, 40);
// details.addStudent("ramu", 23, 8, 41);
// details.addStudent("raml", 22, 50, 40);
// console.log(details.data);

var details = {
  data: [],
  addStudent: function (nam, math, sci, eng) {
    var obj = {};
    obj.name = nam;
    obj.maths = math;
    obj.science = sci;
    obj.english = eng;

    this.data.push(obj);
  },
  lowScore: function () {
    var pad_min = Infinity;
    var lowStudent;
    for (var i = 0; i < this.data.length; i++) {
      // console.log(this.data[i]);
      var current = this.data[i];
      var total = current.maths + current.science + current.english;
      console.log(total);
      if (total < pad_min) {
        pad_min = total;
        lowStudent = current;
      }
    }
    console.log(lowStudent);
  },
};

details.addStudent("priya", 10, 50, 30);
details.addStudent("ram", 15, 35, 40);
details.addStudent("ramu", 23, 8, 41);
details.addStudent("raml", 22, 50, 40);
//console.log(details.data);

details.lowScore();
