// let input = `4
// E 2
// E 3
// D
// D`;

// function runProgram(input) {
//   input = input.trim().split("\n");
//   const queue = [];

//   for (let i = 0; i < input.length; i++) {
//     let elem = input[i].split(" ");

//     if (elem[0] === "E") {
//       queue.push(elem[1]);
//     } else {
//       if (queue.length > 0) {
//         console.log(queue.shift());
//       } else console.log("Empty");
//     }
//   }
// }

// runProgram(input);

// let input = `5
// E 1 1
// E 2 1
// E 1 2
// D
// D`;

// input = input.split("\n");

// function codingCompetition(arr) {
//   let q1 = [];
//   let q2 = [];
//   let q3 = [];
//   let q4 = [];
//   let queue = [];

//   for (let i = 1; i < arr.length; i++) {
//     let elem = arr[i].split(" ");
//     let type = elem[0];

//     if (type == "E") {
//       let club = +elem[1];
//       let studentId = elem[2];

//       switch (club) {
//         case 1: {
//           q1.push(studentId);
//           if (!queue.includes(1)) {
//             queue.push(1);
//           }
//           break;
//         }
//         case 2: {
//           q2.push(studentId);
//           if (!queue.includes(2)) {
//             queue.push(2);
//           }
//           break;
//         }
//         case 3: {
//           q3.push(studentId);
//           if (!queue.includes(3)) {
//             queue.push(3);
//           }
//           break;
//         }
//         case 4: {
//           q4.push(studentId);
//           if (!queue.includes(4)) {
//             queue.push(4);
//           }
//           break;
//         }
//       }
//     } else if (type === "D") {
//       if (queue.length > 0) {
//         let queueTop = queue[0];

//         switch (queueTop) {
//           case 1: {
//             console.log(1, q1.shift());
//             if (q1.length === 0) {
//               queue.shift();
//             }
//             break;
//           }
//           case 2: {
//             console.log(2, q2.shift());
//             if (q2.length === 0) {
//               queue.shift();
//             }
//             break;
//           }
//           case 3: {
//             console.log(3, q3.shift());
//             if (q3.length === 0) {
//               queue.shift();
//             }
//             break;
//           }
//           case 4: {
//             console.log(4, q4.shift());
//             if (q4.length === 0) {
//               queue.shift();
//             }
//             break;
//           }
//         }
//       }
//     }
//   }
// }

// codingCompetition(input);

let input = `5
E 2
D
D
E 3
D`;

function runProgram(input) {
  input = input.split("\n");
  let queue = [];
  for (let i = 0; i < input.length; i++) {
    let elem = input[i].split(" ");
    let type = elem[0];
    if (type === "E") queue.push(+elem[1]);
    else {
      if (queue.length > 0) {
        console.log(queue.shift(), queue.length);
      } else {
        console.log(`-1, ${queue.length}`);
      }
    }
  }
}
