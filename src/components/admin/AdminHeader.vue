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
                        <el-dropdown-item icon="el-icon-setting" command="logout">退出登录</el-dropdown-item>
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