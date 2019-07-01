<template>
    <div class="main">
        <app-header></app-header>
        <div class="app-content">
            <router-view/>
        </div>
    </div>
</template>


<script>


    import Header from "../components/Header";

    export default {
        name: 'app',
        components: {
            "app-header": Header,
        }
    }
</script>

<style lang="scss">
    .app-content {
        margin: 10px;
    }
</style>