/**Mysql CRUD
 * 添加数据
 * */

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0121304942111',
    database: 'project',
});

connection.connect();
addsql = 'INSERT INTO student(SNO,SNAME,SSEX,SBIRTHDAY,CLASS) VALUES(0,?,?,?,?)';
addSqlParams = ['Lux', '女', '1992-12-31', '302'];
connection.query(addsql, addSqlParams, (error, results, fields) => {
    if (error) {
        console.log('[INSERT ERROR] - ', error.message);
        return;
    }
    console.log('INSERT ID:', results);
});
connection.end();