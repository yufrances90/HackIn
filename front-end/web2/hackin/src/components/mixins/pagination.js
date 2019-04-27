import utils from '../../utils';

export const pagination = {
    data() {
        return {
            currentIndex: 0
        }
    },
    props: ["users"],
    watch: {
        currentIndex() {
            this.updateCurrentIndex();
        }
    },
    computed: {
        showPagination() {
            return this.filteredUsers.length > 0;
        },
        filteredUsers() {

            const indexTimes10 = this.currentIndex * 10;

            return this.users.slice(indexTimes10, indexTimes10 + 9);
        }
    },
    created() {
        this.onUpdateCurrentPage();
    },
    methods: {
        onUpdateCurrentPage() {
            utils.EventBus.$on("updateCurrentPage", data => {
                this.currentIndex = data - 1;
            });
        }
    }
}