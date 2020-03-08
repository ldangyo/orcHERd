<template>
  <div class="MainPage">
    <div class="nav">
      <NavBar />
    </div>
    <div class="orchard">
      <OrchardCanvas />
    </div>
    <div v-if="!currPage" class="savingsCard">
      <!-- default -->
      <SavingsCard />
    </div>
    <div v-else class="savingsCard">
      <div v-if="onSavingsPage">
        <SavingsCard />
      </div>
      <div v-else-if="onSpendingsPage">
        <SpendingsCard />
      </div>
      <div v-else-if="onTasksPage">Task Card</div>
    </div>
  </div>
</template>

<script>
import OrchardCanvas from "./OrchardCanvas.vue";
import NavBar from "./NavBar";
import SavingsCard from "./SavingsCard.vue";
import SpendingsCard from "./SpendingsCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "MainPage",
  components: {
    OrchardCanvas,
    NavBar,
    SavingsCard,
    SpendingsCard
  },
  module: {},
  computed: {
    ...mapGetters(["getSavingGoals", "getCurrPage"]),

    showGoal: function() {
      return this.getSavingGoals;
    },

    currPage: function() {
      return this.getCurrPage;
    },

    onSavingsPage: function() {
      return this.getCurrPage === "Savings";
    },

    onSpendingsPage: function() {
      return this.getCurrPage === "Spendings";
    },

    onTasksPage: function() {
      return this.getCurrPage === "Tasks";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.MainPage {
  display: flex;
}
.orchard {
  width: 50%;
  padding-left: 2rem;
  padding-right: 6.75rem;
  overflow: hidden;
  margin-top: 3rem;
}

.savingsCard {
  width: 50%;
  padding-right: 7rem;
  margin-top: 3rem;
}
</style>
