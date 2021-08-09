const actionQuestions = [
    {
        type: 'list',
        name: 'actionChoice',
        message: 'What would you like to do?',
        choices: ['View', 'Add', 'Update', 'Delete']
    }
]

inquirer
.prompt(actionQuestions)
.then(actionChoice => {
    console.log(actionChoice);
});