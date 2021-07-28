// Dpendencies
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const {addDepartment, addRoles, addEmployees} = require('./helpers/questions');

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
          else if (choice === 'Add a role') {
              addRole();
          }
          else if (choice === 'Add an employee') {
              addEmp();
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
        });
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
        });
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
                     });
        });
}

function addRole() {
    inquirer.prompt(addRoles)
        .then(input => {
            db.query(`INSERT INTO role (title, salary, department_id)
                      VALUES ('${input.newRole}', ${input.newRoleSalary}, (SELECT id FROM department WHERE department.name = '${input.newRoleDept}'));`,
                      function (err, result) {
                          if (err) throw err;
                          console.log(`${input.newRole} has been added to the Database!`);
                          questions();
                      })
        })
}

function addEmp() {
        inquirer.prompt(addEmployees)
        .then(input => {
            let fullName = input.newEmpManagerRole.split(' ');
            db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
                      VALUES ('${input.newEmpFirstName}', '${input.newEmpLastName}',
                      (SELECT id FROM role WHERE role.title = '${input.newEmpRole}'),
                      (SELECT emp.id FROM employee emp WHERE emp.first_name = '${fullName[0]}' AND emp.last_name = '${fullName[1]}') 
                      );`,
                      function (err, result) {
                          if (err) throw err;
                          console.log(`${input.newEmpFirstName} ${input.newEmpLastName} has been added to the Database!`);
                          questions();
                      })
        })
    }
