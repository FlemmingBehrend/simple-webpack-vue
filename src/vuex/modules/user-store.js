import {REGISTRATION_REGISTER, USER_REGISTRED, USER_UNREGISTRED} from "../mutation-types";

const state = {
    users: [
        {id: 1, name: 'Max', registered: false},
        {id: 2, name: 'Anna', registered: false},
        {id: 3, name: 'Chris', registered: false},
        {id: 4, name: 'Sven', registered: false}
    ]
};

const getters = {
    users(state) {
        return state.users.filter(user => !user.registered);
    },
    findUser(id) {
        return state.users.find(user => user.id === id);
    }
};

const mutations = {
    [USER_UNREGISTRED](state, userId) {
        const user = getters.findUser(userId);
        user.registered = false;
    },
    [USER_REGISTRED](state, userId) {
        let user = getters.findUser(userId);
        user.registered = true;
    }
};

const actions = {
    [REGISTRATION_REGISTER]({commit}, user) {
        setTimeout(() => {
            commit(REGISTRATION_REGISTER, user);
            commit(USER_REGISTRED, user.id);
        }, 1000);
    },
};

export default {
    state,
    getters,
    mutations,
    actions
}
