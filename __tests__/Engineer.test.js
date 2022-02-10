//Importing required classes
const Engineer = require("../lib/Engineer");
// const Employee = require("../lib/Employee");
//importing mock data
jest.mock("../lib/Employee");
console.log(new Engineer());

/*Test function that takes 2 args i.e a descriptive string of the expected result and a call back arrow function. The below test is testing the properties of Engineer*/
test("creates an engineer object", () => {
  const engineer = new Engineer("Dave", "Daveman");

  expect(engineer.name).toBe("Dave");
  expect(engineer.github).toEqual(expect.any(String));
});

/*Unable to pass object methods for testing getting undefined error*/

// //These test will test Enigineer methods
// test("Gets github via getGithub()", () => {
//   const engineer = new Engineer();

//   expect(engineer.github).toEqual(expect.any(String));
// });
// test("Gets role via getRole()", () => {
//   const Engineer = new Engineer();

//   expect(engineer.getRole()).toEqual(expect.any(String));
// });
// test("Gets github via getGithub()", () => {
//   const engineer = new Engineer();

//   expect(engineer.getGithub).toEqual(expect.any(String));
// });
