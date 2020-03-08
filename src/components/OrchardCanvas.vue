<template>
  <div class="OrchardCanvas">
    OrchardCanvas
    <div class="mainTree"></div>
    <div class="goalTree">
      <TreeGoal />
    </div>
    <button class="button" @click="nextTree()">next</button>
    <button class="button" @click="backTree()">back</button>
    <!-- <div v-for="(goal, index) in getSavingGoals" :key="index">
    <div>{{ goal.name }}</div>-->
    <!-- </div> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TreeGoal from "./Trees/TreeGoal";
export default {
  name: "OrchardCanvas",
  components: {
    TreeGoal
  },
  methods: {
    getGoalTree() {
      var curTree = this.getSavingGoals[this.getSelectedGoalIndex];
      this.curTreePosIndex++;
      return curTree;
    },
    nextTree() {
      //   console.log(this.getSelectedGoalIndex);
      this.$store.dispatch("incrGoalIndex");
    },
    backTree() {
      //   console.log(this.getSelectedGoalIndex);
      this.$store.dispatch("decrGoalIndex");
    },
    getGoalInfo() {
      this.$store.dispatch("changeShowGoalInfo");
    }

    // showGoal() {
    //   const goal = {
    //     name: "Vacation",
    //     amountSaved: "65",
    //     amountReq: "56",
    //     category: "Entertainment"
    //   };
    //   this.$store.dispatch("addGoal", goal)
    // }
  },

  computed: {
    curGoalTree() {
      return this.getSavingGoals[this.getSelectedGoalIndex];
    },
    ...mapGetters(["getSavingGoals", "getSelectedGoalIndex"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.OrchardCanvas {
  width: 50%;
  height: 35rem;
  background-color: plum;
  border-radius: 15px;
}
</style>
