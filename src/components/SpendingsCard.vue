

<!-- HTML -->
<template>
  <div class="Card">
    <div v-if="shouldShowGoalInfo">
      <!-- TODO: Implement card for showing specific goal info here -->
    </div>
    <div class="cardContents" v-else>
      <h3 class="title">Spend Money</h3>
      <div class="empty"></div>
      <div class="formRow">
        <h4>
          <p>Amount*</p>
        </h4>
        <b-form-input
          v-model="amount"
          class="inputBox"
          style="text-align:right"
          placeholder="e.g. 20.00"
        ></b-form-input>
      </div>
      <div class="formRow">
        <h4>
          <p>Title*</p>
        </h4>
        <b-form-input
          v-model="title"
          class="inputBox"
          style="text-align:right"
          placeholder="e.g. Eyeshadow"
        ></b-form-input>
      </div>
      <div class="formRow">
        <h4>
          <p>Category*</p>
        </h4>
        <select class="dropDownMenu" v-model="selected">
          <option style="background:none" disabled value>Please select one</option>
          <option>Makeup</option>
          <option>Clothing</option>
          <option>Sports</option>
          <option>Food</option>
          <option>Entertainment</option>
          <option>Travel</option>
          <option>Social</option>
          <option>Toy</option>
          <option>Other</option>
        </select>
      </div>
      <div class="formRow">
        <h4>
          <p>Description</p>
        </h4>
        <b-form-input
          v-model="description"
          class="inputBox"
          style="text-align:right"
          placeholder="e.g. gift for sister"
        ></b-form-input>
      </div>
      <div class="Buttons">
        <b-button variant="outline-dark" class="cancelButton">Cancel</b-button>
        <b-button variant="info" @click="clickSpend()">Confirm</b-button>
      </div>
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
    },
    clickSpend() {
      alert("Oh no u broke : ' (");
      this.$store.dispatch("updateTreeType", "skinny");
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
      amount: "",
      title: "",
      selected: "",
      description: ""
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
  content: 10rem;
  padding-top: 5px;
}

.title {
  color: #4d2d13;
  margin-top: 15px;
  padding-bottom: 10px;
}

.inputBox {
  width: 200px;
  border-top: none;
  border-left: none;
  border-right: none;
  /* border-bottom:#4D2D13; */
  background: none;
  margin-left: 11rem;
  position: right;
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

.formRow {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  align-items: baseline;
}

.Buttons {
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
}

.cancelButton {
  margin-right: 10px;
}

.confirmButton {
  background-color: #badff1;
  border: none;
  color: #4d2d13;
}

.cardContents {
  padding-left: 2rem;
  padding-right: 2rem;
}

.dropDownMenu {
  color: rgb(94, 94, 94);
  background: none;
  border: none;
  font-size: 16px;
  position: right;
  width: 30%;
}

.empty {
  width: 100%;
  height: 1.25rem;
}
</style>