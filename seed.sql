CREATE DATABASE company_db;

USE company_db;

CREATE TABLE `department` (
	`id` INT PRIMARY KEY,
    `name` VARCHAR(30)
);

CREATE TABLE `role` (
	`id` INT PRIMARY KEY,
    `title` VARCHAR(30),
    `salary` DECIMAL,
    `department_id` INT
);

CREATE TABLE `employee` (
	`id` INT PRIMARY KEY,
    `first-name` VARCHAR(30),
    `last-name` VARCHAR(30),
    `role-id` INT PRIMARY KEY,
    `manager_id` INT
);

INSERT INTO `employee`(`id`, `first-name`, `last-name`, `role-id`, `manager_id`)
VALUES (32, "Bob", "Stansell", 46, 27);

INSERT INTO `role`(`id`, `title`, `salary`, `department_id`)
VALUES (46, "HR", 70000, 42);

SELECT * FROM `role`
INNER JOIN `employee`
ON `employee`.`role-id` = `role`.`id`;