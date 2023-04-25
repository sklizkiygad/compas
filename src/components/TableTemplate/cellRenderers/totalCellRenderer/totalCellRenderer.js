export const totalCellRenderer = {


    template: `<input type="number" disabled class="table-number-input" :value="this.params.value"/>`,
    data(){
        return{
            isOpenOptions:false,
            selectedOption:null
        }
    },
    methods:{



    }

}

