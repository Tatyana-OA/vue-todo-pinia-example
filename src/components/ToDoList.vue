<script setup>
import { useTodoListStore } from "@/stores/todoList";
import { storeToRefs } from "pinia";

const store = useTodoListStore();

// creates refs from each of the properties, ensuring reactivity
const { todoList } = storeToRefs(store);
const { toggleCompleted, deleteTodo } = store;
</script>
<template>
  <div v-for="todo in todoList" :key="todo.id">
    <div class="content">
      <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
      <div class="checks">
        <span @click.stop="toggleCompleted(todo.id)">&#10004;</span>
        <span @click="deleteTodo(todo.id)">&#10060;</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
span {
  margin: 0 10px;
  cursor: pointer;
}
.item {
  display: flex;
  justify-content: center;
}
.content {
  display: flex;
  font-size: 1.5em;
  justify-content: space-between;
}
.completed {
  text-decoration: line-through;
}
</style>
