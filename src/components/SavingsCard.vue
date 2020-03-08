

<!-- HTML -->
<template>
  <div class="Card">
    <div v-if="shouldShowGoalInfo">
      <!-- TODO: Implement card for showing specific goal info here -->
    </div>
    <div v-else>
      <h2>Savings</h2>
      <div class="subBox">Main Tree ${{getMainTreeMoney}}</div>
      <h4 style="margin-bottom:0">Saving Goals</h4>
      <select class="dropDownMenu" v-model="selected">
        <option disabled value>Please select one</option>
        <option>Sort by categories</option>
        <option>Sort by target date</option>
      </select>
      <div class="SavingsGoalsContainer">
        <div v-if="isSortedByCategories">
          <ul class="savingsGoals">
            <div v-for="cat in getGoalsSortedByCategory" :key="cat.categoryName">
              <div v-if="cat.goals.length > 0">
                <h4  style="margin-bottom:0">{{cat.categoryName}}</h4>
                <div v-for="goal in cat.goals" :key="goal.name">
                  <div class="subBox">{{ goal.name }} ${{goal.amountSaved}}/{{goal.amountReq}}</div>
                </div>
              </div>
            </div>
          </ul>
        <div class="empty"></div>
        </div>
        <div v-else>
          <ul class="savingsGoals">
            <div v-for="goal in getGoalsSortedByDate" :key="goal.name">
              <div class="subBox"><h3>{{ goal.name }}</h3><h3>${{goal.amountSaved}}/{{goal.amountReq}}</h3></div>
            </div>
          </ul>
        </div>
      </div>
      <div class="empty"></div>
      <div class="bottom">
        <div class="baseBar">
          <h3>Total Savings</h3>
          <div class="blank"></div>
          <h3>${{getTotal}}</h3>
        </div>
        <GoalModal v-show="isGoalModalVisible" @close="closeGoalModal" />
        <button class="goalButt" @click="showGoalModal()">
          <img src="../assets/addmoney.png" alt />
        </button>
      </div>
      <h5 style="padding-left:84%; margin-top:0">Add a Goal!</h5>
    </div>
  </div>
</template>

<!-- Javascript -->
<script>
import { mapGetters } from "vuex";
import GoalModal from "./GoalModal";

export default {
  name: "SavingsCard",
  methods: {
    addAGoal() {
      var goal = "";

      this.$store.dispatch("addGoal", goal);
    },
    showGoalModal() {
      this.isGoalModalVisible = true;
    },
    closeGoalModal() {
      this.isGoalModalVisible = false;
    }
  },
  components: {
    GoalModal
  },
  data: function() {
    return {
      selected: "Sort by categories",
      isGoalModalVisible: false
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
  background-color: #edeae7;
  color: #4d2d13;
  text-align: left;
  padding-left: 37px;
  padding-right: 37px;
  padding-top: 5px;
}

.SavingsGoalsContainer {
  height: 200px;
  overflow: scroll;
  overflow-x: hidden;
  padding-left: -50px;
}

.savingsGoals {
  padding: 0px;
margin-bottom: 0;
  vertical-align: middle;
}

.subBox {
  background-color: white;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  padding-top: 0.9375rem;
  padding-left: 2%;
;
}

.dropDownMenu {
  border: none;
  border-radius: 0.9375rem;
  background: none;
  padding-left: 1.25rem;
}

.empty {
  width: 100%;
  height: 1.25rem;
}

.blank {
  width: 50%;
}

.bottom {
  display: flex;
  flex-wrap: nowrap;
}

.baseBar {
  position: right;

  background-color: #badff1;
  width: 80%;
  border-radius: 0.9375rem;
  padding: 0.625rem;
  display: flex;
  align-self: center;
}

.goalButt {
  position: right;
  border: none;
  background: none;
}
</style>