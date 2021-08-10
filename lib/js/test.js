// Connection query function
const conQuery = (query, rows) => {
    connection.query(query, rows, (err, res) => {
        if (err) throw err;
        console.table(res);
    });
}

// View
export const viewAll = (table) => {
    let query = "SELECT * FROM " + table;
    conQuery(query);
}

// Add
export const addDepartment = (name) => {
    let query = "INSERT INTO department(name) VALUES (?, ?)"; 
    let rows = [ name ];
    conQuery(query, rows);
}

export const addEmployee = (first_name, last_name, role_manager_id) => {
    let query = "INSERT INTO employee (first_name, last_name, role_manager_id) VALUES (?, ?, ?, ?, ?)";
    let rows = [ first_name, last_name, role_manager_id ];
    conQuery(query, rows);
}

export const addRole = (title, salary, dept_id) => { // ADD ROLE
    let query = "INSERT INTO role(title, salary, department_id) VALUES (?, ?, ?, ?)";
    let rows = [ title, salary, dept_id ];
    conQuery(query, rows);
}

// Update
export const updateEmployee = (updateKey, oldValue, updateValue) => {
    let query = "UPDATE department SET ? WHERE ?";
    let where = [ { [updateKey]: oldValue }, { [updateKey]: updateValue } ];
    conQuery(query, where);
}