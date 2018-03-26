<template>
    <unregistrered-users @registerUser="registerUser" :unregistrered-users="unregistredUsers"></unregistrered-users>
</template>

<script>
    import UnregistreredUsers from "../views/unregistrered-users";
    import {REGISTRATION_CREATE} from '../vuex/mutation-types';

    export default {
        components: {UnregistreredUsers},
        computed: {
            unregistredUsers() {
                return this.$store.getters.unregistratedUsers;
            }
        },
        methods: {
            registerUser(user) {
                this.$store.dispatch(REGISTRATION_CREATE, user);
            }
        }

    }
</script>

<style scoped>

</style>
