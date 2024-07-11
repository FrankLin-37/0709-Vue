<script >
    import { RouterLink } from 'vue-router'
    export default {
        components:{
            RouterLink
        }
    }
</script>

<template>
    <header class="headerArea">
        <RouterLink to="/" class="routeItem">Home</RouterLink>
        <RouterLink to="/VtextAndVmodel" class="routeItem">VtextAndVmodel</RouterLink>
        <RouterLink to="/VforAndVbind" class="routeItem">VforAndVbind</RouterLink>
        <RouterLink to="/VonAndVifAndVshow" class="routeItem">VonAndVifAndVshow</RouterLink>
    </header>

</template>

<style scoped lang="scss">
.headerArea{
    margin: 0 auto;
    width: 100%;
    height: 100%;
    background-color: lightblue;
    display: flex;
    justify-content: space-evenly;

    .routeItem{
        font-size: 36px;
        color: white;
        text-decoration: none;
        cursor: pointer;
    }
}
</style>
