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
        }
    },
}