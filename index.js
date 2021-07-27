// Dpendencies
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const {addDepartment} = require('./helpers/questions');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      // Your password here
      password: '',
      database: 'tracker_db'
    },
    console.log(`Connected to the tracker_db database.`)
  );

  questions();

  function questions() {
      inquirer.prompt(
          {
              type: "list",
              message: "Please select one of the following",
              name: "choice",
              choices: [
                  "View all departments",
                  "View all roles",
                  "View all employees",
                  "Add a department",
                  "Add a role",
                  "Add an employee",
                  "Update an employee role"
              ]
          }
      ).then(answer => {
          let {choice} = answer;
          if (choice === 'View all departments') {
              viewDepartments();
          }
          else if (choice === 'View all roles') {
              viewRoles();
          }
          else if (choice === 'View all employees') {
              viewEmployees();
          }
          else if (choice === 'Add a department') {
              addDept();
          }
      })
  }

function viewDepartments() {
    db.promise().query(`SELECT * FROM department`)
        .then(dept => {
            // console.log('dept', dept[0]);
            console.table(dept[0]);
            questions();
        })
        .catch(err => {
            console.error('Error', err);
        })
}

function viewRoles() {
    const roleDisplay = `SELECT role.id, role.title, department.name AS department, role.salary FROM role
                            INNER JOIN department ON role.department_id = department.id
                            ORDER BY role.id;`

    db.promise().query(roleDisplay)
        .then(role => {
            // console.log('role', role[0]);
            console.table(role[0]);
            questions();
        })
        .catch(err => {
            console.error('Error', err);
        })
}

// declared employee table as emp due to multiple keys in table
function viewEmployees() {
    const empDisplay = `SELECT emp.id, emp.first_name, emp.last_name, role.title AS title, 
                        department.name AS department, role.salary AS salary, (SELECT CONCAT(first_name, ' ', last_name) FROM employee WHERE id = emp.manager_id) AS manager 
                        FROM employee emp
                            INNER JOIN role ON emp.role_id = role.id
                            INNER JOIN department ON role.department_id = department.id
                            ORDER BY emp.id;`
    db.promise().query(empDisplay)
        .then(emp => {
            // console.log('emp', emp[0]);
            console.table(emp[0]);
            questions();
        })
        .catch(err => {
            console.error('Error', err);
        })
}

function addDept() {
    inquirer.prompt(addDepartment) 
        .then(input => {
            input = input.newDepartment;
            db.query(`INSERT INTO department (name)
                     VALUES ('${input}')`, 
                     function (err ,result) {
                         if (err) throw err;
                         console.log(`${input} has been added to the database!`)
                         questions();
                     })
        })
}

