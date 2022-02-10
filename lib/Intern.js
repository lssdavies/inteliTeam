//Import the employee class
const Employee = require("./Employee");
//class creation for Intern Class
class Intern extends Employee {
  constructor(name, school) {
    super(name);
    // this.name = name;
    // this.id = id;
    // this.email = email;
    this.school = school;
  }
  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
