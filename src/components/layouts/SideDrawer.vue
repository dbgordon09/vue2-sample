<template>
    <div id="sidedrawer" class="navbar-menu is-dark" role="navigation" aria-label="main navigation">
        <router-link to="/" class="navbar-item">Home</router-link>
    </div>
</template>

<script>
    export default {
        name: 'SideDrawer',
    }
</script>
<style>
    #sidedrawer {
        position: fixed;
        top: 0;
        right: 0;
        overflow-x: hidden;

        min-width: 250px;
        height: 100%;
        background-color: #363636;
        color: #fff;
        z-index: 1;

    }

</style>