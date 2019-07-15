import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

function storeLocalStore(state) {
    window.localStorage.setItem("store", JSON.stringify(state));
}

export default new Vuex.Store({
    state: {
        userName: "Xu",
        token: "",
        isLogin: true
    },
    mutations: {
        setLoginState(state, loginState) {
            state.isLogin = loginState;
            storeLocalStore(state)
        },
        setUserName(state, userName) {
            state.userName = userName;
            storeLocalStore(state)
        },
        setTokenValue(state, token) {
            state.token = token;
            storeLocalStore(state)
        }
    },
    actions: {}
})
