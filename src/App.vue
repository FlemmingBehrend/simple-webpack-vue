<template>
    <div id="app">
        <unregestered-users-container></unregestered-users-container>
        <registrations-container></registrations-container>
    </div>
</template>

<script>
    import unregesteredUsersContainer from './containers/unregistered-users-container';
    import registrationsContainer from './containers/registrations-container.vue';

    export default {
        components: {
            unregesteredUsersContainer,
            registrationsContainer
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
