const app = Vue.createApp({
  data() {
    return {
      currentSpell: "Alohomora",
      spells: [
        "Accio",
        "Sectumsempra",
        "Petrificus Totalus",
        "Reddikulus",
        "Lumos",
        "Nox",
        "Expecto Patronum",
        "Stupify",
        "Wingardium Leviosa",
        "Reparo",
        "Reducto",
      ],
    };
  },
  methods: {
    changeSpell() {
      this.currentSpell =
        this.spells[Math.floor(Math.random() * this.spells.length)];
    },
  },
});
app.mount("#app");
