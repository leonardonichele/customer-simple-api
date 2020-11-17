module.exports = app => {
    const controller = require('../controllers/customerwallets')();
  
    app.route('/api/v1/customer-wallets')
      .get(controller.listCustomerWallets);
  }