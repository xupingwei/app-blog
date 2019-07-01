<template>
    <div class="article">
        <el-row :gutter="10">
            <el-col :span="14" :offset="1">
                <list-article-brief></list-article-brief>
            </el-col>

            <el-col :span="8" :offset="1">
                <el-card>
                    <h4>文章分类</h4>
                    <el-divider></el-divider>
                    <el-menu text-color="#fff"
                             background-color="#545c64"
                             active-text-color="#ffd04b">
                        <el-menu-item index="4">
                            Java<i class="article-count">15篇</i>
                        </el-menu-item>
                        <el-menu-item index="5">
                            Android<i class="article-count">15篇</i>
                        </el-menu-item>
                        <el-menu-item index="6">
                            软件设计架构 <i class="article-count">15篇</i>
                        </el-menu-item>
                    </el-menu>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import ListArticleBrief from "../components/ListArticleBrief";

    export default {
        name: "Article",
        components: {
            "list-article-brief": ListArticleBrief
        }
    }
</script>

<style scoped>
    .article {
        margin: 10px;
    }

    .el-row h4 {
        margin-left: 10px;
        margin-bottom: 10px;
        color: black;
    }

    .article-count {
        float: right;
        color: white;
    }
</style>