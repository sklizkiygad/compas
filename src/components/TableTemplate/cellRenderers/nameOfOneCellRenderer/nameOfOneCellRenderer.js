export const nameOfOneCellRenderer = {


    template: `
        <div class="table-select" @click="setIsOpenOptions">
            <div class="table-select__result">
                <span>Выбрать</span>
                <div class="table-select__result__arrow">
                </div>
            </div>
      
        <div class="table-select__options" v-if="isOpenOptions">
         <p v-for="nameOfOne in this.params.value">{{nameOfOne.name}}</p>
        </div>
          
           
        </div>`,
    data(){
        return{
            isOpenOptions:false
        }
    },
    methods:{
        setIsOpenOptions(){
            this.isOpenOptions=!this.isOpenOptions
        }
        

    }

}



//     setup(props){
//
//
//         let cellContent=`<select> <li v-for="nameOfOne in props.params.value"></li>{{nameOfOne.name}} </select>`
//
//         return ()=>cellContent
//
//     }
//
// }