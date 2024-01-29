<template>
  <div class="todo-container">
    <ul class="todo-list" v-if="todoArray">
      <li class="" v-for="todo of todoArray" :key="todo.id">
        {{ todo.description }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return { todoArray: [] };
  },

  methods: {
    loadTodos() {
      fetch("http://localhost:4730/todos")
        .then((respons) => respons.json())
        .then((data) => {
          this.todoArray = data;
        });
    },
  },

  created() {
    this.loadTodos();
  },

  name: "TodoList",

  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-list li {
  list-style-type: none;
  margin-bottom: 0.5rem;
  margin-top: 0.3rem;
}

.todo-container {
  position: absolute;
  top: 250px;
  bottom: 200px;
  width: 100%;
  overflow-y: auto;
  padding: 1rem;
}
</style>
