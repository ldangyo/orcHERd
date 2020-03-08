<template>
  <div class="TreeGoal">
    <div class="container">
      <TreeSVG :type="type" />
    </div>
  </div>
</template>
/
<script>
import TreeSVG from "./TreeSVG";
export default {
  //calls different tree states
  name: "TreeGoal",
  components: {
    TreeSVG
  },
  props: {
    type: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.TreeGoal {
  padding-top: 2rem;
}
.container {
  display: flex;
  justify-content: center;
}
</style>
