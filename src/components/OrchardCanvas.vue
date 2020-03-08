<template>
  <div class="OrchardCanvas">
    OrchardCanvas
    <button v-on:click="showGoal()">yello</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "OrchardCanvas",
  methods: {
    showGoal() {
      const goal = {
        name: "Vacation",
        amountSaved: "65",
        amountReq: "56",
        category: "Entertainment"
      };
      this.$store.dispatch("addGoal", goal);
      console.log(this.getSavingGoals);
    }
  },

  computed: {
    ...mapGetters(["getSavingGoals"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginCred {
  padding-top: 2rem;
}
</style>
