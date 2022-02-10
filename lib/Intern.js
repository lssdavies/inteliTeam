//Import the employee class
const Employee = require("./Employee");
//class creation for Intern Class
class Intern extends Employee {
  constructor(name, id, email, school, role) {
    super(name, id, email);
    // this.name = name;
    // this.id = id;
    // this.email = email;
    this.school = school;
    this.role = role;
  }
  getSchool() {
    if (!this.school) {
      return "No school information available";
    } else {
      return this.school;
    }
  }

  getRole() {
    if (this.role === "Intern") {
      return "Intern";
    } else {
      return "Role Not determined";
    }
  }
}

module.exports = Intern;
