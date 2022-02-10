const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//creating arrays to store employee questions
const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "Enter the team manager's name: ",
    /*adding input validation, requiring the user to input a name with letters and spaces but no numbers. This is done using the regEx(regular expression) method test()*/
    validate: (managerNameInput) => {
      if (nameValidationPattern.test(managerNameInput)) {
        return true;
      } else {
        console.log();
        return "  Please enter the manager's name!";
      }
    },
  },
  {
    type: "input",
    name: "employeeId",
    message: "Enter the team manager's employee id: ",
    validate: (employeeIDNumber) => {
      //console.log(typeof employeeIDNumber) returns string so will use RegEx instead of isNAN;
      if (idValidationPattern.test(employeeIDNumber)) {
        return true;
      } else {
        return "  Please enter the team manager's employee id!";
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter the team manager's email: ",
    validate: (emailInput) => {
      //using regex to validate email input look for numbers letters and special charactrers
      if (emailValidationPattern.test(emailInput)) {
        return true;
      } else {
        console.log("Please enter the manager's email address!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "officeId",
    message: "Enter the team manager's office id: ",
    validate: (officeIDNumber) => {
      if (idValidationPattern.test(officeIDNumber)) {
        return true;
      } else {
        return "  Please enter the team manager's office id!";
      }
    },
  },
];
const engineerQuestions = [
  {
    type: "input",
    name: "engineerName",
    message: "Enter the engineer's name: ",
    /*adding input validation, requiring the user to input a name with letters and spaces but no numbers. This is done using the regEx(regular expression) method test()*/
    validate: (engineerNameInput) => {
      if (nameValidationPattern.test(engineerNameInput)) {
        return true;
      } else {
        console.log();
        return "  Please enter the engineer's name!";
      }
    },
  },
  {
    type: "input",
    name: "employeeId",
    message: "Enter the engineer's employee id: ",
    validate: (employeeIDNumber) => {
      //console.log(typeof employeeIDNumber) returns string so will use RegEx instead of isNAN;
      if (idValidationPattern.test(employeeIDNumber)) {
        return true;
      } else {
        return "  Please enter the engineer's employee id!";
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter the engineer's email: ",
    validate: (emailInput) => {
      //using regex to validate email input look for numbers letters and special charactrers
      if (emailValidationPattern.test(emailInput)) {
        return true;
      } else {
        console.log("Please enter the engineer's email address!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "Enter the engineer's Github username: ",
    validate: (github) => {
      if (nameValidationPattern.test(github)) {
        return true;
      } else {
        return "  Please enter the engineer's Github username!";
      }
    },
  },
];
const internQuestions = [
  {
    type: "input",
    name: "internName",
    message: "Enter the intern's name: ",
    /*adding input validation, requiring the user to input a name with letters and spaces but no numbers. This is done using the regEx(regular expression) method test()*/
    validate: (internNameInput) => {
      if (nameValidationPattern.test(internNameInput)) {
        return true;
      } else {
        console.log();
        return "  Please enter the intern's name!";
      }
    },
  },
  {
    type: "input",
    name: "employeeId",
    message: "Enter the intern's employee id: ",
    validate: (employeeIDNumber) => {
      //console.log(typeof employeeIDNumber) returns string so will use RegEx instead of isNAN;
      if (idValidationPattern.test(employeeIDNumber)) {
        return true;
      } else {
        return "  Please enter the intern's employee id!";
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter the intern's email: ",
    validate: (emailInput) => {
      //using regex to validate email input look for numbers letters and special charactrers
      if (emailValidationPattern.test(emailInput)) {
        return true;
      } else {
        console.log("Please enter the intern's email address!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "Enter the intern's school name: ",
    validate: (github) => {
      if (nameValidationPattern.test(github)) {
        return true;
      } else {
        return "  Please enter the intern's school name!";
      }
    },
  },
];

/*creating variables for input validation to be used with RegEx Test() method. Allows us to use the test for each employee type*/
const nameValidationPattern = /^[A-Za-z\s]+$/;
const idValidationPattern = /^[0-9]+$/;
const emailValidationPattern =
  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//create array to store emplyee data
const employees = [];

const captureManagerData = () => {
  return inquirer.prompt(managerQuestions).then((managerData) => {
    employees.push(managerData);
  });
};
/*functions to capture employee data*/
const captureEngineerData = () => {
  return inquirer.prompt(engineerQuestions).then((engineerData) => {
    employees.push(engineerData);
  });
};
const captureInternData = () => {
  return inquirer.prompt(internQuestions).then((internData) => {
    employees.push(internData);
  });
};
//function to add employee type
const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message:
          "Choose the type of employee you would like to add to this manager?",
        choices: ["Engineer", "Intern", "I have no more employees to add"],
      },
    ])
    .then((employeeType) => {
    //   console.log(employeeType);
      /*addEmployee return object employeeType = {role:"Engineer"} so dot notation will be needed to access poroperty*/
      if (employeeType.role === "Engineer") {
        //calling captureEngineerData()
        captureEngineerData().then(addEmployee);
      } else if (employeeType.role === "Intern") {
        //calling captureInternData()
        captureInternData().then(addEmployee);
      } else {
        //console logging the array employees
        console.log(employees);
        console.log("Thank you for adding your employees' information!");
      }
    });
};
const bulidTeamPage = () => {
  captureManagerData().then(addEmployee);
};
bulidTeamPage();
