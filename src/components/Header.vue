<script >
    import { RouterLink } from 'vue-router'
    import forpinia from '../stores/forpinia'
    import { mapState , mapActions} from 'pinia'

    export default {
        data(){
            return{

            }
        },
        components:{
            RouterLink,
            
        },
        computed:{
            ...mapState(forpinia, ["location", "pageLocation"])
        },
        methods:{
            ...mapActions(forpinia, ["setPage"])
        },
    }
</script>

<template>
    <header class="headerArea">
        <RouterLink to="/" class="routeItem" :class="{ 'selected' : this.location === 1}">Home</RouterLink>
        <RouterLink to="/VtextAndVmodel" class="routeItem" :class="{ 'selected' : this.location === 2}">VtextAndVmodel</RouterLink>
        <RouterLink to="/VforAndVbind" class="routeItem" :class="{ 'selected' : this.location === 3}">VforAndVbind</RouterLink>
        <RouterLink to="/VonAndVifAndVshow" class="routeItem" :class="{ 'selected' : this.location === 4}">VonAndVifAndVshow</RouterLink>
        <RouterLink to="/Props" class="routeItem" :class="{ 'selected' : this.location === 5}">Props</RouterLink>
        <RouterLink to="/Emit" class="routeItem" :class="{ 'selected' : this.location === 6}">Emit</RouterLink>
        <RouterLink to="/WatchAndCompute" class="routeItem" :class="{ 'selected' : this.location === 7}">WatchAndCompute</RouterLink>
        <RouterLink to="/Pinia" class="routeItem" :class="{ 'selected' : this.location === 8}">Pinia</RouterLink>
    </header>

    <span>{{this.pageLocation}}</span>

</template>

<style scoped lang="scss">
.headerArea{
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background-color: lightblue;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-content: center;

    .routeItem{
        font-size: 20px;
        color: white;
        text-decoration: none;
        cursor: pointer;
    }
    .selected{
        color:red;
    }
}
</style>
