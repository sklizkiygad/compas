<template>
    <div class="side-bar">
        <img class="side-bar__logo" src="../../assets/img/compas.png" alt="">

        <ul class="side-bar__list">
            <li>Логистика</li>
            <li>Перевозчики</li>
            <li>Задачи</li>
            <li>Аналитика</li>
            <li>Адреса</li>
            <li>Товары</li>
            <li>Информация для склада</li>
            <li>Адреса</li>


        </ul>

        <div class="side-bar__profile-wrapper">
            <div class="side-bar__profile__exit" v-show="isExitOpen">
                <p>Личные настройки</p>
                <p>Выйти</p>
            </div>
            <div class="side-bar__profile" @click="openExit">

                <div class="side-bar__profile__profile-img">Д</div>
                <p>Денис Потемкин</p>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        data(){
            return{
                isExitOpen:false
            }

        },
        methods:{
            openExit(){
                this.isExitOpen=!this.isExitOpen
            }
        }

    }
</script>

<style lang="scss">
@import "SideBar";
</style>