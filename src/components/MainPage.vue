<template>
  <div class="MainPage">
    <div class="nav">
      <NavBar />
    </div>
    <div class="orchard">
      <OrchardCanvas />
    </div>
    <div class="savingsCard">
      <SavingsCard />
    </div>
  </div>
</template>

<script>
import OrchardCanvas from "./OrchardCanvas.vue";
import NavBar from "./NavBar";
import SavingsCard from "./SavingsCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "MainPage",
  components: {
    OrchardCanvas,
    NavBar,
    SavingsCard
  },
  computed: {
    ...mapGetters(["getSavingGoals"]),

    showGoal: function() {
      return this.getSavingGoals;
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
