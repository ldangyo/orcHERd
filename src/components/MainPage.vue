<template>
  <div class="MainPage">
    <OrchardCanvas />
    {{getSavingGoals}}
  </div>
</template>

<script>
import OrchardCanvas from "./OrchardCanvas.vue";
import { mapGetters } from "vuex";

export default {
  name: "MainPage",
  components: {
    OrchardCanvas
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
