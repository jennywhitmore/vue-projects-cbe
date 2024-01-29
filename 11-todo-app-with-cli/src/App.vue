<template>
  <HeaderVue />
  <TodoList />
  <FooterVue />
</template>

<script>
import HeaderVue from "./components/Header.vue";
import TodoList from "./components/TodoList.vue";
import FooterVue from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    HeaderVue,
    TodoList,
    FooterVue,
  },
};
</script>
