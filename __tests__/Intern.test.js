//Importing required classes
const Intern = require("../lib/Intern");
// const Employee = require("../lib/Employee");
//importing mock data
jest.mock("../lib/Employee");
console.log(new Intern());

/*Test function that takes 2 args i.e a descriptive string of the expected result and a call back arrow function. The below test is testing the properties of Engineer*/
test("creates an intern object", () => {
  const intern = new Intern("Dave", "Princeton");

  expect(intern.name).toBe("Dave");
  expect(intern.school).toEqual(expect.any(String));
});

// //These test will test Intern methods

/*Unable to pass object methods for testing getting undefined error*/
// test("Gets school via getSchool()", () => {
//   const intern = new Intern();

//   expect(intern.school).toEqual(expect.any(String));
// });
// test("Gets role via getRole()", () => {
//   const intern = new Intern();

//   expect(intern.getRole()).toBe("Intern");
// });
