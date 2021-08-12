

https://user-images.githubusercontent.com/80599137/129119576-ceb7c562-7371-462a-8af6-cd470f05a7ab.mp4

# employee-management_system_BG

### [My GitHub](https://github.com/worldunfurled)

## Table of Contents:
* [Description](#description)
* [Installing](#installing)
* [Usage](#usage)
* [Testing](#testing)
* [Contributing](#contributing)
* [License](#license)
* [Questions](#questions)

## Description

Content management system for non-developers in a company to work with its database.

## Installing

The peripheral npm packages used for this are as follows:

* console.table
* dotenv
* inquirer
* mysql

Install each of these so that the library requires in each file work properly.

## Usage

First and foremost, you'll want to seed your database. db_schema constructs a new database called company DB. In the .env file, enter the appropriate information for the database - the name of the database (company_db), the user (enter root if you don't know), and the password for the root. Now that the connection is set up, run node ./lib/js/index.js while in the root directory to start the program. You will be asked a series of questions, and upon selecting options from a list then inputting appropriate answers, you will be able to create, read, and update certain aspects of the company database.  

## Testing

console.log() worked wonders. SQL WorkBench was also essential in making sure database queries worked properly.

## E-signature

Brooks Gunn :)
