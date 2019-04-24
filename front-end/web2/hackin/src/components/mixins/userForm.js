import utils from "../../utils";

export const userForm = {
    created() {
        const dataKeys = Object.keys(this.$data).filter(s => !s.includes("List"));

        const vm = this;
        
        dataKeys.forEach(key => {

            const value = vm[key];

            this.$watch(key, (value) => {
                utils.EventBus.$emit("updateValueByKey", key, value);
            });
        });
    },
}