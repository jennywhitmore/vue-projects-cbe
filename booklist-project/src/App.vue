<template>
  <div>
    <layout-header />
    <book-list />
  </div>
</template>

<script>
import BookList from "./components/BookList.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
export default {
  name: "App",
  components: { LayoutHeader, BookList },
};
</script>
