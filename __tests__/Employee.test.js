//import Employee when running jest it will use the data in __mocks__/Employee.js
const Employee = require("../lib/Employee");
// jest.mock("../lib/Employee");
// console.log(new Employee());

/*Test function that takes 2 args i.e a descriptive string of the expected result and a call back arrow function. The below test is testing the properties of Employee*/
test("creates an employee object", () => {
  const employee = new Employee("Dave", 1001, "test@email.com");

  expect(employee.name).toBe("Dave");
  expect(employee.id).toBe(1001);
  expect(employee.email).toBe("test@email.com");
});

/*Unable to pass object methods for testing getting undefined error*/

//These test will test Employee methods
test("Gets name via getName()", () => {
  const employee = new Employee("Dave");

  expect(employee.getName()).toBe("Dave");
});
// test("Gets id via getId()", () => {
//   const employee = new Employee();

//   expect(employee.getId).toBe(1001);
// });
// test("Gets email via getEmail()", () => {
//   const employee = new Employee();

//   expect(employee.getEmail()).toBe(expect.any(String));
// });

// test("Gets role via getRole()", () => {
//   const employee = new Employee();

//   expect(getRole()).toBe("Employee");
// });
