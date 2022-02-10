//Import the employee class
const Employee = require("./Employee");
//class creation for Manager Class
class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);

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
