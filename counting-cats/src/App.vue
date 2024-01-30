<template>
  <main>
    <h1>Count all cats by their color</h1>
    <h2>Total cats: {{ totalCount }}</h2>
    <AttendeeCounter
      v-for="({ text, counter }, index) of attendeeCounters"
      :key="text"
      :text="text"
      :counter="counter"
      @increase="handleIncrease(index)"
      @decrease="handleDecrease(index)"
    />
  </main>
</template>

<script>
import AttendeeCounter from "./components/AttendeeCounter.vue";

export default {
  name: "App",
  data() {
    return {
      headline: "No need for Headline",
      attendeeCounters: [
        {
          text: "black",
          counter: 0,
        },
        {
          text: "white",
          counter: 0,
        },
        {
          text: "grey",
          counter: 0,
        },
        {
          text: "orange",
          counter: 0,
        },
        {
          text: "striped",
          counter: 0,
        },
        {
          text: "pink",
          counter: 0,
        },
      ],
    };
  },

  computed: {
    totalCount() {
      let totalCount = 0;
      this.attendeeCounters.forEach(({ counter }) => (totalCount += counter));
      return totalCount;
    },
  },

  components: {
    AttendeeCounter,
  },
  methods: {
    handleIncrease(index) {
      //console.log(this.attendeeCounters[index]);
      this.attendeeCounters[index].counter += 1;
    },
    handleDecrease(index) {
      //console.log(this.attendeeCounters[index]);
      this.attendeeCounters[index].counter -= 1;
    },
  },
};
</script>
