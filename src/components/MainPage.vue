<template>
  <div class="MainPage">
    <OrchardCanvas />
    <NavBar />
    <!-- {{getSavingGoals}} -->
  </div>
</template>

<script>
import OrchardCanvas from "./OrchardCanvas.vue";
import NavBar from "./NavBar";

export default {
  name: "MainPage",
  components: {
    OrchardCanvas,
    NavBar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginCred {
  padding-top: 2rem;
}
</style>
