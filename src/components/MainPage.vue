<template>
  <div class="MainPage">
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
import SavingsCard from "./SavingsCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "MainPage",
  components: {
    OrchardCanvas,
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
}

.savingsCard {
  width: 50%;
  padding-right: 7rem;
}
</style>
