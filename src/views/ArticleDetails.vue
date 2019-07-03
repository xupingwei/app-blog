<template>
    <div class="article-details">
        <el-row :gutter="10">
            <el-col :span="13" :offset="1">
                <h3>这是标题这是标题这是标题</h3>
            </el-col>
            <el-col :span="8" :offset="2">
                <el-card>
                    <div>
                        <el-avatar icon="el-icon-user-solid"></el-avatar>
                        <!--                        <h4>博客专家</h4>-->
                    </div>
                    <el-divider></el-divider>
                    <template>
                        <el-row class="details-right-text">
                            <el-col :span="8">浏览</el-col>
                            <el-col :span="8">点赞</el-col>
                            <el-col :span="8">评论</el-col>
                        </el-row>
                        <el-row class="details-right-number">
                            <el-col :span="8">15</el-col>
                            <el-col :span="8">567</el-col>
                            <el-col :span="8">2345</el-col>
                        </el-row>
                    </template>
                    <el-divider></el-divider>
                    <template>
                        <el-row class="details-right-icon">
                            <el-col :span="8">
                                <el-button type="primary" icon="el-icon-chat-line-round" circle></el-button>
                            </el-col>
                            <el-col :span="8">
                                <el-button type="primary" icon="el-icon-message" circle></el-button>
                            </el-col>
                            <el-col :span="8">
                                <el-button type="primary" icon="el-icon-chat-dot-round" circle></el-button>
                            </el-col>
                        </el-row>
                    </template>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "ArticleDetails"
    }
</script>

<style scoped>
    .article-details {
        margin: 10px;
    }

    .details-right-text {
        font-size: 14px;
        text-align: center;
    }

    .details-right-number {
        text-align: center;
        font-size: 12px;
        margin-top: 10px;
    }

    .details-right-icon {
        text-align: center;
        font-size: 18px;
        margin-top: 10px;
    }
</style>