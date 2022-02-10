//Import the employee class
const Employee = require("./Employee");
//class creation for Manager Class
class Manager extends Employee {
  constructor(name, office) {
    super(name);

    this.office = office;
  }
  getStoreId() {
    return this.office;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
