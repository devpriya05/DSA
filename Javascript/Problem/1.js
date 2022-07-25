function removeDuplicate(arr) {
  let stack = [];
  let newSet = new Set();
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i].split("");
    temp = temp.sort().join("");
    if (!newSet.has(temp)) {
      stack.push(arr[i]);
      newSet.add(temp);
    }
  }
  stack = stack.sort((a, b) => a - b);
  return stack;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let data = input.slice(1, input.length);
  let result = removeDuplicate(data);
  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
}
if (process.env.USERNAME === "Priya Kumari") {
  runProgram(`5
      eodc
      odec
      code
      baca
      aabc`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
