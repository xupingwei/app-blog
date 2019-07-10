<template>
    <div class="publish">
        <app-admin-header></app-admin-header>
        <div class="publish-content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import AdminHeader from "../../components/admin/AdminHeader";

    export default {
        name: 'Publish',
        components: {
            'app-admin-header': AdminHeader
        },
        data() {
            return {
                // isCollapse: true
            }
        }
    }
</script>

<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 150px;
        /*min-height: 500px;*/
    }

    .publish {
        height: 100%;
        margin: 0;
        padding: 0;
    }

    .el-radio-group {
        margin-top: 10px;
        margin-left: 5px;
        margin-bottom: 5px;
    }

    .publish-content {
        margin: 10px;
    }

    .el-menu {
        height: 100%;
        float: left;
        border: 1px solid #ffffff;
    }

    .el-menu-item a {
        text-decoration: none;
        color: black;
        font-weight: bold;
    }

    .el-menu-item a:visited {
        color: #000000;
    }

    .el-menu-item a:active {
        color: black;
    }

</style>