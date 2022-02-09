//import Employee when running jest it will use the data in __mocks__
const Employee = require("../lib/Employee");
jest.mock("../lib/Employee");
console.log(new Employee());

///*Test function that takes 2 args i.e a descriptive string of the expected result and a call back arrow function*/
test("creates an employee object", () => {
  const employee = new Employee("Dave");

  expect(employee.name).toBe("Dave");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});
