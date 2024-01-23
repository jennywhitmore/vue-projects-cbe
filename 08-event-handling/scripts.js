Vue.createApp({
  data() {
    return {
      x: 0,
      y: 0,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },
  methods: {
    mouseCoordinates(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
  },
}).mount("#app");
