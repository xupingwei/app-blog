<template>
    <div class="admin-header">
        <el-header>
            <h3><i class="el-icon-s-home"></i>发布文章后台管理</h3>
            <div style="float: right;margin-top: 10px;">
                <el-dropdown :split-button="true"
                             trigger="click"
                             @command="handleCommand">
                          <span class="el-dropdown-link">
                            <i class="el-icon-user el-icon--left"></i> {{username}}{{role}}
                          </span>
                    <el-dropdown-menu slot="dropdown" style="width: 15%">
                        <el-dropdown-item icon="el-icon-s-home" command="lookupHome">
                            <span style="margin-left: 30px">查看主页</span>
                        </el-dropdown-item>
                        <el-dropdown-item icon="el-icon-s-tools" command="logout">
                            <span style="margin-left: 30px">退出登录</span></el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </el-header>
    </div>
</template>

<script>
    export default {
        name: "AdminHeader",
        data() {
            return {
                username: "liwei",
                role: "(管理员)"
            }
        },
        methods: {
            handleCommand(command) {
                if (command === 'lookupHome') {
                    let routerUrl = this.$router.resolve({name: "homeLink"});
                    window.open(routerUrl.href, '_blank');
                } else if (command === "logout") {
                    alert("退出");
                }
            }
        }
    }
</script>

<style scoped>
    .el-header {
        background-color: #20A0FF;
    }

    header h3 {
        color: #fff;
        float: left;
        height: 60px;
        line-height: 60px;
        text-align: center;
    }

    header .el-button {
        float: right;
        height: 40px;
        color: #000;
        margin-top: 10px;
        text-align: center;
        opacity: 0.9;
        background-color: white;
        border: none;
    }

    header h3 i {
        width: 30px;
        height: 30px;
    }
</style>