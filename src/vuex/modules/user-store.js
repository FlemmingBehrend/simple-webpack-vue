import {REGISTRATION_CREATE, USER_REGISTRED, USER_UNREGISTRED} from "../mutation-types";

const state = {
    users: [
        {id: 1, name: 'Max', registered: false},
        {id: 2, name: 'Anna', registered: false},
        {id: 3, name: 'Chris', registered: false},
        {id: 4, name: 'Sven', registered: false}
    ]
};

const getters = {
    unregistratedUsers(state) {
        return state.users.filter(user => !user.registered);
    }
};

const mutations = {
    [USER_UNREGISTRED](state, userId) {
        const user = findUser(userId);
        user.registered = false;
    },
    [USER_REGISTRED](state, userId) {
        let user = findUser(userId);
        user.registered = true;
    }
};

const actions = {
    [REGISTRATION_CREATE]({commit}, user) {
        setTimeout(() => {
            commit(REGISTRATION_CREATE, user);
            commit(USER_REGISTRED, user.id);
        }, 1000);
    },
};

function findUser(id) {
    return state.users.find(user => user.id === id);
}

export default {
    state,
    getters,
    mutations,
    actions
}
