INSERT INTO department (name)
    VALUES ('Engineering'),
           ('Finance'),
           ('Legal'),
           ('Sales');

INSERT INTO role (title, salary, department_id)
    VALUES  ('Sales Lead', 100000, 4),
            ('Salesperson', 80000, 4),
            ('Lead Engineer',150000, 1),
            ('Software Engineer', 120000, 1),
            ('Account Manager', 160000, 2),
            ('Accountant', 125000, 2),
            ('Legal Team Lead', 250000, 3),
            ('Lawyer', 190000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES  ('Jusis', 'Albarea', 1, null),
            ('Machias', 'Regnitz', 2, 1),
            ('Tio', 'Plato', 3, null),
            ('Tita', 'Russell', 4, 3),
            ('Alisa', 'Reinford', 5, null),
            ('Sharon', 'Kreuger', 6, 5),
            ('Cassius', 'Bright', 7, null),
            ('Arios', 'Maclaine', 8, 7);