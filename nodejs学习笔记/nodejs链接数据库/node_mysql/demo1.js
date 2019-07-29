const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0121304942111',
    database: 'project',
});
connection.connect();
connection.query('SELECT 1+1 AS solution', (error, results, fields) => {
    if(error) {
        throw error;
    }
    console.log(results)
});
connection.end();