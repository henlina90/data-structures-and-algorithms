// Your code here
class Student {
  constructor(firstName, lastName, birthYear, birthMonth, birthDay, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.birthMonth = birthMonth;
    this.birthDay = birthDay;
    this.gender = gender;
  }
}

const student = new Student("Mary", "Lee", 2000, 1, 1, "female");

module.exports = Student;
