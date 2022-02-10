//Importing required classes
const Manager = require("../lib/Manager");
// const Employee = require("../lib/Employee");
//importing mock data
jest.mock("../lib/Employee");

/*Test function that takes 2 args i.e a descriptive string of the expected result and a call back arrow function. The below test is testing the properties of Engineer*/
test("creates an intern object", () => {
  const manager = new Manager("Dave", 1001, "test@email.com", 5);

  expect(manager.office).toBe(5);
});

// //These test will test Intern methods

/*Resolved!!!! was not pass params to new Intern()  Unable to pass object methods for testing getting undefined error*/
test("Gets office via getStoreId())", () => {
  const manager = new Manager("Dave", 1001, "test@email.com", 5);

  expect(manager.getStoreId()).toBe(5);
});
test("Gets role via getRole()", () => {
  const manager = new Manager("Dave", 1001, "test@email.com", 5, "Manager");

  expect(manager.getRole()).toBe("Manager");
});
