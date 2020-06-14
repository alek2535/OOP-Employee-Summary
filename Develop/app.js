const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//Empty array for team objects
const employeesArr = [];

// Manager specific questions for inquier.prompt
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

// Engineer specific questions for inquier.prompt
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

// Intern specific questions for inquier.prompt
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

// General employee questions for inquier.prompt
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

// Question to add another employee
const anotherEmployee = 
    {
        type: 'confirm',
        name: 'another',
        message: 'Do you want to add another team member?'
    };



// Init function to start inquirer.prompt
const init = async () => {
    console.log('Hello! Please answer the following questions to build your team.');

    const generalQ = await inquirer.prompt(employeeQuestions);
    //Creates object for classes
    const {name, id, email, role} = generalQ;

    //Conditional statement to get to role specific questions
    if (role === 'Manager') {
        const managerQ = await inquirer.prompt(managerRole);
        const office = managerQ.officeNumber;

        // Creates object for Manager
        const newManager = new Manager(name, id, email, office);
        employeesArr.push(newManager);
    } else if (role === 'Engineer') {
        const engineerQ = await inquirer.prompt(engineerRole);
        const gitHub = engineerQ.github;

        // Creates object for Engineer
        const newEngineer = new Engineer(name, id, email, gitHub);
        employeesArr.push(newEngineer);
    } else if (role === 'Intern') {
        const internQ = await inquirer.prompt(internRole);
        const school = internQ.school;

        // Creates object for Intern
        const newIntern = new Intern(name, id, email, school);
        employeesArr.push(newIntern);
    }

    // Prompt to add more employees
    const newEmployee = await inquirer.prompt(anotherEmployee);
    const yesOrNo = newEmployee.another;

    if (yesOrNo) {
        init();
    } else {
        console.log('You have succesfully built your team!');
        console.log(employeesArr);
        // After the user has input all employees desired, call the `render` function and pass in an array containing all employee objects
        const teamList = render(employeesArr);
        // Create an HTML file using the HTML returned from the `render` function using the variable `outputPath` above.
        fs.writeFile(outputPath, teamList, error => {
            if (error) throw error;
        })
    }
    
}

        


init();

