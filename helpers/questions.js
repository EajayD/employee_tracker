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

const addEmployees = [
    {
        type: 'input',
        message: `What is the employee's first name?`,
        name: 'newEmpFirstName'
      },
      {
        type: 'input',
        message: `What is the employee's last name?`,
        name: 'newEmpLastName'
      },
      {
        type: 'list',
        message: "What is the employee's role?",
        name: 'newEmpRole',
        choices: [
            'Sales Lead',
            'Salesperson',
            'Lead Engineer',
            'Software Engineer',
            'Account Manager',
            'Accountant',
            'Legal Team Lead',
            'Lawyer'
        ]
      },
      {
        type: 'list',
        message: "Who is the employee's manager?",
        name: 'newEmpManagerRole',
        choices: [
            'Jusis Albarea',
            'Tio Plato',
            'Alisa Reinford',
            'Cassius Bright'
        ]
      }
]

const updateEmployees = [
    {
        type: 'list',
        message: 'Which employee would you like to edit?',
        name: 'changeEmp',
        choices: [
            'Jusis Albarea',
            'Machias Regnitz',
            'Tio Plato',
            'Tita Russell',
            'Alisa Reinford',
            'Sharon Kreuger',
            'Cassius Bright',
            'Arios Maclaine'
        ]
    },

    {
        type: 'list',
        message: 'Which role will you assign them?',
        name: 'changeRole',
        choices: [
            'Sales Lead',
            'Salesperson',
            'Lead Engineer',
            'Software Engineer',
            'Account Manager',
            'Accountant',
            'Legal Team Lead',
            'Lawyer'
        ]
    }
]
module.exports = {addDepartment, addRoles, addEmployees, updateEmployees}