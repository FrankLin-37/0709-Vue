<script>
export default{
    data(){ // data:function ()
        return{
            vonTest1:"vonTest1",
        }
    },

    // 自訂方法格式:
    methods:{
        vonTester(){
            console.log(this.vonTest1);
        }
    }
}
</script>

<template>
<button type="button" v-on:click="this.vonTester()">Btn</button>
<button type="button" @click="this.vonTester()">Btn2</button>
<button type="button" v-on:mouseout="this.vonTester()">Btn3</button>
<input type="text" @input="this.vonTester()">

<!-- v-on:click = @click 縮寫版 -->
<!-- v-on = 事件監聽 可用click mouseout 等 -->
</template>

<style scoped lang="scss">

</style>