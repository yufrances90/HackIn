<template>
    <div>
        <el-pagination
            background
            :layout="layout"
            :total="total"
            :pager-count="pagerCount"
            @current-change="handlePageChanged"
        >
        </el-pagination>
    </div>
</template>

<script>

    import utils from '../../utils';

    export default {
        name: "COPagination",
        props: ["users", "showPagination"],
        data() {
            return {
                pagerCount: 5,
                layout: "prev, pager, next"
            }
        },
        computed: {
            total() {
                return this.users.length;
            }
        },
        methods: {
            handlePageChanged(currentPage) {
                utils.EventBus.$emit("updateCurrentPage", currentPage);
            }
        }
    }
</script>

<style scoped>
</style>
