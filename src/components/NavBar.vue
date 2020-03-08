<template>
  <div class="NavBar">
    <!-- <div class="home">
      <div>orcherd</div>
    </div>-->
    <div class="homeButton">
      <img src="../assets/OrchardLogo.png" alt />
    </div>
    <div class="empty"></div>

    <div class="navButtons">
      <div class="navButt">
        <button class="buttons">Savings</button>
        <button class="buttons">Spending</button>
        <button class="buttons">Tasks</button>
      </div>
      <div class="navIcons">
        <button class="icon">
          <img src="../assets/notificationOn.png" alt />
        </button>
        <button class="icon">
          <img src="../assets/settings.png" alt />
        </button>
      </div>
      <button class="profile">
        <img src="../assets/profilePic.png" alt />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.NavBar {
  width: 100%;
  height: 60px;
  top: 0;
  left: 0;
  position: fixed;
  border-bottom: 1px solid #d4c1b2;
  align-items: center;
  background-color: white;
  margin-bottom: 20rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  flex-wrap: nowrap;
  /* margin: 2px; */
}

.navButtons {
  display: flex;
  align-self: centre;
}

.home {
  width: 5%;
}

.empty {
  width: 60%;
}

/* .button {
  width: 5%;
  margin: 10px;
  text-align: center;
  font-size: 10px;
  padding: 10px;
  align-self: center;
} */

.icon {
  /* background-image: url(@/assets/notificationOn.png); */
  background-size: 25px 25px;
  border: none;
  background: none;
  height: 25px;
  align-self: center;
  /* padding-top: 50px; */
  flex-wrap: nowrap;
}

.buttons {
  background-size: 25px 25px;
  border: none;
  background: none;
  height: 25px;
  /* padding-top: 5px; */
  /* padding-bottom: 10px; */
  flex-wrap: nowrap;
  /* align-self: center; */
}

.navButt {
  padding-top: 15px;
  align-self: center;
}

.navIcons {
  padding-top: 15px;
  align-self: center;
}

.profile {
  padding-top: 10px;
  border: none;
  background: none;
}
</style>