<template>
    <div class="article-brief">
        <el-timeline>
            <el-timeline-item v-for="article in artList" :key="article.pubTime"
                              :timestamp="article.pubTime"
                              placement="top">
                <el-card>
                    <div class="article-brief-title">
                        <h4>
                            <el-link @click="jumpDetails(article)">{{article.title}}</el-link>
                        </h4>
                        <el-link @click="jumpDetails(article)">详情<i class="el-icon-view el-icon--right"></i></el-link>
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
        props: {
            articleList: Array
        },
        data() {
            return {
                artList: this.articleList
            }
        },
        methods: {
            jumpDetails(article) {
                // eslint-disable-next-line no-console
                console.log(article);
                let routeUrl = this.$router.resolve({
                    name: 'detailsLink',
                    params: {
                        article: this.artList[0]
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