import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        savingGoals: [{ name: "Korea Vacation", amountSaved: "5", amountReq: "56", category: "Entertainment" }]

    },

    getters: {
        getSavingGoals: state => {
            return state.savingGoals
        }
    },

    mutations: {
        setAddGoal(state, data) {
            state.savingGoals.push(data)
        }

    },

    actions: {
        addGoal(state, data) {
            state.commit("setAddGoal", data)
        }
    }
});