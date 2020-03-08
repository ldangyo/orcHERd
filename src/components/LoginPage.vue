<template>
  <div class="loginPage">
    <div class="title">Welcome to Orchard</div>
    <div class="loginCred">
      <div class="label">
        Username
        <input type="text" id="username" />
      </div>
      <div class="label">
        Password
        <input type="text" id="password" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginCred {
  padding-top: 2rem;
}
</style>
