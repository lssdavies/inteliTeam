//Import the employee class
const Employee = require("./Employee");
//class creation for Engineer Class
class Engineer extends Employee {
  constructor(name, id, email, github, role) {
    //using super to import parent data from employee
    super(name, id, email);
    //this.name = name;
    // this.id = id;
    // this.email = email;
    this.github = github;
    this.role = role;
  }
  getGithub() {
    if (!this.github) {
      return "No Github username available";
    } else {
      return this.github;
    }
  }

  getRole() {
    if (this.role === "Engineer") {
      return "Engineer";
    } else {
      return "Role Not determined";
    }
  }
}

module.exports = Engineer;
