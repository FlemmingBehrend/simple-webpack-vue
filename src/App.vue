<template>
    <div id="app">
        <users></users>
        <registrations></registrations>
    </div>
</template>

<script>
    import users from './users.vue';
    import registrations from './registrations.vue';

    export default {
        components: {
            users,
            registrations
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
        margin-top: 60px;
        flex: auto;
    }
</style>
