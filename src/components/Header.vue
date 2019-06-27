<template>
    <div class="container-fluid p-0 row bg-dark">
        <div class="col-sm-4 m-auto">
            <nav class="navbar navbar-expand-sm  navbar-dark m-0">
                <img src="../assets/avatar.jpg" class="rounded float-left mr-3" width="40" height="40" alt="头像">
                <form class="form-control-range m-auto">
                    <div class="input-group">
                        <input class="form-control" type="text" placeholder="Search or jump to...">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary border-1" type="button">搜索</button>
                        </div>
                    </div>
                </form>
            </nav>
        </div>
        <div class="col-sm-4">
            <nav class="navbar navbar-expand-sm  navbar-dark m-0">
                <ul class="navbar-nav">
                    <li class="nav-item mr-3">
                        <router-link tag="a" :to="{name:'homeLink'}" class="nav-link">首页
                        </router-link>
                    </li>
                    <li class="nav-item mr-3">
                        <router-link class="nav-link" tag="a" :to="{name:'articleLink'}">文章</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" tag="a" :to="{name:'aboutLink'}">关于我</router-link>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="col-sm-1"></div>
        <div class="col-sm-3">
            <nav class="navbar navbar-expand-sm  navbar-dark float-right">
                <ul class="navbar-nav mt-2">
                    <li class="nav-item active">
                        <a href="#"><img src="../assets/fluidicon.png" class="rounded float-left mr-2"
                                         width="20" height="20" alt="github"></a>
                    </li>
                    <li class="nav-item">
                        <a href="#"><img src="../assets/jianshu.png" class="rounded float-left mr-2"
                                         width="20" height="20" alt="简书"></a>
                    </li>
                    <li class="nav-item">
                        <a href="#"><img src="../assets/favicon.png" class="rounded float-left mr-2"
                                         width="20" height="20" alt="CSDN"></a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>