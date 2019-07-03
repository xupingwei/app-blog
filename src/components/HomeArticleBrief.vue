<template>
    <div class="article-brief">
        <el-timeline>
            <el-timeline-item v-for="article in articleList" :key="article"
                              :timestamp="article.pubTime"
                              placement="top">
                <el-card>
                    <div class="article-brief-title">
                        <h4>
                            <el-link>{{article.title}}</el-link>
                        </h4>
                        <el-link @click="jumpDetails()">详情<i class="el-icon-view el-icon--right"></i></el-link>
                    </div>
                    <p>{{article.brief}}</p>
                </el-card>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script>
    export default {
        name: "article-brief",
        data() {
            return {
                articleList: [
                    {
                        title: "更新 Github 模板更新 Github 模板更新 Github 模板",   //标题
                        comment: 0,  //评论
                        browse: 0,    //浏览
                        like: 0,    //点赞
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
                        browse: 0,    //浏览
                        like: 0,    //点赞
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
                        browse: 0,    //浏览
                        like: 0,    //点赞
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
                        browse: 0,    //浏览
                        like: 0,    //点赞
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
                        browse: 0,    //浏览
                        like: 0,    //点赞
                        pubTime: "2018/4/12 13:45",  //发布时间
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
        methods: {
            jumpDetails() {
                let routeUrl = this.$router.resolve({
                    name: 'detailsLink',
                    params: {
                        article: this.articleList[0]
                    }
                });
                window.open(routeUrl.href, '_blank');
            }
        }
    }
</script>

<style scoped>
    .article-brief-title {
        height: 20px;
    }

    .article-brief-title h4 {
        float: left;
    }

    .article-brief-title .el-link {
        font-weight: bold;
    }

    .article-brief .el-card p {
        font-size: 11px;
        margin-top: 5px;
    }

    .article-brief-title .el-link {
        float: right;
    }
</style>