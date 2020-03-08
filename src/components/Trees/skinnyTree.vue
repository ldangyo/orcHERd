<template>
  <div class="skinnyTree">
    <img :src="require(`@/assets/main3.svg`)" alt class="icon" />
  </div>
</template>
/
<script>
export default {
  //calls different tree states
  name: "skinnyTree",
  prop: {
    typeTree: String
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.skinnyTree {
  width: 25rem;
  position: absolute;
}
</style>
