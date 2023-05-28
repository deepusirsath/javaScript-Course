// Problem

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

function enrollStudent(students) {
  setTimeout(() => {
    student.push(students);
    console.log("student have been enrolled");
  }, 8000);
}

function getStudent() {
  setTimeout(() => {
    student.forEach((res) => {
      console.log(res?.name);
    });
    console.log("student have been fetched");
  }, 1000);
}

const students = { name: "sonu", subject: "hindi" };

enrollStudent(students);
getStudent();
