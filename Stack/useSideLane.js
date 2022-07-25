const sideLane = (arr) => {
  let stack = [];
  let ans = [];
  let series = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === series) {
      ans.push(arr[i]);
      series++;
      //       while (stack.length != 0 && stack[stack.length - 1] === series) {
      //         ans.push(stack.pop());
      //         series++;
      //       }
    } else {
      stack.push(arr[i]);
    }
    console.log(stack, " stack", i);
    console.log(ans, " ans", i);
  }

  return stack.length === 0 ? "yes" : "no";
};

function runProgram(input) {
  input = input.trim().split("\n");
  let times = Math.floor(input.length / 2);
  for (let i = 1; i <= times; i++) {
    let data = input[i * 2 - 1].trim().split(" ").map(Number);
    let ans = sideLane(data, 5);
    console.log(ans);
  }
}

runProgram(`5
5 1 2 4 3 
0`);
