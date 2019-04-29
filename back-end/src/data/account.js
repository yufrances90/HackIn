export default class Account {

    constructor(usrname, password) {
        this.usrname = usrname;
        this.password = password;
    }

    getUsrname() {
        return this.usrname;
    }

    getPassword() {
        return this.password;
    }

    getFullDetails() {
        return JSON.stringify(this);
    }

    setUsrname(usrname) {
        this.usrname = usrname;
    }

    setPassword(password) {
        this.password = password;
    }
}