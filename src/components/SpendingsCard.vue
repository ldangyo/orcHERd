

<!-- HTML -->
<template>
  <div class="Card">
    <div v-if="shouldShowGoalInfo">
      <!-- TODO: Implement card for showing specific goal info here -->
    </div>
    <div v-else>
      <h3>Spend Money</h3>
      <div>
        <p>Amount*</p>
        <b-form-input v-model="amount" class="inputBox" placeholder="e.g. 20.00"></b-form-input>
        <div class="mt-2">Value: {{ amount }}</div>
      </div>
      <div>
        <p>Title*</p>
        <b-form-input v-model="title" class="inputBox" placeholder="e.g. Eyeshadow"></b-form-input>
        <div class="mt-2">Value: {{ title }}</div>
      </div>
      <div>
        <p>Category*</p>
        <b-form-input v-model="category" class="inputBox" placeholder="Enter your name"></b-form-input>
        <div class="mt-2">Value: {{ category }}</div>
      </div>
      <div>
        <p>Description</p>
        <b-form-input v-model="description" class="inputBox" placeholder="e.g. gift for sister"></b-form-input>
        <div class="mt-2">Value: {{ description }}</div>
      </div>
      <b-button variant="outline-dark">Cancel</b-button>
      <b-button variant="info">Confirm</b-button>
    </div>

  </div>
</template>

<!-- Javascript -->
<script>
import { mapGetters } from "vuex";
// import GoalModal from "./GoalModal";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "SpendingsCard",
  methods: {
    addAGoal() {
      var goal = "";

      this.$store.dispatch("addGoal", goal);
    }
    // showGoalModal() {
    //   this.isGoalModalVisible = true;
    // },
    // closeGoalModal() {
    //   this.isGoalModalVisible = false;
    // }
  },
  components: {
    // GoalModal
  },
  data: function() {
    return {
      // selected: "Sort by categories",
      // isGoalModalVisible: false'
      amount: '',
      title: '',
      category: '',
      description: ''
    };
  },

  computed: {
    ...mapGetters([
      "getSavingGoals",
      "getTotalMoney",
      "getShowGoalInfo",
      "getCategories"
    ]),

    getTotal: function() {
      return this.getTotalMoney;
    },

    getGoals: function() {
      return this.getSavingGoals;
    },

    shouldShowGoalInfo: function() {
      return this.getShowGoalInfo;
    },

    isSortedByCategories: function() {
      return this.selected === "Sort by categories";
    },

    getMainTreeMoney: function() {
      var toBeSaved = 0;
      this.getGoals.forEach(function(goal) {
        toBeSaved += goal.amountSaved;
      });
      return this.getTotal - toBeSaved;
    },

    getGoalsSortedByDate: function() {
      var sortedGoals = this.getGoals
        .slice()
        .sort(function(a, b) {
          a.targetDate - b.targetDate;
        })
        .reverse();
      return sortedGoals;
    },

    getCats: function() {
      return this.getCategories;
    },

    getGoalsSortedByCategory: function() {
      var categories = this.getCats;
      var savingsGoals = this.getGoals.slice();
      var sortedGoalsByCategory = [];
      categories.forEach(function(cat) {
        sortedGoalsByCategory.push({ categoryName: cat, goals: [] });
      });
      categories.forEach(function(cat) {
        savingsGoals.forEach(function(goal) {
          if (cat === goal.category) {
            sortedGoalsByCategory
              .find(function(obj) {
                if (obj.categoryName === cat) return obj;
              })
              .goals.push(goal);
          }
        });
      });

      return sortedGoalsByCategory;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Card {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: #e1dddd;
  color: #000000;
  text-align: left;
  padding-left: 37px;
  padding-right: 37px;
  padding-top: 5px;
}

.inputBox {
  width: 200px;
}

.SavingsGoalsContainer {
  border: 1px solid;
  height: 200px;
  overflow: scroll;
  overflow-x: hidden;
  padding-left: -50px;
}

.savingsGoals {
  padding: 0px;
}

.subBox {
  background-color: white;
  width: 100%;
  height: 40px;
  border-radius: 8px;
}

.baseBar {
  background-color: grey;
  width: 100%;
  border-radius: 35px;
}
</style>