const { createApp, ref } = Vue;

createApp({
  setup() {
    const redValue = ref(0);
    const greenValue = ref(0);
    const blueValue = ref(0);

    const fetchRandomColor = () => {
      fetch("https://dummy-apis.netlify.app/api/color")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Bad Network response");
          }
          return response.json();
        })
        .then((data) => {
          const rgb = hexToRgb(data.color);
          redValue.value = rgb.r;
          greenValue.value = rgb.g;
          blueValue.value = rgb.b;
        })
        .catch((error) => {
          console.error(`Failed to fetch color:`, error);
        });
    };

    function hexToRgb(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : null;
    }

    return { redValue, greenValue, blueValue, fetchRandomColor };
  },
}).mount("#color-mixer");
