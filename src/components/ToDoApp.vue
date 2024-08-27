<script setup>
import ToDoForm from "./ToDoForm.vue";
import ToDoList from "./ToDoList.vue";
</script>
<template>
  <div class="todo-app">
    <h1>To Do List</h1>
    <ToDoForm />
    <ToDoList />
  </div>
</template>

<style scoped>
.todo-app {
  padding: 5vh;
  min-height: 100vh;
  width: 50%;
  background-color: #f7f9fc;
}
</style>
