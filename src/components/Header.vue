<template>
    <el-header>
        <el-row>
            <el-col :span="8">
                <div class="search">
                    <a href="#">
                        <el-image :src="headerUrl"
                                  style="height: 40px;width: 40px;"
                                  fit="cover"></el-image>
                    </a>
                    <el-input style="width: 80%;" placeholder="请输入内容" v-model="searchContent">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>
            </el-col>
            <el-col :span="6" offset="1">
                <el-menu :default-active="$route.path"
                         class="el-menu-demo"
                         mode="horizontal"
                         background-color="#545c64"
                         text-color="#fff"
                         active-text-color="#ffd04b">
                    <el-menu-item index="1">
                        <router-link tag="li" :to="{name:'homeLink'}">首页</router-link>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <router-link tag="li" :to="{name:'articleLink'}">文章</router-link>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <router-link tag="li" :to="{name:'aboutLink'}">关于我</router-link>
                    </el-menu-item>
                </el-menu>
            </el-col>

            <el-col :span="4" offset="5">
                <el-menu mode="horizontal"
                         background-color="#545c64"
                         text-color="#fff"
                         active-text-color="#ffd04b">
                    <el-menu-item index="4">
                        <a href="#">
                            <img src="../assets/fluidicon.png"
                                 width="20" height="20" alt="github"></a>
                    </el-menu-item>
                    <el-menu-item index="5">
                        <a href="#">
                            <img src="../assets/jianshu.png"
                                 width="20" height="20" alt="简书"></a>
                    </el-menu-item>
                    <el-menu-item index="6">
                        <a href="#">
                            <img src="../assets/favicon.png"
                                 width="20" height="20" alt="CSDN"></a>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </el-header>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                // eslint-disable-next-line no-undef
                headerUrl: "../assets/avatar.jpg",
                searchContent: ""
            }
        }
    }
</script>

<style scoped>
    .el-row {
        width: 100%;
    }

    .el-header {
        margin: 0;
        padding: 0;
        background-color: #545c64;
        display: flex;
    }

    .search {
        height: 90px;
        line-height: 90px;
        flex-direction: row;
    }

    .search > a {
        margin-left: 20px;
        float: left;
    }

    .search > .el-input {
        float: left;
        margin-left: 10px;
        border: 1px solid #545c64;
        margin-top: 10px;
    }
</style>