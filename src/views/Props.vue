
<script >
import propChild from '../components/propComponent.vue'
import forpinia from '../stores/forpinia'
import {mapActions} from 'pinia'
export default{
    data(){ // data:function ()
        return{
            parentMsg:"parentVal",
            parentObj:{
                name:"阿寶",
                type:"狗",
            }
        }
    },

    components:{
        propChild,
    },

    // 自訂方法格式:
    methods:{
        ...mapActions(forpinia, ["setPage"])
    },
    mounted(){
        this.setPage(5)
    }
}
</script>

<template>
    <!-- 務必遵守單一資料流向 -->
    <!-- 若傳給子層的資料型態是物件或陣列一定要拆解或用v-bind -->

    <h1>父 {{ this.parentMsg }}</h1>
    <h1>父物件 {{this.parentObj}}</h1>
    <propChild :givenChildMsg ="this.parentMsg" :givenChildObj ="this.parentObj"/>
</template>

<style scoped>

</style>
