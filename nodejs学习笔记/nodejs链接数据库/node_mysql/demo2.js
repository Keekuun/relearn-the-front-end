/**Mysql CRUD
 * 查询数据
 * */

const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '0121304942111',
    database:'project',
});

connection.connect();
sql = 'SELECT * FROM student LIMIT 10';
connection.query(sql, (error, results, fields) => {
    if(error){
        throw error;
    }
    console.log(results);
});
connection.end();