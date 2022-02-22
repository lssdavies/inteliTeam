//class creation for Parent Class Employee
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }

  getId() {
    if (!this.id) {
      return "No ID available";
    } else {
      return this.id;
    }
  }
  getEmail() {
    if (!this.email) {
      return "No email available";
    } else {
      return this.email;
    }
  }
  getRole() {
    return "Employee";
  }

}

module.exports = Employee;
