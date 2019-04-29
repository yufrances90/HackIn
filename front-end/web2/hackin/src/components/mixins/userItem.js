import utils from "../../utils";

export const userItem = {
    data() {
        return {
            commonRequiredFields: [
                "_id",
                "firstName",
                "lastName"
            ]
        }
    },
    props: ["user", "hackathonId"],
    computed: {
        updatedUser() {

            let user = this.initiallyUpdatedUser();

            this.requiredFields.forEach(field => {

                const value = this.user["hackathons"][this.hackathonId][field];

                if (value != null) {
                    user[field] = value;
                }
            });

            return user;
        }
    },
    methods: {
        initiallyUpdatedUser() {

            let user = {};

            this.commonRequiredFields.forEach(field => {
                user[field] = this.user[field];
            });

            return user;
        },
        openLink(link) {
            window.open(link);
        },
        admitUser(userId) {

            this.$confirm(
                "Accepting user application... " + 
                "Once accepted, you need to open user's profile to decline " + 
                "his application.  Continue?", 
                'Warning', {
                confirmButtonText: 'Proceed',
                cancelButtonText: 'Cancel',
                type: 'warning'
            }).then(() => {
                utils.EventBus.$emit("admitUser", userId, this.hackathonId);
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: 'Admittance canceled',
                    showClose: true
                });          
            });
        }      
    }
}