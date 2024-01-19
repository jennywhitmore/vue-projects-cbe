const app = Vue.createApp({
  data() {
    return {
      name: "Peter Pan",
      loginTime: new Date().toLocaleString(),
      currentTime: new Date().toLocaleString(),
    };
  },
  mounted() {
    //lifecycle hook sets up the update time to tick
    setInterval(() => {
      this.currentTime = new Date().toLocaleString();
    }, 1000);
  },
});
app.mount("#app");
