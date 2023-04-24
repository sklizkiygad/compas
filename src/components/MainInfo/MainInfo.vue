<template>
    <div class="main-info">
        <h1>Проведение ТО и мелкий ремонт</h1>
        <NavBarInfo/>
        <TableTemplate/>



    </div>
</template>

<script>
    import NavBarInfo from "@/components/NavBarInfo/NavBarInfo";
    import TableTemplate from "@/components/TableTemplate/TableTemplate";
    export default {
        components:{NavBarInfo,TableTemplate}


    }
</script>

<style lang="scss">
    @import "MainInfo";

</style>