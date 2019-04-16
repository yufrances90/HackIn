const services = require("../services");

class AccountController {

    async saveNewAccount(newAccount) {

        const res = await services.AccountService.saveNewAccount(newAccount);

        return res;
    }
}

const accountController = new AccountController();

module.exports = accountController;