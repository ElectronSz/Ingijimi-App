import { auth } from '../../config'
import { llg } from "llg";
export default {
    state: {
        message: "",
        status: "",
        user: ""
    },
    mutations: {
        SET_LOGIN_MESSAGE(state, message) {
            state.message = message
        },
        SET_STATUS(state, status) {
            state.status = status
        },
        SET_USER(state, status) {
            state.status = status
        },
        
    },
    actions: {
        login(context, user) {
            auth.signInWithEmailAndPassword(user.email, user.password).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                context.commit('SET_LOGIN_MESSAGE', errorMessage);
                context.commit('SET_STATUS', 'notLoggedIn');
                llg(errorCode, errorMessage)
            })
                .then(function name(user) {
                    context.commit('SET_LOGIN_MESSAGE', user.user);
                    context.commit('SET_STATUS', 'loggedIn');
                    llg(user.user)
                })

        },

    },
    getters: {
        message(state) {
            return state.message
        },
        status(state) {
            return state.status
        },
        user(state){
            return state.user
        }
    }
}