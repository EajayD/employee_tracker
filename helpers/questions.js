const addDepartment = [
    {
        type: 'input',
        message: 'What is the name of the new department?',
        name: 'newDepartment'
    }
]

const addRoles = [
    {
        type: 'input',
        message: 'What is the name of the new role?',
        name: 'newRole'
    },

    {
        type: 'input',
        message: 'What is the salary of the new role?',
        name: 'newRoleSalary'
    },

    {
        type: 'list',
        message: 'Which department does this role belong to?',
        name: 'newRoleDept',
        choices: [
            'Engineer',
            'Sales',
            'Finance',
            'Legal'
        ]
    }
]
module.exports = {addDepartment, addRoles}