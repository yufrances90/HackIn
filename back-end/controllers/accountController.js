const services = require("../services");

class AccountController {

    async saveNewAccount(newAccount) {

        const res = await services.AccountService.saveNewAccount(newAccount);

        return res;
    }

    async getAccountByUsrname(usrname) {

        const res = await services.AccountService.getAccountByUsrname(usrname);

        return res;
    }
}

const accountController = new AccountController();

module.exports = accountController;