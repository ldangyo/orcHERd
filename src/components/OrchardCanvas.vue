<template>
  <div class="OrchardCanvas">
    <div v-if="savings">
      <div class="button right" @click="nextTree()">
        <img class="arrow right" src="@/assets/rightarrow.svg" alt />
      </div>
      <div class="button left" @click="backTree()">
        <img class="arrow left" src="@/assets/leftarrow.svg" alt />

        <div class="OrchardCanvas allTrees" v-if="treeClicked" @click="mainTreeClicked()">
          <div class="mainTree"></div>
          <div class="goalTree" v-if="getAddedTree">
            <TreeGoal type="sprout" />
          </div>
        </div>
        <div class="OrchardCanvas sky" v-if="soloTree">
          <div class="mainTree"></div>
          <div class="goalTree">
            <TreeGoal type="teen" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="spendings">
      <div class="OrchardCanvas sky" v-if="soloTree">
        <div v-if="spuce">
          <TreeGoal treeType="skinny" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TreeGoal from "./Trees/TreeGoal";
export default {
  name: "OrchardCanvas",
  data() {
    return {
      treeClicked: true,
      soloTree: false
    };
  },
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
      console.log(this.getAddedTree);
      this.$store.dispatch("incrGoalIndex");
    },
    backTree() {
      //   console.log(this.getSelectedGoalIndex);
      this.$store.dispatch("decrGoalIndex");
    },
    getGoalInfo() {
      this.$store.dispatch("changeShowGoalInfo");
    },
    mainTreeClicked() {
      console.log("clicked");
      this.treeClicked = false;
      this.soloTree = true;
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
    showAllTree() {
      if (this.treeClicked === "false") {
        console.log("sup");

        return "allTrees";
      } else {
        return "";
      }
    },
    curGoalTree() {
      return this.getSavingGoals[this.getSelectedGoalIndex];
    },
    ...mapGetters(["getSavingGoals", "getSelectedGoalIndex", "getAddedTree"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.OrchardCanvas {
  width: 100%;
  height: 35rem;
  background-color: black;
  border-radius: 15px;
}

.sky {
  background-image: url("../assets/BackGround/sky.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.allTrees {
  background-image: url("../assets/BackGround/all savings.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.button .left {
  left: 33px;
  position: absolute;
  z-index: 1;
  bottom: 40%;
}

.button .right {
  position: absolute;
  z-index: 0;
  bottom: 40%;
  left: 36.25rem;
}
</style>
