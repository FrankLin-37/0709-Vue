<script>
export default{
    data(){ // data:function ()
        return{
            imgArr:[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLNGi4AnXMTVHZZxyipIH5WORJg6Jk2cDLnUdTUKo9cTILDgM8KVFUn3WrBBz0K3QXuk&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTar2ZzchMJFhkObUtW5N2I2S8OIQ-bzSRgQQ&s"
            ],
            clsArr:[],
        }
    }
}
</script>

<template>
    <!-- v-bind 跟標籤的雙向綁定 縮寫是 : -->
    <!-- <img v-bind:src="item" alt="" v-for="item in this.imgArr"> -->
    <!-- <img :src="item" alt="" v-for="item in this.imgArr"> -->

    <label for="green">
        <input type="checkbox" value = "green" v-model="this.clsArr" id="green"> 慘綠
    </label>
    <label for="large">
        <input type="checkbox" value = "larger" v-model="this.clsArr" id="large"> 變大
    </label>
    <label for="line">
        <input type="checkbox" value = "line" v-model="this.clsArr" id="line"> 底線
    </label>
    <h1 :class="this.clsArr">聯電威武</h1>
</template>

<style scoped lang="scss">
    .vforOne{
    width: 100%;
    height: 50dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    }

    .green{
        color: green;
    }

    .larger{
        font-size: 100px;
    }

    .line{
        text-decoration: underline;
    }
</style>