<template>
  <div class="MainPage">
    <OrchardCanvas />
    <!-- {{getSavingGoals}} -->
    <SavingsCard />
  </div>
</template>

<script>
import OrchardCanvas from "./OrchardCanvas.vue";
import SavingsCard from "./SavingsCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "MainPage",
  components: {
    OrchardCanvas,
    SavingsCard,
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
  padding: 2rem;
}
</style>
