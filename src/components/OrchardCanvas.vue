<template>
  <div class="OrchardCanvas">
    OrchardCanvas
    <div class="mainTree"></div>
    <div class="goalTree"></div>
    <button class="button" @click="nextTree()">next</button>
    <button class="button" @click="backTree()">back</button>
    <!-- <div v-for="(goal, index) in getSavingGoals" :key="index">
    <div>{{ goal.name }}</div>-->
    <!-- </div> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "OrchardCanvas",
  methods: {
    getGoalTree() {
      var curTree = this.getSavingGoals[this.selectedGoalIndex];
      this.curTreePosIndex++;
      return curTree;
    },
    nextTree() {
      //   console.log(this.selectedGoalIndex);
      this.$store.dispatch("incrGoalIndex");
    },
    backTree() {
      //   console.log(this.selectedGoalIndex);
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
      return this.getSavingGoals[this.selectedGoalIndex];
    },
    ...mapGetters(["getSavingGoals", "selectedGoalIndex"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginCred {
  padding-top: 2rem;
}
</style>
