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

                if (value) {
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
        admitUser() {

            this.$confirm('Admitting user. Continue?', 'Warning', {
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: 'Admittance completed',
                    showClose: true
                });
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