<template>
  <div class="TreeGoal">
    <div class="container">
      <TreeSVG />
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
    //Goal Name
    //Goal Category
    //Goal Progress
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.TreeGoal {
  padding-top: 2rem;
}
/* .container {
  position: absolute;
} */
</style>
