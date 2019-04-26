import utils from "../../utils";

export const userForm = {
    created() {
        const dataKeys = Object.keys(this.$data).filter(s => !s.includes("List"));

        const vm = this;
        
        dataKeys.forEach(key => {

            this.$watch(key, () => {

                const value = this[key];

                utils.EventBus.$emit("updateValueByKey", key, value);
            });
        });
    },
}