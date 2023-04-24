<template>
    <div class="main-page">
        <SideBar/>
        <MainInfo/>

    </div>
</template>

<script>
    import SideBar from "@/components/SideBar/SideBar";
    import MainInfo from "@/components/MainInfo/MainInfo";
    export default {
        components:{MainInfo, SideBar}

    }
</script>

<style scoped>
@import "MainPage.scss";
</style>