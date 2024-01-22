Vue.createApp({
  data() {
    return {
      activeLetter: "A",
    };
  },

  methods: {
    setActiveLetter(letter) {
      this.activeLetter = letter;
    },
  },
}).mount("#app");
