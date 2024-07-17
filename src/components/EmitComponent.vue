<script >
export default{
    data(){ // data:function ()
        return{
            childMsg:"childVal"
        }
    },

    components:{
        
    },

    // 自訂方法格式:
    methods:{

    },

    props:[
        'fromChild',
    ]
}
</script>

<template>
<button @click="$emit('childMsgpush', this.childMsg)">btn</button>

<input type="text" :value="this.fromChild" @input="$emit('update:fromChild', $event.target.value)">
</template>

<style scoped lang="scss">

</style>
