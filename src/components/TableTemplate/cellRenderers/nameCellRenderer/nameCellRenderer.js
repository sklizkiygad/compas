export const nameCellRenderer = {
    template: `
        <div class="table-select" @click="setIsOpenOptions">
            <div class="table-select__result">
                <span>{{selectedOption? selectedOption:  'Выбрать'}} </span>
                <div class="table-select__result__arrow">
                </div>
            </div>
      
        <div class="table-select__options" v-if="isOpenOptions">
         <p v-for="nameOfOne in this.params.value"  @click="setSelectedOption(nameOfOne.name)">{{nameOfOne.name}}</p>
        </div>
          
           
        </div>`,
    data(){
        return{
            isOpenOptions:false,
            selectedOption:null
        }
    },
    methods:{
        setIsOpenOptions(){
            this.isOpenOptions=!this.isOpenOptions
        },
        setSelectedOption(e){
            this.selectedOption=e
        }


    }

}