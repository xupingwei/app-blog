<template>
    <div class="hot-brief">
        <el-divider></el-divider>
        <div class="hot-brief-title">
            <p>Card组件Card组件Card组件</p>
            <div class="i">
                <i class="el-icon-view"></i>12
                <i class="el-icon-thumb"></i>12
                <i class="el-icon-chat-dot-square"></i>12
            </div>
        </div>
        <p class="text-brief-size">Card 组件包括header和body部分，Card 组件包括header和body部分，Card 组件包括header和body部分
        </p>
    </div>
</template>

<script>
    export default {
        name: "HotBrief"
    }
</script>

<style scoped>
    .hot-brief-title {
        color: black;
        font-size: 12px;
        font-weight: bold;
        margin-bottom: 5px;
        height: 20px;
    }

    .hot-brief-title p {
        margin-right: 10px;
        float: left;
    }

    .hot-brief-title .i {
        text-align: center;
        height: 20px;
        line-height: 20px;
        float: right;
    }

    .hot-brief-title .i i {
        margin-left: 8px;
        margin-right: 2px;
    }

    .text-brief-size {
        color: #000000;
        font-size: 11px;
    }
</style>