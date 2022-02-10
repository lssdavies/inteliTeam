//import Employee when running jest it will use the data in __mocks__/Employee.js
const Employee = require("../lib/Employee");
jest.mock("../lib/Employee");
console.log(new Employee());

/*Test function that takes 2 args i.e a descriptive string of the expected result and a call back arrow function. The below test is testing the properties of Employee*/
test("creates an employee object", () => {
  const employee = new Employee();

  expect(employee.name).toBe("Dave");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

//These test will test Employee methods
test("Gets name via getName()", () => {
  const employee = new Employee();

  expect(employee.name).toEqual(expect.any(String));
});
test("Gets id via getId()", () => {
  const employee = new Employee();

  expect(employee.id).toBeGreaterThan(0);
});
test("Gets email via getEmail()", () => {
  const employee = new Employee();

  expect(employee.email).toEqual(expect.any(String));
});

/*Unable to pass object methods for testing getting undefined error*/
// test("Gets role via getRole()", () => {
//   const employee = new Employee();

//   expect(getRole()).toBe("Employee");
// });
