<template>
    <div class="home">
        <article-brief></article-brief>
    </div>
</template>

<script>

    import ArticleBrief from "../components/ArticleBrief";

    export default {
        name: 'home',
        components: {
            "article-brief": ArticleBrief
        }
    }

</script>
<style scoped>
    .home {

    }
</style>
