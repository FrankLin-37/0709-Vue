<script>
import forpinia from '../stores/forpinia'
import {mapActions} from 'pinia'
export default{
    data(){ // data:function ()
        return{
            text:"This is text code!",
            modelTxt:"",
            modelRadio:"",
            modelCheck:[],
            modelSelect:"",
        }
    },
    methods:{
        ...mapActions(forpinia, ["setPage"])
    },
    mounted(){
        this.setPage(2)
    }
}
</script>

<template>
    <!-- v-text -->
    <p v-text="this.text"></p>
    <p>{{ this.text }}</p>
    <p v-text = "'用單引號才能表示文字'"></p>

    <!-- v-model -->
    <!-- 標籤的值與變數雙向綁定 -->
    <input type="text" v-model="this.modelTxt">
    <h3>{{ this.modelTxt }}</h3>

    <!-- 單選 -->
    <label for="nice1">水喔1</label>
    <input type="radio" v-model="this.modelRadio" id="nice1" value="超水喔1">
    <label for="nice2">水喔2</label>
    <input type="radio" v-model="this.modelRadio" id="nice2" value="超水喔2">
    <label for="nice3">水喔3</label>
    <input type="radio" v-model="this.modelRadio" id="nice3" value="超水喔3">
    <h3>{{ this.modelRadio }}</h3>
    <!-- 複選 -->
    <label for="ice1">巧克力</label>
    <input type="checkbox" id="ice1" v-model="this.modelCheck" value="巧克力">
    <label for="ice2">薄荷巧克力</label>
    <input type="checkbox" id="ice2" v-model="this.modelCheck" value="薄荷巧克力">
    <label for="ice3">瑞士巧克力</label>
    <input type="checkbox" id="ice3" v-model="this.modelCheck" value="瑞士巧克力">
    <h3>{{ this.modelCheck }}</h3>

    <!-- 下拉選單 -->
    <select name="" id="" v-model="this.modelSelect">
        <option value="選">請選擇</option>
        <option value="cat">貓</option>
        <option value="dog">狗</option>
        <option value="bird">鳥</option>
    </select>
    <h3>{{ this.modelSelect }}</h3>
</template>

<style>

</style>
