const repos = require("../repositories");

class AccountService {

    async saveNewAccount(newAccount) {

        const res = await repos.AccountRepo.saveNewAccount(newAccount);

        return res;
    }

    async getAccountByUsrname(usrname) {

        const res = await repos.AccountRepo.getAccountByUsrname(usrname);

        return res;
    }
}

const accountService = new AccountService();

module.exports = accountService;