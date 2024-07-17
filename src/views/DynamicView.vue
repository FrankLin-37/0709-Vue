<script >
import forpinia from '../stores/forpinia'
import {mapActions} from 'pinia'
export default{
    data(){ // data:function ()
        return{
            
        }
    },

    components:{
        
    },

    // 自訂方法格式:
    methods:{
        ...mapActions(forpinia, ["setPage"])
    },
    mounted(){
        this.setPage(9)
    }
}
</script>

<template>
    <h1>動態路由的參數{{this.$route.params.id}}</h1>
</template>

<style scoped lang="scss">

</style>
