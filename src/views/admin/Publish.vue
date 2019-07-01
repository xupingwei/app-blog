<template>
    <div class="publish">
        <app-admin-header></app-admin-header>
        <el-radio-group v-model="isCollapse">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <div class="publish-content">
            <el-menu
                    :collapse="isCollapse"
                    :default-active="$route.path"
                    text-color="#20A0FF"
                    class="el-menu-vertical-demo">
                <el-menu-item index="/createArticle">
                    <router-link tag="a" :to="{name:'createLink'}">
                        <div><i class="el-icon-edit"></i>
                            <span slot="title">文章编辑器</span>
                        </div>
                    </router-link>
                </el-menu-item>
                <el-menu-item index="/home">
                    <router-link tag="a" target="_blank" :to="{name:'homeLink'}">
                        <div><i class="el-icon-s-home"></i>
                            <span slot="title">查看主页</span>
                        </div>
                    </router-link>
                </el-menu-item>
                <el-menu-item index="/articleManager">
                    <router-link tag="a" :to="{name:'articleManagerLink'}">
                        <div>
                            <i class="el-icon-document"></i>
                            <span slot="title">文章管理</span>
                        </div>
                    </router-link>
                </el-menu-item>
                <el-menu-item index="/tagManager">
                    <router-link tag="a" :to="{name:'tagManagerLink'}">
                        <div>
                            <i class="el-icon-price-tag"></i>
                            <span slot="title"> 分类管理</span>
                        </div>
                    </router-link>
                </el-menu-item>
            </el-menu>
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
                isCollapse: true
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
        display: flex;
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