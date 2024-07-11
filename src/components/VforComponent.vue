<script>
export default{
    data(){ // data:function ()
        return{
            arr:[1,2,3,4,5,6,7,8,9]
        }
    }
}
</script>

<template>
    <!-- vfor 等於做for迴圈 -->
    <div class="vforOne" v-for="item in this.arr">
        <p>Lorem ipsum dolor sit amet consectetu {{ item }}</p>
    </div>

    <div class="select">
        <label for="">
            <select name="" id="">
                <option value="" v-for="(item, index) in this.arr">cc {{ index }}</option>
            </select>
        </label>
        </div>

</template>

<style scoped lang="scss">

    .vforOne{
        width: 100%;
        height: 50dvh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>