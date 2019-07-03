<template>
    <div class="article-details">
        <el-row :gutter="10">
            <el-col :span="16" :offset='1'>
                <el-card>
                    <h2>这是标题这是标题这是标题</h2>
                    <div class="article-left-info">
                        <p>2019年07月02日 18:00:35</p>
                        <div class="key-word">
                            <p>关键字：</p>
                            <el-tag>Java</el-tag>
                            <el-tag>Android</el-tag>
                            <el-tag>持续集成</el-tag>
                        </div>
                    </div>
                    <div class="article-classify">
                        <p>个人分类：</p>
                        <el-link type="primary">Android设计模式</el-link>
                        <el-link type="primary">java设计模式</el-link>
                    </div>
                    <!--                    <pre v-highlightA>-->
                    <!--                        <code>{{article.content}}</code>-->
                    <!--                    </pre>-->
                    <mavon-editor class="mavon-editor"
                                  :subfield="false"
                                  :defaultOpen="'preview'"
                                  :toolbarsFlag="false"
                                  :editable="false"
                                  :scrollStyle="true"
                                  codeStyle="monokai-sublime"
                                  :ishljs="true"
                                  v-model="article.content"/>
                </el-card>
            </el-col>
            <el-col :span="6" :offset='1'>
                <el-card>
                    <div>
                        <el-avatar :size="60"
                                   :src="headerUrl"
                                   icon="el-icon-user-solid">
                        </el-avatar>
                        <h5>守住本心，保持本源;</h5>
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
                                <el-tooltip class="item" effect="dark" content="打开QQ留言?" placement="top">
                                    <el-button type="primary" icon="el-icon-chat-round" circle></el-button>
                                </el-tooltip>
                            </el-col>
                            <el-col :span="8">
                                <el-tooltip class="item" effect="dark" content="发送邮件留言?" placement="top">
                                    <el-button type="primary" icon="el-icon-message" circle></el-button>
                                </el-tooltip>
                            </el-col>
                            <el-col :span="8">
                                <el-tooltip class="item" effect="dark" content="本站内留言?" placement="top">
                                    <el-button type="primary" icon="el-icon-chat-dot-square" circle></el-button>
                                </el-tooltip>
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
        name: "ArticleDetails",
        data() {
            return {
                article: {
                    content: "# 这是一级标题\n" +
                        "## 这是二级标题\n" +
                        "### 这是三级标题\n" +
                        "#### 这是四级标题\n" +
                        "##### 这是五级标题\n" +
                        "###### 这是六级标题\n" +
                        "\n" +
                        "**这是加粗的文字**\n" +
                        "*这是倾斜的文字*`\n" +
                        "***这是斜体加粗的文字***\n" +
                        "~~这是加删除线的文字~~\n" +
                        "\n" +
                        ">这是引用的内容\n" +
                        ">>这是引用的内容\n" +
                        ">>>>>>>>>>这是引用的内容\n" +
                        "\n" +
                        "---\n" +
                        "----\n" +
                        "***\n" +
                        "*****\n" +
                        "\n" +
                        "[简书](http://jianshu.com)\n" +
                        "[百度](http://baidu.com)\n" +
                        "\n" +
                        "- 列表内容\n" +
                        "+ 列表内容\n" +
                        "* 列表内容\n" +
                        "\n" +
                        "表头|表头|表头\n" +
                        "---|:--:|---:\n" +
                        "内容|内容|内容\n" +
                        "内容|内容|内容\n" +
                        "\n" +
                        "```java\n" +
                        " @Override\n" +
                        "    public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {\n" +
                        "        //定义一个转换消息的对象a\n" +
                        "        FastJsonHttpMessageConverter fastConverter = new FastJsonHttpMessageConverter();\n" +
                        "        //添加fastjson的配置信息 比如 ：是否要格式化返回的json数据\n" +
                        "        FastJsonConfig fastJsonConfig = new FastJsonConfig();\n" +
                        "        fastJsonConfig.setSerializerFeatures(SerializerFeature.PrettyFormat,\n" +
                        "                SerializerFeature.WriteNullStringAsEmpty,\n" +
                        "                SerializerFeature.WriteMapNullValue,\n" +
                        "                SerializerFeature.WriteNullListAsEmpty);\n" +
                        "        //在转换器中添加配置信息\n" +
                        "        fastConverter.setFastJsonConfig(fastJsonConfig);\n" +
                        "        //将转换器添加到converters中\n" +
                        "        converters.add(fastConverter);\n" +
                        "    }\n" +
                        "\n" +
                        "    @Override\n" +
                        "    public void addCorsMappings(CorsRegistry registry) {\n" +
                        "        //前后端分离跨域\n" +
                        "        registry.addMapping(\"/**\")\n" +
                        "                .allowedOrigins(\"*\")  //配置IP地址\n" +
                        "                .allowCredentials(true)\n" +
                        "                .allowedMethods(\"GET\", \"POST\", \"DELETE\", \"PUT\")\n" +
                        "                .maxAge(3600);\n" +
                        "    }\n" +
                        "\n" +
                        "```"
                },
                headerUrl: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4259300811,497831842&fm=26&gp=0.jpg"
            }
        }
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

    .el-avatar {
        display: block;
        margin: 0 auto;
    }

    h5 {
        margin: 10px auto;
        text-align: center;
    }

    h2 {
        text-align: center;
    }

    .article-left-info {
        margin-top: 20px;
        display: flex;
        height: 40px;
        line-height: 40px;
    }

    .article-left-info p {
        color: gray;
        font-size: 14px;
    }

    .key-word {
        display: inline-flex;
        margin-left: 20px;
        height: 40px;
        line-height: 40px;
        text-align: center;
    }

    .el-tag {
        margin-left: 10px;
        height: 30px;
        text-align: center;
        margin-top: 5px;
    }

    .article-classify {
        font-size: 12px;
        color: gray;
        margin-top: 10px;
        display: flex;
    }

    .el-link {
        font-size: 12px;
        margin-left: 15px;
    }

    .mavon-editor {
        margin-top: 20px;
    }
</style>