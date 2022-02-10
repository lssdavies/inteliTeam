//class creation for Parent Class Employee
class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }
  getName() {
    if (!this.name) {
      return "No name was entered";
    } else {
      return this.name;
    }
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
    if (this.role === "Employee") {
      return "Employee";
    } else {
      return "Role Not determined";
    }
  }
}

module.exports = Employee;
