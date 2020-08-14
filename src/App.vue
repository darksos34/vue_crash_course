<template>
  <div id="app">
    <Header />
    <AddTodo />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";

export default {
  name: "App",
  components: {
    Header,
    Todos,
    AddTodo,
  },

  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Vue Course",
          description: "Vue Crash Course 30 min left",
          completed: false,
        },
        {
          id: 2,
          title: "Marktplaats",
          description: "Samsung S7 Edge, Gasfornuis, Seat ibizi diesel",
          completed: false,
        },
        {
          id: 3,
          title: "Belangrijke taken",
          description: "Check agenda en white",
          completed: false,
        },
        {
          id: 4,
          title: "Todo Unreal Engine 4",
          description: "Finish your menu tutorial before saturday",
          completed: true,
        },
      ],
    };
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #444;
  color: #ffffff;
  padding: 10px 25px;
}

.btn:hover {
  background: #666;
}
</style>
