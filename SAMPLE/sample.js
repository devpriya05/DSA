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

var user = {
  data: [],
  addStudents: function (nam, sci, math, eng) {
    var obj = {
      name: nam,
      science: sci,
      maths: math,
      english: eng,
    };
    this.data.push(obj);
  },

  lowScore: function () {
    var pad_min = Infinity;
    var lowStudent;
    for (var i = 0; i < this.data.length; i++) {
      // console.log(this.data[i]);
      var current = this.data[i];
      var total = current.maths + current.science + current.english;
      //console.log(total);
      if (total < pad_min) {
        pad_min = total;
        lowStudent = current;
      }
    }
    console.log(lowStudent);
  },
};

user.addStudents("priya", 52, 65, 89);
user.addStudents("riya", 556, 65, 9);
user.addStudents("piya", 52, 6, 89);

user.lowScore();
