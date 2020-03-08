import Vuex from 'vuex'
import Vue from 'vue'
// import { mockSavingGoals } from '../helpers/mockSavingGoals'

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

    },

    actions: {
    }
});