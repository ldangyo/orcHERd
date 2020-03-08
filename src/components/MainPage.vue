<template>
  <div class="MainPage">
    <OrchardCanvas />
    <NavBar />
    <!-- {{getSavingGoals}} -->
    <SavingsCard />
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
.loginCred {
  padding-top: 2rem;
}
</style>
