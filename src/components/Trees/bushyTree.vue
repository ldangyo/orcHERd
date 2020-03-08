<template>
  <div class="bushyTree">
    <img :src="require(`@/assets/main1.svg`)" alt class="icon" />
  </div>
</template>
/
<script>
export default {
  //calls different tree states
  name: "bushyTree",
  prop: {
    typeTree: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bushyTree {
  width: 25rem;
  position: absolute;
}
</style>
