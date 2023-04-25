
export const actionCellRenderer =  {
    template: `<div class="action-drots"> 
<img src="${require('../../../../assets/img/drots.png')}"  @click="this.isOpenOptions=!this.isOpenOptions">
<div class="action-drots__actions" v-if="isOpenOptions">
<p @click="deleteRow">Удалить</p>
</div>
 </div>`,
    data(){
        return{
            isOpenOptions:false,

        }
    },
    methods:{
        deleteRow(){
           this.$store.commit('deleteRecord',this.params.data)
        }
    }



}