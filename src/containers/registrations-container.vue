<template>
    <registrations :registrations="registrations" :total="total" @unregister="unregister"></registrations>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {REGISTRATION_DELETE} from '../vuex/mutation-types';
    import Registrations from "../views/registrations";

    export default {
        components: {Registrations},
        computed: {
            ...mapGetters({
                registrations: 'registrations',
                total: 'total'
            })
        },
        methods: {
            unregister: function(registration) {
                this.$store.dispatch(REGISTRATION_DELETE, registration);
            }
        },


    }
</script>

<style scoped>

</style>
