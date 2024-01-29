<template>
  <p :style="textStyle">{{ text }}: {{ counter }}</p>
  <button @click="increase">+</button>
  <button @click="decrease">-</button>
  <hr />
</template>

<script>
export default {
  props: {
    text: String,
    counter: Number,
  },

  computed: {
    textStyle() {
      const colors = {
        black: "black",
        white: "silver",
        grey: "dimgrey",
        orange: "orangered",
        striped: "saddlebrown",
        pink: "deeppink",
      };
      return { color: colors[this.text] || "black" };
    },
  },

  methods: {
    increase() {
      this.$emit("increase");
    },
    decrease() {
      this.$emit("decrease");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  color: purple;
}
p {
  color: dodgerblue;
}
</style>
