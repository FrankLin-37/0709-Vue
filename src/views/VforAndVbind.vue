<script>
import vfor from '../components/VforComponent.vue'
import vbind from '../components/VbindComponet.vue'
import forpinia from '../stores/forpinia'
import {mapActions} from 'pinia'

export default{
    data(){ // data:function ()
        return{
            forOrBind:"",
        }
    },
    components: {
        vfor,
        vbind,
    },
    methods:{
        ...mapActions(forpinia, ["setPage"])
    },
    mounted(){
        this.setPage(3)
    }
}
</script>

<template>
    <select name="" id="" v-model="this.forOrBind">
        <option value="">選</option>
        <option value="vfor">vfor</option>
        <option value="vbind">vbind</option>
    </select>
    <vfor v-if= "this.forOrBind == 'vfor'"/>
    <vbind v-else-if="this.forOrBind == 'vbind'"/>
</template>

<style scoped lang="scss">

</style>