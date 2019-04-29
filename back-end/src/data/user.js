export default class User {

    constructor(
        firstName,
        lastName,
        phoneNumber,
        email
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.setDefaultStatus();
    }

    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    getName() {
        return [this.firstName, this.lastName].join(" ");
    }

    getEmail() {
        return this.email;
    }

    getPhoneNumber() {
        return this.phoneNumber;
    }

    getAllDetails() {
        return JSON.stringify(this);
    }

    setAsVolunteer() {
        this.isVolunteer = true;
    }

    setAsMentor() {
        this.isMentor = true;
    }

    setAsHacker() {
        this.isHacker = true;
    }

    admitUser() {
        this.isAdmitted = true;
    }

    setDefaultStatus() {
        this.isAdmitted = false;
        this.isHacker = false;
        this.isMentor = false;
        this.isVolunteer = false;
    }

    updateFirstName(firstName) {
        this.firstName = firstName;
    }

    updateLastName(lastName) {
        this.lastName = lastName;
    }

    updatePhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    updateEmail(email) {
        this.email = email;
    }
 }