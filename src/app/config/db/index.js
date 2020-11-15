const mysql = require('mysql');
const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    // database: 'classicmodels',
    database: 'easyaccomod'
})

const connecting = connect.connect(function (err){
    if (err) throw err.stack
    else console.log('Connect successfully')
})

module.exports = {connect , connecting  };