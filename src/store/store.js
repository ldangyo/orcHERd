import Vuex from 'vuex'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        totalMoney: 1000,
        savingGoals: [
            { name: "Korea Vacation", amountSaved: 5, amountReq: 56, category: "Entertainment", targetDate: new Date("2020-09-28") },
            { name: "New Pair of Skates", amountSaved: 20, amountReq: 147, category: "Sports", targetDate: new Date("2020-06-01") },
        ],
        selectedGoalIndex: 0,
        showGoalInfo: false,
        selectedMainTree: false,
        addedTree: false,

        categories: ['Makeup', 'Clothing', 'Sports', 'Food', 'Entertainment', 'Travel', 'Social', 'Toy', 'Other'],
        spendings: [],
    },

    getters: {
        getAddedTree: state => state.addedTree,
        getTotalMoney: state => state.totalMoney,
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
        },
        getCategories: state => {
            return state.categories
        }
    },

    actions: {
        changeAddedTree({ commit }, data) {
            console.log('sup')
            commit("updateAddedTree", data)
        },
        addGoal({ commit }, data) {
            console.log(data)
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
        updateAddedTree(state, data) {
            state.addedTree = data
        },
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
            console.log(state.savingGoals)
        },
    },


});