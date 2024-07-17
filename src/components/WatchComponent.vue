<script >
export default{
    data(){ // data:function ()
        return{
            point : 0,
            ntd:0,
        }
    },

    watch:{
            point(){ //持續監聽
            this.ntd=this.point *10;
            }
        },

    components:{

    },

    // 自訂方法格式:
    methods:{
        arrTest(){
            try{
                let arr = [1,2,3,4,5]
                arr.forEach((item) => {
                console.log(item);
                if (item == 4){
                    throw new Error ("到4了")
                }
            })
            }catch(e){
                alert(e.massage)
            }
        }
        
    },
}
</script>

<template>
<h1>變數 point : {{ this.point }}</h1>
<!-- <button @click="this.point++">btn</button> -->
<button @click="this.arrTest">btn</button>
<h2>變數 ntd : {{ this.ntd }}</h2>
</template>

<style scoped lang="scss">

</style>
