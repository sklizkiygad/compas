import {h} from "vue";

export const actionCellRenderer =  {
    setup(){
        return ()=> h('img',{src:require('../../../../assets/img/drots.png')})
    }

}