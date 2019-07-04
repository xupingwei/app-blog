<template>
    <div class="article">
        <el-row :gutter="10">
            <el-col :span="14" :offset="1">
                <list-article-brief :articleList="articleList"></list-article-brief>
            </el-col>

            <el-col :span="8" :offset="1">
                <el-card>
                    <h4>文章分类</h4>
                    <el-divider></el-divider>
                    <el-menu text-color="#fff"
                             background-color="#545c64"
                             active-text-color="#ffd04b">
                        <el-menu-item v-for="category in categories" :key="category.createTime"
                                      :index="category.createTime">
                            {{category.classify}}<i class="article-count">{{category.count}}篇</i>
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
        },
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
                ],
                categories: [
                    {
                        classify: "Android设计模式",    //分类名称
                        createTime: "2019-07-04 18:30:35", //创建时间
                        count: 5     //文章篇数
                    },
                    {
                        classify: "java反射",    //分类名称
                        createTime: "2019-07-05 18:30:35", //创建时间
                        count: 35     //文章篇数
                    },
                    {
                        classify: "java垃圾回收",    //分类名称
                        createTime: "2019-07-06 18:30:35", //创建时间
                        count: 15     //文章篇数
                    },
                    {
                        classify: "多线程编程",    //分类名称
                        createTime: "2019-07-07 18:30:35", //创建时间
                        count: 13     //文章篇数
                    },
                    {
                        classify: "Vue从入门到放弃",    //分类名称
                        createTime: "2019-07-08 18:30:35", //创建时间
                        count: 25     //文章篇数
                    }

                ]

            }
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