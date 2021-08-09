DROP company_db IF EXISTS;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE `department` (
	`id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(30)
);

CREATE TABLE `role` (
	`id` INT NOT NULLPRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(30),
    `salary` DECIMAL,
    `department_id` INT
);

CREATE TABLE `employee` (
	`id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `first_name` VARCHAR(30),
    `last_name` VARCHAR(30),
    `role_id` INT,
    `manager_id` INT
);

-- INSERT INTO `employee`(`id`, `first_name`, `last_name`, `role_id`, `manager_id`)
-- VALUES (32, "Bob", "Stansell", 46, 27);

-- INSERT INTO `role`(`id`, `title`, `salary`, `department_id`)
-- VALUES (46, "HR", 70000, 42);

SELECT * FROM `role`
INNER JOIN `employee`
ON `employee`.`role_id` = `role`.`id`;