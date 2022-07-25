//REDUCE STRING

// var str = "aaabccddd"; //abd
// var res = "";
// for (let i = 0; i < str.length; i++) {
//   if (str[i] == str[i + 1]) {
//     i = i + 1;
//   } else {
//     res += str[i];
//   }
// }
// if (res.length === 0) {
//   console.log("empty");
// } else {
//   console.log(res);
// }

// var str = "aabbccdddeeefffgg";
// var res = "";
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === str[i + 1]) {
//     str[i] = i + 1;
//   } else {
//     res += str[i];
//   }
// }
// if (res === 0) {
//   console.log("empty line");
// } else {
//   console.log(res);
// }

// var str = "ppprrriiiyyyaaaoojj";
// var res = "";
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === str[i + 1]) {
//     str[i] = i + 1;            //priyaj
//   } else {
//     res += str[i];
//   }
// }
// if (res === 0) {
//   console.log("EMPTY");
// } else {
//   console.log(res);
// }

//  var str = "amarjeet"
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

//STRING CHECK

// var data = "ab2cd";
// var num = false;
// var str = false;
// for (let i = 0; i < data.length; i++) {
//   if (Number(data[i]) == data[i]) {
//     num = true;
//   } else if (String(data[i]) == data[i]) {
//     str = true;
//   }
// }
// if (num && str) {
//   console.log("alphanumeric");
// } else if (num) {
//   console.log("number");
// } else {
//   console.log("char");
// }

// STRING CONVERT........

// var str = "TeStInG";
// var upper = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
// var lower = `abcdefghijklmnopqrstuvwxyz`;
// var res = "";
// for (let i = 0; i < str.length; i++) {
//   for (let j = 0; j < 26; j++) {
//     if (str[i] == upper[j]) {
//       res += lower[j];
//     } else if (str[i] == lower[j]) {
//       res += upper[j];
//     }
//   }
// }
// console.log(res);

// var str = "RefLEctION";
// var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var lowerCase = "abcdefghijklmnopqrstuvwxyz";
// var res = "";
// for (let i = 0; i < str.length; i++) {
//   for (let j = 0; j < 26; j++) {
//     if (str[i] === lowerCase[j]) {
//       res += upperCase[j];
//     } else if (str[i] === upperCase[j]) {
//       res += lowerCase[j];
//     }
//   }
// }
// console.log(res);


//TRAINGLE OR NOT
// var a = 3;
// var b = 4;
// var c = 5
// if((a+b)>c && (b+c)>a && (c+a)>b){
//         console.log('yes')
// }
// else{
//         console.log("no")
// }

// RIGHT ANGLED TRAINGLE 
// var a = 3;
// var b = 4
// var c = 6
// if((a**2 + b**2) ===c**2){
//         console.log("yes")
// }
// else{
//         console.log("no")
// }

// var n = 7
// var sum = 0
// for(let i = 1;i<=n; i++){
//         if(i%2!==0){
//                 sum = sum + i
//         }
// }
// console.log(sum)

// var num = 3
//      for (i = 1; i <= 10; i++) {
//        console.log(`${num} x ${i} = ${num * i}`);
//      }

// LOOP In TWICE
// var num = ""
//  for(let i = 4; i<=10; i= i + 2){
//    if(i===10){
//     num = num+i 
//    }
//    else{
//      num = num + i + "*"
//    }
//  }
//   console.log(num)


//RANGE OF 2
// var a = 4
//  var b = 10
//   result = "";
//      for(i=a; i<=b;i=i*2){
//        result = result + i + " ";
//      }
//   console.log(result);


  //Number in Right Angled Triangle
  // var n = 4
  // for(let i = 1;i<=n; i++){
  //   let res = ""
  //   for(let j = 1;j<=i;j++){
  //     res+= j + " "
  //   }
  //   console.log(res)
  // }

// PRIME NUMBER


//   var a = 2
// var b = 5

// var result = "";
//      for (i = a; i <= b; i++) {
//        var isPrime = 1;
//        for (j = 2; j < i; j++) {         
//          if (i % j == 0) {
//            isPrime++;
//           }
//        }
//       if (i > 1 && isPrime == 1) {
//             result = result + i + " ";
//        }
//      }
//   console.log(result);  

var a = 2
var b = 11
var res = ""
for(let i = a; i<=b; i++){
  var prime = 1
  for(let j = 2; j<i;j++){
    if(i%j==0){
      prime++
    }
  }
  if(i>1&&prime==1){
    res+= i + " "
  }
}
console.log(res)

var arr1 = [1,2,3,4]
function isEvenSum(arr){
    
    for(let i=0;i<arr.length;i++){
        let sum = 0
        for(let j=i;j<arr.length;j++){
            sum+=arr[j]
        
        if(sum%2===0){
            return "Yes"
        }
        }
        return "No"
    }
}

var x = isEvenSum(arr1)
console.log(x)



