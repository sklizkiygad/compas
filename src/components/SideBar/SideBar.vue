<template>
    <div class="side-bar">
        <img class="side-bar__logo" src="../../assets/img/compas.png" alt="">

        <ul class="side-bar__list">
            <li v-for="item in sideBarList" >
                <div class="side-bar__list__info"  @click="selectSideBarItem(item.id)" :class="item.selected ? 'selected':''">
                    {{item.name}}
                    <img
                            v-if="item.children"
                            @click="item.children.isOpen = !item.children.isOpen"
                            :src="item.children.isOpen ? require('../../assets/img/arrup.png'):require('../../assets/img/arrdown.png')"/>
                </div>

                <div class="sub-list" v-if="item.children?.isOpen">
                    <ul >
                        <li :class="subItem.selected ? 'selected':''"  v-for="subItem in item.children.items" @click="selectSideBarSubItem(item.id,subItem.id)">
                            {{subItem.name}}
                        </li>
                    </ul>

                </div>

            </li>


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
                isExitOpen:false,
                sideBarList:[
                    {id:0,name:'Логистика',selected:false},
                    {id:1,name:'Перевозчики',selected:false},
                    {id:2,name:'Задачи',selected:false},
                    {id:3,name:'Аналитика',selected:false,children:{isOpen:false,items:[
                            {id:0,name:'Справочник'},
                            {id:1,name:'База'},
                            {id:2,name:'Ваза'},
                        ]}},
                    {id:4,name:'Адреса',selected:false},
                    {id:5,name:'Товары',selected:false},
                    {id:6,name:'Информация для склада',selected:false},
                    {id:7,name:'Адреса',selected:false},
                ]
            }

        },
        methods:{
            openExit(){
                this.isExitOpen=!this.isExitOpen
            },
            selectSideBarItem(e){
                this.sideBarList.forEach(item=>{
                    if(item.id === e ){
                        item.selected=true
                    }
                    else{
                        if(item.children){
                            item.children.items.map(subItem=>{
                                subItem.selected=false
                            })
                        }
                        item.selected=false
                    }

                })

            },
            selectSideBarSubItem(it,subIt){
                this.sideBarList.map(item=>{
                    if(item.id === it ){
                        item.selected = false
                        item.children.items.map((subItem)=>{
                            if(subItem.id===subIt){
                                subItem.selected=true
                            }
                            else{
                                subItem.selected=false
                            }

                        })
                    }
                    else{
                        if(item.children){
                            item.children.items.map(subItem=>{
                                subItem.selected=false
                            })

                        }
                        item.selected=false
                    }

                })

            }
        }

    }
</script>

<style lang="scss">
@import "SideBar";
</style>