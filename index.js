// Dpendencies
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      // Your password here
      password: 'Kiseki24!',
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