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
//   lowScore: function () {
//     var pad_min = Infinity;
//     var lowStudent;
//     for (var i = 0; i < this.data.length; i++) {
//       // console.log(this.data[i]);
//       var current = this.data[i];
//       var total = current.maths + current.science + current.english;
//       console.log(total);
//       if (total < pad_min) {
//         pad_min = total;
//         lowStudent = current;
//       }
//     }
//     console.log(lowStudent);
//   },
// };

// details.addStudent("priya", 10, 50, 30);
// details.addStudent("ram", 15, 35, 40);
// details.addStudent("ramu", 23, 8, 41);
// details.addStudent("raml", 22, 50, 40);
// //console.log(details.data);

// details.lowScore();

//var details = {
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
//    data : [],
//    addStudent: function(name, math,sci, eng, hin){
//     var obj = {}
//     obj.name = name
//     obj.maths = math
//     obj.science = sci
//     obj.english = eng
//     obj.hindi = hin
//     this.data.push(obj)

//    }

// }
//  details.addStudent('priya', 30, 40,50,60)
// details.addStudent('amarjeet',62,75,77,65)
// details.addStudent('ujjawal',25,95,65,46,56)
// console.log(details.data)

// var data = [];
// function addStudent(nam, eng, hin, sci) {
//   var obj = {
//     name: nam,
//     english: eng,
//     hindi: hin,
//     science: sci,
//   };
//   data.push(obj);
// }

// addStudent("priya", 62, 53, 16);
// addStudent('amarjeet', 56,56,89)
// console.log(data);

var data = [];
function student_marks(nam, sci, chem, bio) {
  var obj = {
    name: nam,
    science: sci,
    chemistry: chem,
    biology: bio,
  };
  data.push(obj);
}

function highScore() {
  var maximum = -Infinity;
  var highestScore;

  for (let i = 0; i < data.length; i++) {
    var current = data[i];
    var total = current.science + current.chemistry + current.biology;
    if (total > maximum) {
      maximum = total;
      highestScore = current;
    }
  }
  console.log(highestScore);
}

student_marks("rishi", 90, 62, 89);
student_marks("rishita", 100, 100, 100);
student_marks("rashmi", 90, 62, 89);
student_marks("ravi", 98, 25, 79);
student_marks("rishi", 36, 65, 54);
student_marks("rishi", 23, 65, 65);
highScore();
