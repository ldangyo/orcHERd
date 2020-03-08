<template>
  <div class="MainPage">
    <OrchardCanvas />
    <!-- {{getSavingGoals}} -->
  </div>
</template>

<script>
import OrchardCanvas from "./OrchardCanvas.vue";

export default {
  name: "MainPage",
  components: {
    OrchardCanvas
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginCred {
  padding-top: 2rem;
}
</style>
