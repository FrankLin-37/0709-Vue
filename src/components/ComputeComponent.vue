<script >
export default{
    data(){ // data:function ()
        return{
            bean:0
        }
    },

    components:{
        
    },

    computed:{ //提供不存在記憶體的變數供計算
        bottles(){
            return `${this.bean * 50}ml`;
        }
    },

    // 自訂方法格式:
    methods:{

    },
}
</script>

<template>
<h1>變數 : bean {{ this.bean }}</h1>
<button @click="this.bean++">btn</button>
<h2>變數 : bottles {{ this.bottles }}</h2>
</template>

<style scoped lang="scss">

</style>
