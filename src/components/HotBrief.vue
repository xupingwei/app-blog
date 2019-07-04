<template>
    <div class="hot-brief">
        <el-divider></el-divider>
        <div class="hot-brief-title">
            <el-link @click="jumpDetails(article)">{{article.title}}</el-link>
            <div class="i">
                <i class="el-icon-view"></i>{{article.browse}}
                <i class="el-icon-thumb"></i>{{article.like}}
                <i class="el-icon-chat-dot-square"></i>{{article.comment}}
            </div>
        </div>
        <p class="text-brief-size">
            {{article.brief.length>100?article.brief.substring(0,100)+"...":article.brief}}
        </p>
    </div>
</template>

<script>
    export default {
        name: "HotBrief",
        props: {
            article: {}
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
    .hot-brief-title {
        color: black;
        font-size: 12px;
        font-weight: bold;
        margin-bottom: 5px;
        height: 20px;
    }


    .hot-brief-title .el-link {
        margin-right: 10px;
        float: left;
        display: block;
        font-weight: bold;
    }

    .hot-brief-title .i {
        text-align: center;
        height: 20px;
        line-height: 20px;
        float: right;
        margin-right: 10px;
    }

    .hot-brief-title .i i {
        margin-left: 8px;
        margin-right: 2px;
    }

    .text-brief-size {
        color: #000000;
        font-size: 11px;
    }

    .hot-brief p {
        display: inline-block;
        line-height: 18px;
    }
</style>