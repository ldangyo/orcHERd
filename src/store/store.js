import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        totalMoney: 25,
        savingGoals: [
            { name: "Korea Vacation", amountSaved: 5, amountReq: 56, category: "Entertainment", targetDate: new Date("2020-09-28") },
            { name: "New Pair of Skates", amountSaved: 20, amountReq: 147, category: "Sports", targetDate: new Date("2020-06-01") }
        ],
        categories: ['Makeup', 'Clothing', 'Sports', 'Food', 'Entertainment', 'Travel', 'Social', 'Toy', 'Other'],
    },

    getters: {
        getTotalMoney: state => state.totalMoney,
        getSavingGoals: state => {
            return state.savingGoals
        },
        getCategories: state => {
            return state.categories
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