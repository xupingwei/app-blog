<template>
    <div class="home">
        <el-row :gutter="10">
            <el-col :span="14" :offset='1'>
                <home-article-brief></home-article-brief>
            </el-col>
            <el-col :span="8" :offset='1'>
                <el-card>
                    <h4>热门文章</h4>
                    <hot-brief></hot-brief>
                    <hot-brief></hot-brief>
                    <hot-brief></hot-brief>
                    <hot-brief></hot-brief>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>

    import HomeArticleBrief from "../components/HomeArticleBrief";
    import HotBrief from "../components/HotBrief";

    export default {
        name: 'home',
        components: {
            "home-article-brief": HomeArticleBrief,
            "hot-brief": HotBrief
        }
    }

</script>
<style scoped>
    .home {
        margin: 10px;
    }
</style>
