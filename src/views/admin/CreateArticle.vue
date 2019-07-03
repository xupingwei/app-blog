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
    </div>
</template>

<script>
    export default {
        name: "CreateArticle",
        data() {
            return {
                articleTitle: "",
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
</style>