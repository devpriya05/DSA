var num = 4;
for (let i = 1; i <= num; i++) {
  let res = "";
  for (let j = 1; j <= num; j++) {
    res += j + " ";
  }
 // console.log(res);
}
var num = 4;
for (let i = 1; i <= num; i++) {
  let res = "";
  for (let j = 1; j <= num; j++) {
    res += "* ";
  }
  //console.log(res);
}

var num = 4;
for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= i; j++) {
    //console.log(j);
  }
}
var num = 4;
for (let i = 1; i <= num; i++) {
  let res = "";
  for (let j = i; j <= num; j++) {
    res += "* ";
  }
  //console.log(res)
}

var num = 4;
for (let i = 1; i <= num; i++) {
  let res = "";
  for (let j = 1; j <= i; j++) {
    res += "* ";
  }
  //console.log(res)
}
var n = 4;
var count = 1;
for(let i = 1; i<=n; i++){
        let res = ""
        for(let j = 1; j<=n; j++){
                res+= count + " " 
                count++
               
        }
        //console.log(res)
}
var n = 5
for(let i = 1; i<=n; i++){
  let res = ""
  for(let j = 1; j<=n; j++){
    if(i==n|| j==n){
      res+= "* "
    }
  }
  console.log(res)
}

/*
    * * * * *
      *     *
        *   * 
          * * 
            * 
             */


var n = 5
for(let i = 0; i<n; i++){
  let res = ""
  for(let j = 0; j<n; j++){
    if(i==0||i==j|| j==n-1){
      res+= "* "
    }
    else{
      res+= "  "
    }
  }
  console.log(res)
}

// V PRINT
var n = 5
var mid = Math.ceil(n/2)


for(let i = 0; i<n; i++){
  let res = " "
  for(let j = 0; j<n;j++){
    if(j-i/2==0 || j+i /2==n-1){
    res+= "* "
  }else{
    res+= "  "
  }
 
} 
console.log(res)
}

// PRINT T
var n = 5
 var mid = Math.floor(n/2)
 //console.log(mid)
 for(let i = 0; i<n; i++){
  let res = ""
  for(let j = 0; j<n; j++){
    if(i==0 ||j==mid){
      res+= "* "
  } else{
    res+= "  "
  }
  }
  //console.log(res)
 }


 // PRINT Z
var n = 5
for(let i = 0; i<n; i++){
  let res = ""
  for(let j = 0; j<n; j++){
    if(i==0||i+j==n-1||i==n-1){
      res+= "* "
    }
    else{
      res+= "  "
    }
  }
  console.log(res)
}
// print S
var n = 5
for(let i = 0; i<n; i++){
  let res = ""
  for(let j = 0; j<n; j++){
    if(i==0||i==j||i==n-1){
      res+= "* "
    }
    else{
      res+= "  "
    }
  }
  console.log(res)
}





