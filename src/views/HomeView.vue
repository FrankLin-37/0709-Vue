<script >
import forpinia from '../stores/forpinia'
import modeluse from '../components/ModelUse.vue'
import {mapActions} from 'pinia'
export default{
    data(){ // data:function ()
        return{
            arr:["台北","台中","高雄"],
            control:false,
        }
    },

    components:{
        modeluse
    },

    // 自訂方法格式:
    methods:{
        ...mapActions(forpinia, ["setPage"]),
                
        showif() {
            this.control = !this.control;
        }
    },
    mounted(){
        this.setPage(1);
    }
}
</script>

<template>
    <h1>HomeView</h1>
    <button v-for="item in this.arr" @click="this.$router.push(`/Dynamic/${item}`)">btn {{item}}</button>
    <button @click="this.showif()">開</button>
    <modeluse v-show="this.control" @alertModal="this.showif()">
        <h1>花惹發</h1>
    </modeluse>


</template>

<style scoped lang="scss">

</style>
