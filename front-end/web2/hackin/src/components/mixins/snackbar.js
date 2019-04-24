import utils from "../../utils";

export const snackbar = {
    data() {
        return {
            showSnackbar: false,
            message: null
        }
    },
    mounted() {
        this.onCloseSnackbar();
    },
    methods: {
        onCloseSnackbar() {
            utils.EventBus.$on('hideSnackbar', () => {
                this.showSnackbar = false;
            });
        },
        openSnackbar(msg) {
            this.message = msg;
            this.showSnackbar = true;
        }
    },
}