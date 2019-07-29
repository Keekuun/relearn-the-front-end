/**Mysql CRUD
 * 修改数据
 * */

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0121304942111',
    database: 'project',
});

connection.connect();
updatesql = 'UPDATE student SET SNAME = ?  WHERE SNO = ?';
updateParams = ['LuxXX', 33];
connection.query(updatesql, updateParams, (error, result, fields) => {
    if (error) {
        console.log('[INSERT ERROR] - ', error.message);
        return;
    }
    console.log('影响行数',result.affectedRows);
});
connection.end();