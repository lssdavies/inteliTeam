//creating arrays to store employees by there roles

var managers = [];
var engineers = [];
var interns = [];
//test data
// var pageData = [
//   {
//     name: "Larry",
//     id: "007",
//     email: "larrs@email.com",
//     office: "123",
//     role: "Manager",
//   },
//   {
//     name: "harry",
//     id: "001",
//     email: "harry@email.com",
//     github: "harrys",
//     role: "Engineer",
//   },
//   {
//     name: "dave",
//     id: "002",
//     email: "dave@email.com",
//     github: "devsss",
//     role: "Engineer",
//   },
//   {
//     name: "julie",
//     id: "009",
//     email: "julies@email.com",
//     school: "Harvad",
//     role: "Intern",
//   },
// ];

//these getMarkup functions work witht he filter() method to get employees by their role and apply the applicable HTML and then pushes the the equivalent html to a specific array
const getManagerMarkup = (employee) => {
  managers.push(`<div class="manager">
        <div class="mangerCard">
          <div class="mangerheader">
                <h2 class="cardHeadings">${employee.name}</h2>
                <h3 class="cardHeadings">${employee.role}</h3>
          </div>
            <div class="card-body">
                <p> Employee Id: ${employee.id}</p>
                <p>Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
                <p>Store Id: ${employee.office}</p>

            </div>
        </div>
        </div>
        `);
};
const getEngineerMarkup = (employee) => {
  if (employee) {
    engineers.push(`
        <div class="engineerCard">
          <div class="engineerheader">
                <h2 class="cardHeadings">${employee.name}</h2>
                <h3 class="cardHeadings">${employee.role}</h3>
          </div>
            <div class="card-body">
                <p> Employee Id: ${employee.id}</p>
                <p>Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
                <p>Github: <a href="https://github.com/${employee.github}" target="_blank" rel="noopener noreferrer"> ${employee.github}</a> </p>

            </div>
        </div>
        `);
  } else {
    engineers.push(`<div class="engineer">
        <div class="engineerheader">
                <h2 class="cardHeadings">There are currently no Engineers on this team</h2>
        </div>
        </div>
        `);
  }
};
const getInternMarkup = (employee) => {
  if (employee) {
    interns.push(`<div class="internCard">
          <div class="internheader">
                <h2 class="cardHeadings">${employee.name}</h2>
                <h3 class="cardHeadings">${employee.role}</h3>
          </div>
            <div class="card-body">
                <p> Employee Id: ${employee.id}</p>
                <p>Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
                <p>College: ${employee.school}</p>

            </div>
        </div>
        `);
  } else {
    interns.push(`<div class="internCard">
          <div class="internheader">
                <h2 class="cardHeadings">There are currently no Interns on this team</h2>
                </div>
        </div>
      `);
  }
};

// console.log(pageData);
const generatePage = (pageData) => {
  pageData.filter((employee) => {
    if (employee.role === "Manager") {
      getManagerMarkup(employee);
    }
    if (employee.role === "Engineer") {
      getEngineerMarkup(employee);
    }
    if (employee.role === "Intern") {
      getInternMarkup(employee);
    }
  });
  return `
          <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <title>Team Page</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <section class="sectionContainer">
            <div class="engineer">
            ${managers}
            </div>
            <div class="engineer">
            ${engineers}
            </div>
            <div class="intern">
            ${interns}
            </div>
        </section>
        <footer>
            <h4> Powered by inteliTeam&copy;</h4>
        </footer>

    </body>
    </html>
      `;
};
// const generatedMarkup =
// module.exports = generatePage(pageData);
module.exports = {
  getManagerMarkup,
  getEngineerMarkup,
  getInternMarkup,
  generatePage,
};
