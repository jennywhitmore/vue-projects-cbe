<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <SingleFileComponent />
  <GlobalSingleFileComponent />
  <HelloWorld msg="Dev-Server successfully mounted!" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import SingleFileComponent from "@/components/SingleFileComponent.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    SingleFileComponent,
  },
};
</script>
