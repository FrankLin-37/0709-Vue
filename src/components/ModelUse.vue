<script >
export default{
    data(){ // data:function ()
        return{

        }
    },

    components:{
        
    },

    // 自訂方法格式:
    methods:{

    },

}
</script>

<template>
    <div class="slotArea">
        <div class="show">
            <slot></slot>
            <button @click="$emit('alertModal')">Close</button>
        </div>
        <div class="bg"></div>
    </div>
</template>

<style scoped lang="scss">
    .slotArea{
        position: relative;
        width: 100%;
        height: 110dvh;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;

        .show{
            width: 50%;
            height: 50%;
            background: white;
            border: 1px solid black;
            z-index: 2;
        }

        .bg{
            width: 100%;
            height: 100%;
            position: absolute;
            background: rgb(0, 0, 0, 0.3);
            top:0;
            left:0;
            backdrop-filter: blur(3px);
        }
    }
</style>
