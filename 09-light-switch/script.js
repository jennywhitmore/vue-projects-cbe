//Old Code without Vue//
/*/////////////////////////////////////////*/
/*
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".toggleButton");
  const body = document.body;
  const siteTitle = document.querySelector(".siteTitle");

  toggleButton.addEventListener("click", function () {
    body.classList.toggle("default");
    toggleButton.classList.toggle("default");

    if (body.classList.contains("default")) {
      body.style.backgroundColor = "white";
      siteTitle.textContent = "Good Morning";
    } else {
      body.style.backgroundColor = "#333";
      siteTitle.textContent = "Good Night";
    }
  });
  toggleButton.addEventListener("mouseover", function () {
    toggleButton.style.cursor = "pointer";
  });
  toggleButton.addEventListerner("mouseout", function () {
    toggleButton.style.cursor = "auto";
  });
});

*/

Vue.createApp({
  data() {
    return {
      isLightOn: true,
    };
  },
  methods: {
    toggleSwitch() {
      this.isLightOn = !this.isLightOn;
      document.title = this.isLightOn ? "Good Morning" : "Good Night";
    },
  },
  computed: {
    mainClass() {
      return {
        default: !this.isLightOn,
      };
    },
  },
}).mount("#app");
