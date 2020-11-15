const conn = require('../config/db')

function customerCreat(cus)
{
    let sql = "INSERT INTO customer (fullName , phone , email , password) VALUES ('" + cus.body.fullname + "','" + cus.body.phone + "','" + cus.body.email + "','" + cus.body.password + "')" ;
    console.log(sql)
    conn.connect.query(sql , () => {})
}

module.exports = {customerCreat};