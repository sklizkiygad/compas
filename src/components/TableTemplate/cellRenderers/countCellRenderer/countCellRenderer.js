export const countCellRenderer = {


    template: `<input type="number" class="table-number-input" @input="setDataInStore" :value="this.params.value"/>`,
    data(){
        return{
            isOpenOptions:false,
            selectedOption:null
        }
    },
    methods:{
        setDataInStore(e){

            this.$store.commit('setInfoInRecord',
                {recordId:this.params.data.index ,
                    keyData:this.params.colDef.field,
                    value:e.target.value})


        }
    }


}

