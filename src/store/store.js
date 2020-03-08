import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        totalMoney: 1000,
        savingGoals: [
            { name: "Korea Vacation", amountSaved: 5, amountReq: 56, category: "Entertainment", targetDate: new Date("2020-09-28") },
            { name: "New Pair of Skates", amountSaved: 20, amountReq: 147, category: "Sports", targetDate: new Date("2020-06-01") },
            { name: "Korea Vacation2", amountSaved: 5, amountReq: 56, category: "Entertainment", targetDate: new Date("2021-09-28") },
            { name: "Korea Vacation", amountSaved: 5, amountReq: 56, category: "Entertainment", targetDate: new Date("2022-09-28") },
            { name: "Korea Vacation3", amountSaved: 5, amountReq: 56, category: "Entertainment", targetDate: new Date("2023-09-28") },
            { name: "Korea Vacation3", amountSaved: 5, amountReq: 56, category: "Entertainment", targetDate: new Date("2024-09-28") },
        ],
        selectedGoalIndex: 0,
        showGoalInfo: false,
        categories: ['Makeup', 'Clothing', 'Sports', 'Food', 'Entertainment', 'Travel', 'Social', 'Toy', 'Other'],
    },

    getters: {
        getTotalMoney: state => state.totalMoney,
        getSavingGoals: state => {
            return state.savingGoals
        },
        getselectedGoalIndex: state => {
            return state.selectedGoalIndex
        },
        getshowGoalInfo: state => {
            return state.showGoalInfo
        },
        getCategories: state => {
            return state.categories
        }
    },

    actions: {
        addGoal({ commit }, data) {
            commit("setAddGoal", data)
        },
        //actions for goal Index
        incrGoalIndex({ commit, state }) {
            if (state.selectedGoalIndex + 1 < state.savingGoals.length - 1) {

                commit("setIncrGoal")
            } else {
                commit("setGoalIndex", 0)

            }
            console.log(state.selectedGoalIndex)

        },
        decrGoalIndex({ commit, state }) {
            if (state.selectedGoalIndex - 1 > -1) {
                commit("setDecrGoal")
            } else {
                commit("setGoalIndex", state.savingGoals.length - 2)
            }
            console.log(state.selectedGoalIndex)

        },

        changeGoalIndex({ commit }, data) {
            commit("setGoalIndex", data)
        },

        //action to show goal info
        changeShowGoalInfo({ commit }, data) {
            commit("setShowGoalInfo", data)
        },
    },

    mutations: {
        //setters for goals
        setIncrGoal(state) {
            state.selectedGoalIndex++
        },
        setDecrGoal(state) {
            state.selectedGoalIndex--
        },
        setGoalIndex(state, data) {
            state.selectedGoalIndex = data
        },

        //setters for display more goal info
        setShowGoalInfo(state, data) {
            state.showGoalInfo = data
        },

        setAddGoal(state, data) {
            state.savingGoals.push(data)
        },
    },


});