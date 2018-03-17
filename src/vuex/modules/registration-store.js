import {REGISTRATION_CREATE, REGISTRATION_DELETE, USER_UNREGISTRED} from "../mutation-types";

const state = {
    registrations: [],
};

const getters = {
    total(state) {
        return state.registrations.length;
    },
    registrations(state) {
        return state.registrations;
    }
};

const mutations = {
    [REGISTRATION_DELETE](state, registration) {
        state.registrations.splice(state.registrations.indexOf(registration), 1);
    },
    [REGISTRATION_CREATE](state, user) {
        const date = new Date;
        state.registrations.push({userId: user.id, name: user.name, date: date.getMonth() + '/' + date.getDay()})
    },
};

const actions = {
    [REGISTRATION_DELETE]({commit}, registration) {
        setTimeout(() => {
            commit(REGISTRATION_DELETE, registration);
            commit(USER_UNREGISTRED, registration.userId);
        }, 500);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}
