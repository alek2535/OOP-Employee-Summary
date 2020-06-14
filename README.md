# OOP-Employee-Summary

Week-10 HW

![License Badge](https://img.shields.io/badge/license-MIT-blue)

## Description

This project is a software engineering team generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. When the user has completed building the team, the application creates an HTML file that displays a nicely formatted team roster based on the information provided by the user.

## Table of Contents

  * [User Story](#user-story)
  * [Visuals](#visuals)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Credits](#credits)
  * [Tests](#tests)
  * [Questions](#questions)

## User Story

```
AS a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles.
```

## Visuals

![Employee Summary 1](./Assets/10-OOP-homework-demo-1.png)
![Employee Summary 2](./Assets/10-OOP-homework-demo-2.png)

![Project Demo](./Assets/team-summary-oop.gif)

Here is a link of the video for this gif [https://drive.google.com/file/d/15r9FbIJh4R3FEcFJERCYQ4pZFJEUzq9q/view](https://drive.google.com/file/d/15r9FbIJh4R3FEcFJERCYQ4pZFJEUzq9q/view)

## Installation

To access this project:

```
1. Go to https://github.com/alek2535/OOP-Employee-Summary

2. Fork the branch and then click on clone or download

3. Paste copied link after `git clone` into your bash console in your desired directory

4. You should now have access to the repository
```

In the `Develop` folder, there is a `package.json`, so make sure to `npm install`.

Once you have the dependancies installed run the command:

```
node app.js
```

## Usage

This project is a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person.

Technologies Used:

* JavaScript
* Node.js
* Inquirer
* Jest
* OOP (Object Oriented Programming)
* TDD (Test Driven Development)

## Contributing

Use the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)

## Credits

Thank you to Carmen Obied(@carmenobied), CJ Pia(@cjpia612), and Zack Corpus(@zcorpuz) who helped get me through this. Bouncing ideas off of each other and providing useful resources helped make this project successful.

## License

MIT License

Copyright (c) [2020] [Alek Valencia]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Project Status

This project meets all requirements is fully functional. Any additions would be to make the code better and to add more functionality and validation.

## Tests

This project has unit tests that the application has passed. These tests can be found in the test folder. Each test is to make sure the objects for each employee are functional. You can run the tests at any time with `npm run test`.

## Questions

[alek2535](https://github.com/alek2535)

alekvalencia2535@gmail.com

If you have any questions about the project you can reach me at the above email.