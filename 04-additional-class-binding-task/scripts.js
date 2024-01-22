const app = Vue.createApp({
  data() {
    return {
      showText: "",
    };
  },

  methods: {
    showThisText(text) {
      this.showText = this.showText === text ? "" : text;
    },
  },
});
app.mount("#app");
