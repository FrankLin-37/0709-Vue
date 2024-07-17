<script>
export default{
    data(){ // data:function ()
        return{
            selectVal:"",
            radioVal:""
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

    <!-- v-if 達成條件才創立物件 -->

        <h1 v-if="this.selectVal == ''">沒選</h1>
        <h1 v-else-if="this.selectVal == '1'">水啦</h1>
        <h1 v-else = "this.selectVal == '2'">酷喔</h1>

    <label for="">
        <input type="radio" v-model="this.radioVal" value="是在哈囉" name="hello">哈囉
    </label>
    <label for="">
        <input type="radio" v-model="this.radioVal" value="你才哈囉" name="hello2">你才
    </label>

    <!-- v-show 都創立物件，但設定不顯示 -->

    <h1 v-show="this.radioVal == '是在哈囉'">哭阿</h1>
    <h1 v-show="this.radioVal == '你才哈囉'">笑死</h1>
</template>

<style scoped lang="scss">

</style>