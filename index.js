
const inquirer = require('inquirer');



function promptUser() {
    return inquirer.prompt ([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the project name?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project:"
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process, if applicable: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project usage for?"
        },
        {
            tyoe: "list",
            name: "lisence",
            message: "Choose the applicable license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this project?"
        },
        {
            type: "input",
            name: "tests",
            message: "What are the test instructions?"
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue?"
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username:"
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email"
        }
    ]);
}


async function init() {
    try {
        const answers = await promptUser();
        const generateContent = generateReadme(answers);

        await writeFileAsync('/.dist/README.md', generateContent);
    }
    catch(err) {
        console.log(err);
    }
}

init();
