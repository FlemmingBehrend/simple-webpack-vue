import Vue from 'vue';
import Vuex from 'vuex';
import {REGISTER_USER, UNREGISTER_USER} from "./mutation-types";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        registrations: [],
        users: [
            {id: 1, name: 'Max', registered: false},
            {id: 2, name: 'Anna', registered: false},
            {id: 3, name: 'Chris', registered: false},
            {id: 4, name: 'Sven', registered: false}
        ]
    },
    getters: {
        users(state) {
            return state.users.filter(user => !user.registered);
        },
        total(state) {
            return state.registrations.length;
        },
        registrations(state) {
            return state.registrations;
        }
    },
    mutations: {
        [REGISTER_USER](state, user) {
            const date = new Date;
            user.registered = true;
            state.registrations.push({userId: user.id, name: user.name, date: date.getMonth() + '/' + date.getDay()})
        },
        [UNREGISTER_USER](state, registration) {
            let user = state.users.find(user => user.id === registration.userId);
            user.registered = false;
            state.registrations.splice(state.registrations.indexOf(registration), 1);
        }
    },
    actions: {
        [REGISTER_USER]({commit}, user) {
            setTimeout(() => {
                commit(REGISTER_USER, user);
            }, 1000);
        },
        [UNREGISTER_USER]({commit}, registration) {
            setTimeout(() => {
                commit(UNREGISTER_USER, registration);
            }, 500);
        }
    }
});

export default store;
