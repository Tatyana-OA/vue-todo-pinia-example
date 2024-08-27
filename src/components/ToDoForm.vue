<script setup>
import { ref } from "vue";
import { useTodoListStore } from "@/stores/todoList";

// Reactive value initialized as "", bound to the input, so it updates when input changes
const todo = ref("");

const store = useTodoListStore();

function addItemandClear(item) {
  if (item.length === 0) {
    return;
  }
  store.addTodo(item);
  todo.value = "";
}
</script>
<template>
  <div>
    <form @submit.prevent="addItemandClear(todo)">
      <input type="text" v-model="todo" />
      <button>Add</button>
    </form>
  </div>
</template>

<style scoped></style>
