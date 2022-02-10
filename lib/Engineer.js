//Import the employee class
const Employee = require("./Employee");
//class creation for Engineer Class
class Engineer extends Employee {
  constructor(name, github) {
    super(name);
    //this.name = name;
    // this.id = id;
    // this.email = email;
    this.github = github;
  }
  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}


module.exports = Engineer;
