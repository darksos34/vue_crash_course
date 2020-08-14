<template>
  <div>
    <div v-bind:key="todo.id" v-for="todo in todos">
      <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo',
      todo.id)" />
      <img alt="now" src="../assets/AudiLogo.png" />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import Image from "../assets/AudiLogo.png";

export default {
  name: "Todos",
  components: {
    TodoItem,
  },
  props: ["todos"],
};
</script>

<style scoped>
</style>