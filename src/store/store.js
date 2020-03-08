import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        savingGoals: [
            { name: "Korea Vacation2", amountSaved: "5", amountReq: "56", category: "Entertainment" },
            { name: "Korea Vacation", amountSaved: "5", amountReq: "56", category: "Entertainment" },
            { name: "Korea Vacation3", amountSaved: "5", amountReq: "56", category: "Entertainment" },
            { name: "Korea Vacation3", amountSaved: "5", amountReq: "56", category: "Entertainment" },
        ],
        selectedGoalIndex: 0,
        showGoalInfo: false,
        selectedMainTree: false,

    },

    getters: {
        getSavingGoals: state => {
            return state.savingGoals
        },
        getSelectedGoalIndex: state => {
            return state.selectedGoalIndex
        },
        getShowGoalInfo: state => {
            return state.showGoalInfo
        },
        getSelectedMainTree: state => {
            return state.showGoalInfo
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