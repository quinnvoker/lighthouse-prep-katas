const organizeInstructors = function(instructors) {
  let allCourses = {};
  for (let instructor of instructors) {
    if (!Object.keys(allCourses).includes(instructor.course)) {
      allCourses[instructor.course] = [];
    }
    allCourses[instructor.course].push(instructor.name);
  }
  return allCourses;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));