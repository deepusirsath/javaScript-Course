// solution

const student = [
  {
    name: "deepu",
    subject: "python",
  },
  {
    name: "rohan",
    subject: "reactjs",
  },
];

function enrollStudent(students, callback) {
  setTimeout(() => {
    student.push(students);
    console.log("student have been enrolled");
    callback();
  }, 1000);
}

function getStudent() {
  setTimeout(() => {
    student.forEach((res) => {
      console.log(res?.name);
    });
    console.log("student have been fetched");
  }, 5000);
}

const students = { name: "sonu", subject: "hindi" };

enrollStudent(students, getStudent);
//getStudent();
