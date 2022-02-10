//Import the employee class
const Employee = require("./Employee");
//class creation for Manager Class
class Manager extends Employee {
  constructor(name, id, email, office, role) {
    super(name, id, email);

    this.office = office;
    this.role = role;
  }
  getStoreId() {
    if (!this.office) {
      return "No store id Available";
    } else {
      return this.office;
    }
  }

  getRole() {
    if (this.role === "Manager") {
      return "Manager";
    } else {
      return "Role Not determined";
    }
  }
}

module.exports = Manager;
