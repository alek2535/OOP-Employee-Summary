const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employeesArr = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const managerRole = 
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is their office number?',
        validate: answer => {
            if (answer.length < 1) {
                return 'You need to enter an office number.'
            } return true;
        }
    };

const engineerRole = 
    {
        type: 'input',
        name: 'github',
        message: 'What is their GitHub user name?',
        validate: answer => {
            if (answer.length < 1) {
                return 'You need to enter an their username.'
            } return true;
        }
    };

const internRole = 
    {
        type: 'input',
        name: 'school',
        message: 'What school do they attend?',
        validate: answer => {
            if (answer.length < 1) {
                return 'You need to enter a school.'
            } return true;
        }
    };

const employeeQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the employee?',
        validate: answer => {
            if (answer.length < 1) {
                return 'You need to enter a name for the employee.';
            } return true;
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is their ID?',
        validate: answer => {
            if (answer.length < 1) {
                return 'You need to enter an ID number for the employee.';
            } return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email for this employee?',
        validate: answer => {
            if (answer.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                return true;
            } else {
                return 'Invalid email. Please enter valid email';
            };
        }
    },
    {
        type: 'rawlist',
        name: 'role',
        message: 'What is the role of the employee?',
        choices: ['Manager', 'Engineer', 'Intern']
    }
];

const anotherEmployee = 
    {
        type: 'confirm',
        name: 'another',
        message: 'Do you want to add another team member?'
    };


const init = async () => {
    console.log('Hello! Please answer the following questions to build your team.');

    const generalQ = await inquirer.prompt(employeeQuestions);
    const {name, id, email, role} = generalQ;

    if (role === 'Manager') {
        const managerQ = await inquirer.prompt(managerRole);
        const office = managerQ.officeNumber;

        const newManager = new Manager(name, id, email, office);
        employeesArr.push(newManager);
    } else if (role === 'Engineer') {
        const engineerQ = await inquirer.prompt(engineerRole);
        const gitHub = engineerQ.github;

        const newEngineer = new Engineer(name, id, email, gitHub);
        employeesArr.push(newEngineer);
    } else if (role === 'Intern') {
        const internQ = await inquirer.prompt(internRole);
        const school = internQ.school;

        const newIntern = new Intern(name, id, email, school);
        employeesArr.push(newIntern);
    }

    const newEmployee = await inquirer.prompt(anotherEmployee);
    const yesOrNo = newEmployee.another;

    if (yesOrNo) {
        init();
    } else {
        console.log('You have succesfully built your team!');
        console.log(employeesArr);

        const teamList = render(employeesArr);
        fs.writeFile(outputPath, teamList, error => console.log(error));
    }
    
}

        


init();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
