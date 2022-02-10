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
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toBe("Daveman");
});

/*Resolved!!!! was not pass params to new Intern()  Unable to pass object methods for testing getting undefined error*/

//These test will test Enigineer methods
test("Gets github via getGithub()", () => {
  const engineer = new Engineer("Dave", "Daveman");

  expect(engineer.getGithub()).toBe("Daveman");
});
test("Gets role via getRole()", () => {
  const engineer = new Engineer("Dave", "Daveman");

  expect(engineer.getRole()).toEqual(expect.any(String));
});
