const utils = require("../utils");

class AccountRepo {

    async saveNewAccount(newAccount) {

        const res = await utils.addAccount(newAccount);

        return res;
    }

    async getAccountByUsrname(usrname) {

        const res = await utils.getAccounts("usrname", "==", usrname);

        return res;
    }
}

const accountRepo = new AccountRepo();

module.exports = accountRepo;