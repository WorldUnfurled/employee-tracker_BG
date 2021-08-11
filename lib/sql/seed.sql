-- DEPARTMENTS

INSERT INTO `department`(`name`)
VALUES ("Marketing");

INSERT INTO `department`(`name`)
VALUES ("Operations");

INSERT INTO `department`(`name`)
VALUES ("Finance");

-------------------------------------------------------------------------------
-- ROLES

INSERT INTO `role`(`title`, `salary`, `department_id`)
VALUES ("Sales", 70000, 1);

INSERT INTO `role`(`title`, `salary`, `department_id`)
VALUES ("Pricing", 80000, 1);

INSERT INTO `role`(`title`, `salary`, `department_id`)
VALUES ("Packaging", 60000, 1);

INSERT INTO `role`(`title`, `salary`, `department_id`)
VALUES ("Governance", 100000, 2);

INSERT INTO `role`(`title`, `salary`, `department_id`)
VALUES ("Manufacturing", 40000, 2);

INSERT INTO `role`(`title`, `salary`, `department_id`)
VALUES ("Human Resources", 50000, 2);

INSERT INTO `role`(`title`, `salary`, `department_id`)
VALUES ("Accounting", 60000, 3);

INSERT INTO `role`(`title`, `salary`, `department_id`)
VALUES ("Borrowing", 80000, 3);

INSERT INTO `role`(`title`, `salary`, `department_id`)
VALUES ("Purchasing", 50000, 3);

-------------------------------------------------------------------------------
-- EMPLOYEES


INSERT INTO `employee`(`first_name`, `last_name`, `role_id`, `manager_id`)
VALUES ("Bob", "Stansell", 1, 1);

INSERT INTO `employee`(`first_name`, `last_name`, `role_id`, `manager_id`)
VALUES ("Kerry", "Dean", 1, 2);

INSERT INTO `employee`(`first_name`, `last_name`, `role_id`, `manager_id`)
VALUES ("Nancy", "Laguerre", 1, 3);

INSERT INTO `employee`(`first_name`, `last_name`, `role_id`, `manager_id`)
VALUES ("Lauren", "Rodriguez", 2, 1);

INSERT INTO `employee`(`first_name`, `last_name`, `role_id`, `manager_id`)
VALUES ("Ryan", "Gaylor", 2, 2);

INSERT INTO `employee`(`first_name`, `last_name`, `role_id`, `manager_id`)
VALUES ("David", "Marsh", 2, 3);

INSERT INTO `employee`(`first_name`, `last_name`, `role_id`, `manager_id`)
VALUES ("Adrian", "Rogers", 3, 1);

INSERT INTO `employee`(`first_name`, `last_name`, `role_id`, `manager_id`)
VALUES ("Fred", "McKay", 3, 2);

INSERT INTO `employee`(`first_name`, `last_name`, `role_id`, `manager_id`)
VALUES ("Elizabeth", "Ashcroft", 3, 3);

INSERT INTO `employee`(`first_name`, `last_name`, `role_id`, `manager_id`)
VALUES ("Betty", "Wright", 4, 1);

INSERT INTO `employee`(`first_name`, `last_name`, `role_id`, `manager_id`)
VALUES ("Leatrice", "Gatewood", 4, 2);

INSERT INTO `employee`(`first_name`, `last_name`, `role_id`, `manager_id`)
VALUES ("Alexander", "Mendoza", 4, 3);

INSERT INTO `employee`(`first_name`, `last_name`, `role_id`, `manager_id`)
VALUES ("Edwin", "Fenner", 5, 1);

INSERT INTO `employee`(`first_name`, `last_name`, `role_id`, `manager_id`)
VALUES ("Dorothy", "Gilbertson", 5, 2);

INSERT INTO `employee`(`first_name`, `last_name`, `role_id`, `manager_id`)
VALUES ("Andrew", "Rush", 5, 3);

INSERT INTO `employee`(`first_name`, `last_name`, `role_id`, `manager_id`)
VALUES ("Joann", "Wainscott", 6, 1);

INSERT INTO `employee`(`first_name`, `last_name`, `role_id`, `manager_id`)
VALUES ("Linda", "Kail", 6, 2);

INSERT INTO `employee`(`first_name`, `last_name`, `role_id`, `manager_id`)
VALUES ("Curtis", "Huggins", 6, 3);

INSERT INTO `employee`(`first_name`, `last_name`, `role_id`, `manager_id`)
VALUES ("Richard", "Hartman", 7, 1);

INSERT INTO `employee`(`first_name`, `last_name`, `role_id`, `manager_id`)
VALUES ("Daphne", "Jordan", 7, 2);

INSERT INTO `employee`(`first_name`, `last_name`, `role_id`, `manager_id`)
VALUES ("Lesley", "Britton", 7, 3);

INSERT INTO `employee`(`first_name`, `last_name`, `role_id`, `manager_id`)
VALUES ("Devorah", "Haskins", 8, 1);

INSERT INTO `employee`(`first_name`, `last_name`, `role_id`, `manager_id`)
VALUES ("Henry", "Stapleton", 8, 2);

INSERT INTO `employee`(`first_name`, `last_name`, `role_id`, `manager_id`)
VALUES ("Dorothy", "Gilbertson", 8, 3);

INSERT INTO `employee`(`first_name`, `last_name`, `role_id`, `manager_id`)
VALUES ("Robert", "Ramos", 9, 1);

INSERT INTO `employee`(`first_name`, `last_name`, `role_id`, `manager_id`)
VALUES ("Louise", "Brown", 9, 2);

INSERT INTO `employee`(`first_name`, `last_name`, `role_id`, `manager_id`)
VALUES ("Donna", "Wayland", 9, 3);
