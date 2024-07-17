<script >
import piniause from '../components/PiniaComponent.vue'
import forpinia from '../stores/forpinia'
import {mapActions} from 'pinia'
export default{
    data(){ // data:function ()
        return{
            
        }
    },

    components:{
        piniause
    },

    // 自訂方法格式:
    methods:{
        ...mapActions(forpinia, ["setPage"])
    },
    mounted(){
        this.setPage(8)
    }
}
</script>

<template>
    <piniause />
</template>

<style scoped lang="scss">

</style>
