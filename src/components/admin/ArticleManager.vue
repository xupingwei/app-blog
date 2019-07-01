<template>
    <div class="article-manager">
        <el-table
                :data="tableData"
                border
                :row-class-name="tableRowClassName"
                style="width: 100%">
            <el-table-column
                    prop="articleTitle"
                    label="文章标题"
                    width="320">
            </el-table-column>
            <el-table-column
                    prop="publishTime"
                    width="180"
                    label="发布时间">
            </el-table-column>
            <el-table-column
                    prop="tag"
                    label="分类"
                    width="120">
                <el-link type="warning">警告链接</el-link>
                <el-link type="danger">警告链接</el-link>
            </el-table-column>
            <el-table-column
                    prop="readCount"
                    label="浏览量"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="followCount"
                    width="100"
                    label="点赞量">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="success"
                            plain
                            @click="handleLookup(scope.$index, scope.row)">查看
                    </el-button>
                    <el-button
                            size="mini"
                            type="warning"
                            plain
                            @click="handleHome(scope.$index, scope.row)">首页推荐
                    </el-button>
                    <el-button
                            size="mini"
                            type="primary"
                            plain
                            @click="handleEdit(scope.$index, scope.row)">编辑
                    </el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            plain
                            @click="handleDelete(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "ArticleManager",
        data() {
            return {
                tableData: [
                    {
                        articleTitle: "在坐飞机来这儿之前，我只来得及将手稿匆匆浏览了一遍",
                        publishTime: "2019-07-01 18:30:30",
                        readCount: 20,
                        followCount: 509
                    },
                    {
                        articleTitle: "在坐飞机来这儿之前，我只来得及将手稿匆匆浏览了一遍",
                        publishTime: "2019-07-01 18:30:30",
                        readCount: 20,
                        followCount: 509
                    },
                    {
                        articleTitle: "在坐飞机来这儿之前，我只来得及将手稿匆匆浏览了一遍",
                        publishTime: "2019-07-01 18:30:30",
                        readCount: 20,
                        followCount: 509
                    },
                    {
                        articleTitle: "在坐飞机来这儿之前，我只来得及将手稿匆匆浏览了一遍",
                        publishTime: "2019-07-01 18:30:30",
                        readCount: 20,
                        followCount: 509
                    }, {
                        articleTitle: "在坐飞机来这儿之前，我只来得及将手稿匆匆浏览了一遍",
                        publishTime: "2019-07-01 18:30:30",
                        readCount: 20,
                        followCount: 509
                    }, {
                        articleTitle: "在坐飞机来这儿之前，我只来得及将手稿匆匆浏览了一遍",
                        publishTime: "2019-07-01 18:30:30",
                        readCount: 20,
                        followCount: 509
                    }, {
                        articleTitle: "在坐飞机来这儿之前，我只来得及将手稿匆匆浏览了一遍",
                        publishTime: "2019-07-01 18:30:30",
                        readCount: 20,
                        followCount: 509
                    }, {
                        articleTitle: "在坐飞机来这儿之前，我只来得及将手稿匆匆浏览了一遍",
                        publishTime: "2019-07-01 18:30:30",
                        readCount: 20,
                        followCount: 509
                    }

                ],
            }
        },
        methods: {
            //编辑
            handleEdit(index, row) {

            },
            //删除
            handleDelete(index, row) {

            },
            //查看
            handleLookup(inex, row) {

            },
            //首页推荐
            handleHome(index, row) {

            },
            tableRowClassName({row, rowIndex}) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            }
        }
    }
</script>

<style scoped>
    .article-manager {
        width: 100%;
        margin: 5px;
    }

    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }
</style>