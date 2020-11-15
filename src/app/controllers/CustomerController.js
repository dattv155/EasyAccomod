const { customerCreat } = require('../model/customer');
const customer = require('../model/customer')

class CustomerController {
    // GET /product/:name
    creat(req, res) {
        res.render('product/singin')
    }

    store(req, res)
    {
        customer.customerCreat(req)
        res.send(req.body)
    }
}

module.exports = new CustomerController();