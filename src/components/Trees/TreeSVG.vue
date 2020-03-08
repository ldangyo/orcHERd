<template>
  <div class="TreeSVG">
    <img :src="require(`@/assets/${getTreeImg}.svg`)" alt class="icon" />
  </div>
</template>
/
<script>
export default {
  //calls different tree states
  name: "TreeSVG",
  prop: {
    typeTree: String
  },
  computed: {
    getTreeImg() {
      console.log("heyWHYo");
      console.log(this.typeTree);
      switch (true) {
        case this.type === "sprout":
          console.log("hewyo");
          return "goalpink3";
        case this.type === "teen":
          return "goalgreen3";
        default:
          return "goalpink3";
      }
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.TreeSVG {
  width: 23rem;
  position: absolute;
}
</style>
