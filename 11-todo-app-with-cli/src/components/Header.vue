<template>
  <header>
    <div class="h1">
      <h1>My Daily Tasks</h1>
    </div>
    <div>
      <img src="@/assets/todo-title.png" />
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderVue",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 13rem;
  background-color: black;
  box-shadow: 0px 0px 0px 8px dimgray;
  display: flex;
  justify-content: center;
  z-index: 100;
}

header img {
  width: 200px;
  height: auto;
}

.h1 {
  width: 50px;
  display: flex;
  align-items: flex-end;
  font-family: "Love Ya Like A Sister", cursive;
  color: rgb(255, 255, 255);
  font-size: 1rem;
}
</style>
