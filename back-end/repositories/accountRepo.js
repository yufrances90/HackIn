const utils = require("../utils");

class AccountRepo {

    async saveNewAccount(newAccount) {

        const res = await utils.addAccount(newAccount);

        return res;
    }
}

const accountRepo = new AccountRepo();

module.exports = accountRepo;