Vue.createApp({
  data() {
    return {
      x: 0,
      y: 0,
      freezeCoordinates: false,
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
      if (this.freezeCoordinates === false) {
        this.x = event.offsetX;
        this.y = event.offsetY;
      }
    },
  },
}).mount("#app");
