<script >
export default{
    data(){ // data:function ()
        return{
            
        }
    },

    props: [
        "givenChildMsg",
        "givenChildObj",
    ],

    components:{
        
    },

    // 自訂方法格式:
    methods:{

    },
}
</script>

<template>
    <h1>子 {{ this.givenChildMsg }}</h1>
    <input type="text" v-model= "this.givenChildObj.name">
    <h3>子物件 {{ this.givenChildObj }}</h3>
</template>

<style scoped>

</style>
