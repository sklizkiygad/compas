<template>

  <router-view/>
</template>

<script>
  import {mapState} from "vuex";

  export default {
    methods:{
      setRecords(){
        if(localStorage.getItem('compas')){
          this.$store.commit('getLocalStorageData', JSON.parse(localStorage.getItem('compas')))
        }
        else{
          this.$store.commit('setNamesOfOneListInRecords')
          localStorage.setItem('compas',
                  JSON.stringify({defaultRecords:this.defaultRecords,columnDefsStore:this.columnDefsStore}))

        }
      }
    },
    computed: mapState({
      defaultRecords: state => state.defaultRecords,
      columnDefsStore: state => state.columnDefsStore
    }),
    mounted() {
      this.setRecords()
    }


  }
</script>

<style lang="scss">
@import "assets/scss/style";
</style>
