<template>
    <div class="table-template">
        <div class="table-template__item add">
            <button> <span>+</span> <p>Добавить строку</p></button>

        </div>

        <div class="table-template__item">
            <div class="table-template__item__header">
                <p>Сохранить изменения</p>
                <img src="../../assets/img/gear.svg" alt="">

            </div>

            <div class="table-template__item__table">
                <div style="height: 1000px">
                    <ag-grid-vue

                            style="width: 100%; height: 100%;"
                            class="ag-theme-alpine"
                            :columnDefs="columnDefs"

                            :defaultColDef="defaultColDef"
                            :rowDragManaged="true"
                            :animateRows="true"
                            :rowData="rowData"></ag-grid-vue>
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




    export default {
        components:{AgGridVue, actionCellRenderer, nameOfOneCellRenderer},
       

        data(){

            return{


                columnDefs: [
                    { field:'index', headerName: '', minWidth: 50,width:50 , rowDrag: true},
                    { field:'action',headerName: '', minWidth: 25, width:30,  cellRenderer:'actionCellRenderer'},
                    { field:'nameOfOne',headerName: 'Наименование единицы',minWidth: 150, flex: 1, cellRenderer:'nameOfOneCellRenderer' },
                    { field:'price',headerName: 'Цена', flex: 1 },
                    { field:'count',headerName: 'Кол-во', flex: 1 },
                    { field:'name',headerName: 'Название товара', flex: 1 },
                    { field:'total',headerName: 'Итого', flex: 1 },

                ],
                gridApi: null,
                columnApi: null,
                defaultColDef: {
                    resizable: true,


                },
                rowData:[]


            };
        },
        methods:{

            setRowData(){
                this.rowData=this.defaultRecords
            }

        },
        computed: mapState({
            defaultRecords: state => state.defaultRecords,
            nameOfOneList: state => state.nameOfOneList,
        }),
        
        mounted() {
            this.setRowData()

        },
        watch:{
            defaultRecords:{
                handler(val,oldVal){
                    console.log('hh')
                },
                deep:true



            }
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