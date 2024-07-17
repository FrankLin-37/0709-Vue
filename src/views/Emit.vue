<script >
import emitChild from '../components/EmitComponent.vue'
import forpinia from '../stores/forpinia'
import {mapActions} from 'pinia'
export default{
    data(){ // data:function ()
        return{
            getchildVal:"",
            childChange:"parent",
        }
    },

    components:{
        emitChild,
    },

    // 自訂方法格式:
    methods:{
        childGet(params){
            console.log(params);
            this.getchildVal = params;
        },
        ...mapActions(forpinia, ["setPage"])
    },

    beforeCreate(){
        console.log("befroeCreate");
    },
    created(){
        console.log("created");
    },
    beforeMount(){
        console.log("beforeMount");
    },
    mounted(){
        console.log("mounted");
        this.setPage(6)
    },
    beforeUpdate(){
        console.log("beforupdate");
    },
    updated(){
        console.log("update");
    },
    beforeUnmount(){
        console.log("beforeunmount");
    },
    unmounted(){
        console.log("unmounted");
    },
}
</script>

<template>
    <emitChild @childMsgpush="this.childGet" v-model:fromChild="this.childChange"/>
    <h1>{{ this.getchildVal }}</h1>
    <h1>{{ this.childChange }}</h1>
</template>

<style scoped lang="scss">

</style>
