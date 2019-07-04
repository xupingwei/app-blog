<template>
    <div class="list-article-brief">
        <el-timeline>
            <el-timeline-item v-for="article in articleList"
                              :timestamp="article.pubTime"
                              :key="article.pubTime"
                              placement="top">
                <el-card>
                    <div class="article-brief-title">
                        <h4>
                            <el-link @click="jumpDetails(article)">{{article.title}}</el-link>
                        </h4>
                    </div>
                    <p>{{article.brief}}</p>
                    <div class="i">
                        <el-link>{{article.browse}}<i class="el-icon-view el-icon--right"></i></el-link>
                        <el-link>{{article.like}}<i class="el-icon-thumb el-icon--right"></i></el-link>
                        <el-link>{{article.comment}}<i class="el-icon-chat-dot-square el-icon--right"></i></el-link>
                    </div>
                </el-card>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script>
    export default {
        name: "ListArticleBrief",
        props: {
            articleList: Array()
        },
        methods: {
            jumpDetails(article) {
                let routeUrl = this.$router.resolve({
                    name: 'detailsLink',
                    params: {
                        article: article
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

    .list-article-brief .el-card p {
        font-size: 11px;
        margin-top: 5px;
    }

    .article-brief-title .el-link {
        float: right;
    }

    .i {
        float: right;
        margin-bottom: 10px;

    }

    .i i {
        margin-right: 10px;
        text-align: right;
        color: #3a84ff;
    }

    .i .el-link {
        font-size: 11px;
        color: #3a84ff;
    }
</style>