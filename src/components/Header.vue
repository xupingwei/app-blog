<template>
    <el-header>
        <el-row>
            <el-col :span="8">
                <div class="search">
                    <a href="#">
                        <el-avatar :src="headerUrl"
                                   shape="square"
                                   :size="40"/>
                    </a>
                    <el-input size="small" style="width: 80%;" placeholder="请输入内容" v-model="searchContent">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>
            </el-col>
            <el-col :span="6" :offset="1">
                <el-menu :default-active="$route.path"
                         class="el-menu-demo"
                         mode="horizontal"
                         background-color="#24292E"
                         text-color="#fff"
                         active-text-color="#ffd04b">
                    <el-menu-item index="/home">
                        <router-link tag="li" :to="{name:'homeLink'}">首页</router-link>
                    </el-menu-item>
                    <el-menu-item index="/article">
                        <router-link tag="li" :to="{name:'articleLink'}">文章</router-link>
                    </el-menu-item>
                    <el-menu-item index="/about">
                        <router-link tag="li" :to="{name:'aboutLink'}">关于我</router-link>
                    </el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="4" :offset="5">
                <el-menu mode="horizontal"
                         background-color="#24292E"
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
                headerUrl: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4259300811,497831842&fm=26&gp=0.jpg",
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
        background-color: #24292E;
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
        margin-top: 13px;
    }
</style>