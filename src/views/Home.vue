<template>
    <div class="home">
        <el-row :gutter="10">
            <el-col :span="14" :offset='1'>
                <home-article-brief :articleList="articleList"></home-article-brief>
            </el-col>
            <el-col :span="8" :offset='1'>
                <el-card>
                    <h4>热门文章</h4>
                    <hot-brief v-for="article in articleList"
                               :article="article"
                               :key="article.pubTime"></hot-brief>
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
        data() {
            return {
                articleList: [
                    {
                        title: "更新 Github 模板更新 Github 模板更新 Github 模板",   //标题
                        comment: 0,  //评论
                        browse: 0,    //浏览
                        like: 8,    //点赞
                        pubTime: "2018/4/12 13:45",  //发布时间
                        brief: "王小虎 提交于 2018/4/3 20:46王小虎 提交于 2018/4/3 20:46王小虎 提交于 2018/4/3 20:46\n" +
                            " 王小虎 提交于 2018/4/3 20:46王小虎 提交于 2018/4/3 20:46王小虎 提交于 2018/4/3 20:46\n" +
                            " 王小虎 提交于 2018/4/3 20:46王小虎 提交于 2018/4/3 20:46王小虎 提交于 2018/4/3 20:46",  //文章简介
                        content: "",   //文章内容
                        author: "LiWei",  //作者
                        keyWords: "java|android|go", //标签
                        classify: "Android设计模式|java设计模式"   //文章分类
                    },
                    {
                        title: "更新 Github 模板更新 Github 模板更新 Github 模板",   //标题
                        comment: 0,  //评论
                        browse: 2,    //浏览
                        like: 0,    //点赞
                        pubTime: "2018/4/13 13:45",  //发布时间
                        brief: "王小虎 提交于 2018/4/3 20:46王小虎 提交于 2018/4/3 20:46王小虎 提交于 2018/4/3 20:46\n" +
                            " 王小虎 提交于 2018/4/3 20:46王小虎 提交于 2018/4/3 20:46王小虎 提交于 2018/4/3 20:46\n" +
                            " 王小虎 提交于 2018/4/3 20:46王小虎 提交于 2018/4/3 20:46王小虎 提交于 2018/4/3 20:46",  //文章简介
                        content: "",   //文章内容
                        author: "LiWei",  //作者
                        keyWords: "java|android|go", //标签
                        classify: "Android设计模式|java设计模式"   //文章分类
                    },
                    {
                        title: "模板更新 Github 模板",   //标题
                        comment: 0,  //评论
                        browse: 0,    //浏览
                        like: 0,    //点赞
                        pubTime: "2018/4/14 13:45",  //发布时间
                        brief: "王小虎 提交于 2018/4/3 20:46王小虎 提交于 2018/4/3 20:46王小虎 提交于 2018/4/3 20:46\n" +
                            " 王小虎 提交于 2018/4/3 20:46王小虎 提交于 2018/4/3 20:46王小虎 提交于 2018/4/3 20:46\n" +
                            " 王小虎 提交于 2018/4/3 20:46王小虎 提交于 2018/4/3 20:46王小虎 提交于 2018/4/3 20:46",  //文章简介
                        content: "",   //文章内容
                        author: "LiWei",  //作者
                        keyWords: "java|android", //标签
                        classify: "Android设计模式|java设计模式"   //文章分类
                    },
                    {
                        title: "更新 Github 模板更新 Github 模板更新 Github 模板",   //标题
                        comment: 0,  //评论
                        browse: 0,    //浏览
                        like: 0,    //点赞
                        pubTime: "2018/4/15 13:45",  //发布时间
                        brief: "王小虎 提交于 2018/4/3 20:46王小虎 提交于 2018/4/3 20:46王小虎 提交于 2018/4/3 20:46\n" +
                            " 王小虎 提交于 2018/4/3 20:46王小虎 提交于 2018/4/3 20:46王小虎 提交于 2018/4/3 20:46\n" +
                            " 王小虎 提交于 2018/4/3 20:46王小虎 提交于 2018/4/3 20:46王小虎 提交于 2018/4/3 20:46",  //文章简介
                        content: "",   //文章内容
                        author: "LiWei",  //作者
                        keyWords: "java|android|go", //标签
                        classify: "Android设计模式|java设计模式"   //文章分类
                    },
                    {
                        title: "更新 Github 模板更新 Github 模板更新",   //标题
                        comment: 0,  //评论
                        browse: 0,    //浏览
                        like: 0,    //点赞
                        pubTime: "2018/4/16 13:45",  //发布时间
                        brief: "王小虎 提交于 2018/4/3 20:46王小虎 提交于 2018/4/3 20:46王小虎 提交于 2018/4/3 20:46\n" +
                            " 王小虎 提交于 2018/4/3 20:46王小虎 提交于 2018/4/3 20:46王小虎 提交于 2018/4/3 20:46\n" +
                            " 王小虎 提交于 2018/4/3 20:46王小虎 提交于 2018/4/3 20:46王小虎 提交于 2018/4/3 20:46",  //文章简介
                        content: "",   //文章内容
                        author: "LiWei",  //作者
                        keyWords: "java|android|go", //标签
                        classify: "Android设计模式|java设计模式"   //文章分类
                    }
                ]
            }
        },
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
