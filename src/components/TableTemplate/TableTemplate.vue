<template>
    <div class="table-template">
        <div class="table-template__item add">
            <button @click="addRow"> <span>+</span> <p>Добавить строку</p></button>

        </div>

        <div class="table-template__item">
            <div class="table-template__item__header">
                <p v-show="customColumnDefs.length" @click="saveNewColumnsDefs">Сохранить изменения</p>
                <img src="../../assets/img/gear.svg" alt="" @click="isOpenParamsOfTable=!isOpenParamsOfTable">

                <div class="table-template__item__header__options" v-if="isOpenParamsOfTable">
                    <div class="table-template__item__header__options__item">
                        Отображение столбцов <img src="../../assets/img/arrright.png" />
                        <div class="table-template__item__header__options__item__list">
                            <label v-for="item in defaultColumnDefs">
                                <input type="checkbox"
                                       @change="changeColumnDefs"
                                       :value="item.field"
                                       :checked="checkIsInclude(item.field)">
                                {{item.headerName ? item.headerName:item.field}}

                            </label>

                        </div>
                    </div>
                    <div class="table-template__item__header__options__item">
                        Порядок столбцов <img src="../../assets/img/arrright.png" />
                    </div>
                </div>

            </div>

            <div class="table-template__item__table">
                <div style="height: 400px">
                    <ag-grid-vue

                            style="width: 100%; height: 100%;"
                            class="ag-theme-alpine"
                            :columnDefs="columnDefs"
                            @grid-ready="onGridReady"
                            :defaultColDef="defaultColDef"
                            :rowDragManaged="true"
                            :animateRows="true"
                            :rowData="rowData"
                            @column-moved="onColumnMovedHandler"
                    ></ag-grid-vue>
                </div>





            </div>


        </div>


    </div>
</template>

<script>

    import 'ag-grid-community/styles/ag-grid.css';

    import { AgGridVue } from 'ag-grid-vue3';

    import {mapState} from "vuex";
    import {actionCellRenderer} from "@/components/TableTemplate/cellRenderers/actionCellRenderer/actionCellRenderer";
    import {nameOfOneCellRenderer} from "@/components/TableTemplate/cellRenderers/nameOfOneCellRenderer/nameOfOneCellRenderer";
    import {nameCellRenderer} from "@/components/TableTemplate/cellRenderers/nameCellRenderer/nameCellRenderer";
    import {priceCellRenderer} from "@/components/TableTemplate/cellRenderers/priceCellRenderer/priceCellRenderer";
    import {countCellRenderer} from "@/components/TableTemplate/cellRenderers/countCellRenderer/countCellRenderer";
    import {totalCellRenderer} from "@/components/TableTemplate/cellRenderers/totalCellRenderer/totalCellRenderer";


    export default {
        components:{AgGridVue,
            actionCellRenderer,
            nameOfOneCellRenderer,
            nameCellRenderer,
            priceCellRenderer,
        countCellRenderer,
        totalCellRenderer
        },

        data(){
            return{
                columnDefs: [],
                gridApi: null,
                columnApi: null,
                defaultColDef: {
                    resizable: true,
                },
                rowData:[],
                customColumnDefs:[],
                defaultColumnDefs:[
                    { field:'index', headerName: '', minWidth: 50,width:50 , rowDrag: true},
                    { field:'action',headerName: '', minWidth: 25, width:30,  cellRenderer:'actionCellRenderer'},
                    { field:'nameOfOne',headerName: 'Наименование единицы',minWidth: 150, flex: 1, cellRenderer:'nameOfOneCellRenderer' },
                    { field:'price',headerName: 'Цена', flex: 1, cellRenderer:'priceCellRenderer' },
                    { field:'count',headerName: 'Кол-во', flex: 1, cellRenderer:'countCellRenderer' },
                    { field:'name',headerName: 'Название товара', flex: 1,  cellRenderer:'nameCellRenderer' },
                    { field:'total',headerName: 'Итого', flex: 1,  cellRenderer:'totalCellRenderer' },
                ],
                isOpenParamsOfTable:false
            };
        },
        methods:{

            setRowData(){
                this.rowData=this.defaultRecords
                setTimeout(()=>{
                    this.gridApi.setRowData(this.rowData);
                })


            },
            setColumnDefs(){
                this.columnDefs=this.columnDefsStore


            },
            onColumnMovedHandler(e){
                this.customColumnDefs=[]
                e.columnApi.getAllGridColumns().map((column)=>{
                    this.customColumnDefs=[...this.customColumnDefs,column.colDef]

                })
            },
            saveNewColumnsDefs(){
                this.$store.commit('setColumnDefsStore',this.customColumnDefs)
                let newLocalData = JSON.parse(localStorage.getItem('compas'))
                newLocalData.columnDefsStore=this.customColumnDefs
                localStorage.setItem('compas',JSON.stringify(newLocalData))

                this.customColumnDefs=[]
            },
            onGridReady(params) {
                this.gridApi = params.api;
                this.setRowData()

            },
            addRow(){
                this.$store.commit('addRecord')

            },
            checkIsInclude(e){

                let isInclude=false

                this.columnDefsStore.forEach(item=>{

                    if(item.field === e){
                        isInclude=true
                    }
                })
                return isInclude
            },
            changeColumnDefs(e){

                if(!e.target.checked){
                    this.columnDefs=this.columnDefs.filter(item=> item.field !== e.target.value)
                }
                else{
                    this.defaultColumnDefs.forEach((item,index)=>{
                        if(item.field===e.target.value){
                            this.columnDefs.splice(index,0,item)
                        }

                    })
                }

                this.$store.commit('setColumnDefsStore',this.columnDefs)






            }



        },
        computed: mapState([
            'defaultRecords',
            'nameOfOneList',
            'columnDefsStore'
        ]),
        
        mounted() {

            this.setColumnDefs()

            this.$store.subscribe((mutation,state)=>{
                    switch(mutation.type)  {
                        case 'setInfoInRecord':
                            this.setRowData()
                            console.log(this.rowData)
                    }
            })


        },
        watch:{
            defaultRecords:{
                handler:function(val,oldVal){
                    this.setRowData()
                },
                deep:true

            },


        }

    }
</script>

<style lang="scss">
    @import "TableTemplate";
    @import "ag-theme-alpine.css";
    @import "ag-grid.css";

    table{border-collapse:collapse;}
    td,th{padding:5px 15px;text-align:left;}
    table,th,td{border:1px solid #000;}
</style>