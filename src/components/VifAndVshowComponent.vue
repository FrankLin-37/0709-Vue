<script>
export default{
    data(){ // data:function ()
        return{
            selectVal:""
        }
    }
}
</script>

<template>
    <select name="" id="" v-model="this.selectVal">
        <option value="">請選擇</option>
        <option value="1">1</option>
        <option value="2">2</option>
    </select>

        <h1 v-if="this.selectVal == ''">沒選</h1>
        <h1 v-else-if="this.selectVal == '1'">水啦</h1>
        <h1 v-else = "this.selectVal == '2'">酷喔</h1>
</template>

<style scoped lang="scss">

</style>