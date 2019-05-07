<template>
    <div id="app">
        <BulmaNavbar/>
        <SideDrawer/>
        <router-view class="mt-5"/>
    </div>
</template>

<script>
    import BulmaNavbar from "./components/layouts/BulmaNavbar";
    import SideDrawer from "./components/layouts/SideDrawer";

    export default {
        name: 'app',
        components: {
            BulmaNavbar,
            SideDrawer,
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>