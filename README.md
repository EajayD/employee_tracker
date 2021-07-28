# employee_tracker

[![License](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)

This is a simple application that allows you to organize and keep track of employees based on their roles. You can see their salaries and manager if need be. You can add new employees, departments, roles, and even move around employees to different roles.


## Installation

 First you want to clone this repository into your system

  ```
  git clone git@github.com:EajayD/employee_tracker.git
  ```

  Then you want to install the npm package 

  ```
  npm i 
  ```
Next you will want to change directory into the db folder and run the following commands below in order to get the initial foundation for the database

Note after running mysql -u root -p you will be required to enter your MYSQL password, if you do not already have MYSQL installed go to the built with section below and follow the link to get started there!

```
mysql -u root -p
source schema.sql
source seeds.sql

```
After you will want to input your MYSQL password on line 13 in the index.js in order to connect to the database

  Once you have the node modules and ran the sources in the db folder you can run the command below in your terminal to initiate the program

  ```
  node index.js
  ```

Everything will take place in your terminal 

## Usage

Below is a image preview  and video walkthrough of what to expect when you run the index and choose from certain options

<img src="./db/Screenshot.png" alt="preview">

* [Video Walkthrough](https://drive.google.com/file/d/1V2AwVpKLalSbx3wVXTdBNsZQOyWNnmMD/view)

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Git](https://git-scm.com/about)
* [Github](https://github.com/)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
* [Node.js](https://nodejs.org/en/docs/)
* [MYSQL](https://www.mysql.com/)
* [Inquirer](https://www.npmjs.com/package/inquirer)
* [Console.Table](https://www.npmjs.com/package/console.table)


## Authors

* **Eajay Delos Santos** 

    - [Link to Github](https://github.com/EajayD)
    - [Link to LinkedIn](https://www.linkedin.com/in/eajay-delos-santos-912950214/)

## License
  
 [MIT License](https://opensource.org/licenses/MIT)
  
  ---
