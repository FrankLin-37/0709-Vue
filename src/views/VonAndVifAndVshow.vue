<script>
import von from '../components/VonComponent.vue'
import vifandvshow from '../components/VifAndVshowComponent.vue'
import model from '../components/Vslot.vue'
import forpinia from '../stores/forpinia'
import {mapActions} from 'pinia'

export default{
    components: {
        von,
        vifandvshow,
        model,
    },
    methods:{
        ...mapActions(forpinia, ["setPage"])
    },
    mounted(){
        this.setPage(4)
    }
}
</script>

<template>
    <von />
    <vifandvshow />
    <model>
        <a href="https://pchome.megatime.com.tw/stock/sto0/ock3/sid2605.html">2605</a>
        <template v-slot:title>
            wow
        </template>
    </model>
</template>

<style scoped lang="scss">

</style>