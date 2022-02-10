//Importing required classes
const Intern = require("../lib/Intern");
// const Employee = require("../lib/Employee");
//importing mock data
jest.mock("../lib/Employee");

/*Test function that takes 2 args i.e a descriptive string of the expected result and a call back arrow function. The below test is testing the properties of intern*/
test("creates an intern object", () => {
  const intern = new Intern("Dave", 1001, "test@email.com", "Princeton");

  expect(intern.name).toBe("Dave");
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toBe("Princeton");
});

//These test will test Intern methods

/*Resolved!!!! was not pass params to new Intern()  Unable to pass object methods for testing getting undefined error*/
test("Gets school via getSchool()", () => {
  const intern = new Intern("Dave", 1001, "test@email.com", "Princeton");

  expect(intern.getSchool()).toEqual(expect.any(String));
});
test("Gets role via getRole()", () => {
  const intern = new Intern("Dave", 1001, "test@email.com", "Princeton");

  expect(intern.getRole()).toBe("Intern");
});
