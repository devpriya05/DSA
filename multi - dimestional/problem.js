// missing number
var arr = [1, 2, 3, 4, 6];
var res = 0;

for (let i = 0; i < arr.length; i++) {
  var sum = ((arr.length + 1) * (arr.length + 2)) / 2;
  res = res + arr[i];
  var ans = sum - res;
}
//console.log(ans);
var arr = [1, 2, 3, 5];
var res = 0;
for (let i = 0; i < arr.length; i++) {
  var sum = ((arr.length + 1) * (arr.length + 2)) / 2;
  res = res + arr[i];
  var ans = sum - res;
}

//console.log(ans);

var arr = [1, 2, 3, 4, 5];
var sum = 0;
var res = [];
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
  res.push(sum);
}
//console.log(res);

var arr = [1, 2,4,5,6];
var res = 0;

for (let i = 0; i < arr.length; i++) {
  var sum = ((arr.length + 1) * (arr.length + 2)) / 2;
  res = res + arr[i]
  var ans = sum-res
}
//console.log(ans)

var n = 20;
var sum = 0
for(let i = 1; i<=n; i++){
sum = sum + i
}
//console.log(sum)
var arr = [1,2,3]
for(let i = 0; i<arr.length; i++){
        let res = ""
        for(let j = i; j<arr.length; j++){
                res+= arr[j]+ " "
              //console.log(res)
        }
     
}
var str = "priya"
for(let i = 0;i<str.length; i++){
        let res = ""
        for(let j = i; j<str.length; j++){
                res+= str[j] + " "
                //console.log(res)
        }
}
var str = "abc";
for(let i = 0; i<str.length; i++){
    let res = "";
        for(let j = i; j<str.length;j++){
      res+= str[j] + " ";
//console.log(res);
   }
}


//GENERATE ALL SUM OF SUBARRAYs
var arr = [1,2,3,4]

for(let i = 0; i<arr.length; i++){
  var sum = 0
  for(let j = i; j<arr.length; j++){
    sum = sum + arr[j]
//console.log(sum)
  }
}

var arr = [1,2,3,4]
for(let i = 0; i<arr.length; i++){
  for(let j = i; j<arr.length; j++){
    // for(let k = i; k<=j; k++){
    //   console.log(arr[k])
    console.log(arr[j])
    }
  }


  


