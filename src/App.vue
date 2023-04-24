<template>

  <router-view/>
</template>

<script>
  export default {
    methods:{
      setRecords(){
        this.$store.commit('setNamesOfOneListInRecords')
      }
    },
    mounted() {
      this.setRecords()
    }


  }
</script>

<style lang="scss">
@import "assets/scss/style";
</style>
