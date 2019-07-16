<template>
    <div class="create-article">
        <div class="title">
            <el-input
                    style="width: 60%; margin-bottom: 10px;"
                    :clearable="true"
                    type="text"
                    placeholder="输入文章标题"
                    v-model="articleTitle"
                    maxlength="100"
                    show-word-limit></el-input>
        </div>
        <mavon-editor class="mavon-editor"
                      :ishljs="true"
                      :tabSize="2"
                      :toolbarsFlag="true"
                      :boxShadow="true"
                      placeholder="开始编辑..."
                      fontSize="15px"
                      codeStyle="monokai-sublime"
                      :subfield="true"
                      :navigation="false"
                      :toolbars="markdownOption"
                      v-model="handbook"/>
        <el-divider></el-divider>
        <div class="footer">
            <el-row :gutter="10">
                <el-col :span="2">
                    <p class="label-text">文章简介：</p>
                </el-col>
                <el-col :span="16">
                    <div class="text-area" v-html="articleBrief"></div>
                </el-col>
                <el-col :span="4" :offset="1">
                    <el-button type="primary" @click="excerptBrief()">自动摘录</el-button>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="2"><p class="label-text">文章分类:</p></el-col>
                <el-col :span="6">
                    <el-select v-model="selectedCategory" placeholder="请选择文章分类">
                        <el-option
                                v-for="item in categories"
                                :key="item"
                                :label="item"
                                :value="item">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="2" :offset="1">
                    <p class="label-text">文章标签：</p>
                </el-col>
                <el-col :span="9">
                    <el-tag
                            :key="tag"
                            v-for="tag in dynamicTags"
                            closable
                            :disable-transitions="false"
                            @close="handleClose(tag)">
                        {{tag}}
                    </el-tag>
                    <el-input
                            class="input-new-tag"
                            v-if="inputVisible"
                            v-model="inputValue"
                            ref="saveTagInput"
                            size="small"
                            @keyup.enter.native="handleInputConfirm"
                            @blur="handleInputConfirm">
                    </el-input>
                    <el-button v-else class="button-new-tag" size="small" @click="showInput">+添加标签</el-button>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="10" :offset="2">
                    <el-button type="danger" @click="publishArticle(1)">发布文章</el-button>
                    <el-button type="danger" plain @click="publishArticle(-1)">保存为草稿</el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import marked from 'marked'

    export default {
        name: "CreateArticle",
        data() {
            return {
                articleTitle: "",
                dynamicTags: [],
                inputVisible: false,
                inputValue: "",
                categories: ["设计模式", "Java编程技巧"],
                selectedCategory: "",
                articleBrief: "",
                markdownOption: {
                    bold: true, // 粗体
                    italic: true, // 斜体
                    header: true, // 标题
                    underline: true, // 下划线
                    strikethrough: true, // 中划线
                    mark: true, // 标记
                    superscript: true, // 上角标
                    subscript: true, // 下角标
                    quote: true, // 引用
                    ol: true, // 有序列表
                    ul: true, // 无序列表
                    link: true, // 链接
                    imagelink: true, // 图片链接
                    code: true, // code
                    table: true, // 表格
                    fullscreen: true, // 全屏编辑
                    readmodel: true, // 沉浸式阅读
                    htmlcode: true, // 展示html源码
                    help: true, // 帮助
                    /* 1.3.5 */
                    undo: true, // 上一步
                    redo: true, // 下一步
                    trash: true, // 清空
                    save: true, // 保存（触发events中的save事件）
                    /* 1.4.2 */
                    navigation: true, // 导航目录
                    /* 2.1.8 */
                    alignleft: true, // 左对齐
                    aligncenter: true, // 居中
                    alignright: true, // 右对齐
                    /* 2.2.1 */
                    subfield: true, // 单双栏模式
                    preview: true, // 预览
                },
                handbook: "# 这是一级标题\n" +
                    "## 这是二级标题\n" +
                    "### 这是三级标题\n" +
                    "#### 这是四级标题\n" +
                    "##### 这是五级标题\n" +
                    "###### 这是六级标题\n" +
                    "**这是加粗的文字**\n" +
                    "*这是倾斜的文字*`\n" +
                    "***这是斜体加粗的文字***\n" +
                    "~~这是加删除线的文字~~\n" +
                    ">这是引用的内容\n" +
                    ">>这是引用的内容\n" +
                    ">>>>>>>>>>这是引用的内容\n" +
                    "[简书](http://jianshu.com)\n" +
                    "[百度](http://baidu.com)\n" +
                    "- 列表内容\n" +
                    "+ 列表内容\n" +
                    "* 列表内容\n" +
                    "\n" +
                    "表头|表头|表头\n" +
                    "---|:--:|---:\n" +
                    "内容|内容|内容\n" +
                    "内容|内容|内容\n" +
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
            }
        },
        mounted() {
            this.markdown()
        },
        methods: {
            markdown() {
                marked.setOptions({
                    renderer: new marked.Renderer(),
                    gfm: true,
                    tables: true,
                    breaks: false,
                    pedantic: false,
                    sanitize: false,
                    smartLists: true,
                    smartypants: false
                });
            },
            handleClose(tag) {
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },
            showInput() {
                this.inputVisible = true;
                this.$nextTick(_ => {
                    this.$refs.saveTagInput.$refs.input.focus();
                });
            },

            handleInputConfirm() {
                let inputValue = this.inputValue;
                if (inputValue) {
                    this.dynamicTags.push(inputValue);
                }
                this.inputVisible = false;
                this.inputValue = '';
            },
            excerptBrief() {
                if (this.handbook !== "") {
                    this.articleBrief = marked(this.handbook.length > 200 ?
                        this.handbook.substring(0, 200) : this.handbook);
                    console.log(this.articleBrief);
                }
            },
            publishArticle(status) {
                //status 1:发布   -1：保存为草稿

                if (this.articleTitle === "") {
                    this.$notify.warning({
                        title: "警告",
                        message: "请填写文章标题"
                    });
                    return;
                }

                if (this.articleBrief === "") {
                    this.$notify.warning({
                        title: "警告",
                        message: "请填写文章简介"
                    });
                    return;
                }

                if (this.handbook === "") {
                    this.$notify.warning({
                        title: "警告",
                        message: "请填写文章内容"
                    });
                    return;
                }

                if (this.selectedCategory === "") {
                    this.$notify.warning({
                        title: "警告",
                        message: "请选择文章分类"
                    });
                    return;
                }

                if (this.dynamicTags.length === 0) {
                    this.$notify.warning({
                        title: "警告",
                        message: "请添加文章标签"
                    });
                    return;
                }
                let tagParams = "";
                this.dynamicTags.forEach(val => {
                    tagParams += val + "|";
                });
                console.log(tagParams);
                console.log(JSON.stringify(this.selectedCategory));
                let params = new URLSearchParams();
                params.append("brief", this.articleBrief);
                params.append("title", this.articleTitle);
                params.append("author", this.$store.state.userName);
                params.append("content", this.handbook);
                params.append("keyWords", JSON.stringify(tagParams));
                params.append("classify", JSON.stringify(this.selectedCategory));

                this.axios.post("/admin/article/createArticle", params)
                    .then(response => {
                        return response.data;
                    })
                    .then(data => {
                        if (data.code === 0) {
                            return data.data;
                        } else {
                            this.$notify.error({
                                title: "错误",
                                message: data.msg
                            });
                        }
                    })
                    .then(data => {
                        this.$notify.success("文章发布成功!")
                    })
                    .catch(error => {
                        this.$notify.error({
                            title: "错误",
                            message: error.message
                        });
                    });

            }
        }
    }
</script>

<style scoped>
    .create-article {
        width: 100%;
        height: 100%;
    }

    .mavon-editor {
        width: 100%;
        min-height: 500px;
    }

    .footer {
        padding: 10px;
        margin-right: 5px;
        margin-bottom: 5px;
        border: 1px solid #e1e1e1;
    }

    .el-row {
        margin-top: 20px;
        min-height: 100px;
    }

    .label-text {
        font-size: 11px;
    }

    .el-tag + .el-tag {
        margin-left: 10px;
    }

    .button-new-tag {
        margin-left: 10px;
        height: 32px;
        line-height: 30px;
        padding-top: 0;
        padding-bottom: 0;
    }

    .input-new-tag {
        width: 90px;
        margin-left: 10px;
        vertical-align: bottom;
    }

    .text-area {
        width: 100%;
        display: inline-block;
        padding: 10px;
        min-height: 60px;
        border-radius: 5px;
        border: 1px solid #e1e1e1;
    }
</style>