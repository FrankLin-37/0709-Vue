<script >
import watch from '../components/WatchComponent.vue'
import compute from '../components/ComputeComponent.vue'
import forpinia from '../stores/forpinia'
import {mapActions} from 'pinia'
export default{
    data(){ // data:function ()
        return{
            
        }
    },

    components:{
        watch,
        compute
    },

    // 自訂方法格式:
    methods:{
        ...mapActions(forpinia, ["setPage"])
    },
    mounted(){
        this.setPage(7)
    }
}
</script>

<template>
    <watch />
    <compute />
</template>

<style scoped lang="scss">

</style>
