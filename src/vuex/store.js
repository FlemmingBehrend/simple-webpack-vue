import Vue from 'vue';
import Vuex from 'vuex';
import userModule from './modules/user-store';
import registrationModule from './modules/registration-store';

Vue.use(Vuex);
Vue.config.debug = true;

const store = new Vuex.Store({
    strict: true,
    modules: {
        userModule,
        registrationModule
    }
});

export default store;
