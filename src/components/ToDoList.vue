<script setup>
import { useTodoListStore } from "@/stores/todoList";
import { storeToRefs } from "pinia";

const store = useTodoListStore();

// creates refs from each of the properties, ensuring reactivity
const { todoList } = storeToRefs(store);
const { toggleCompleted } = store;
</script>
<template>
  <div>
    <div v-for="todo in todoList" :key="todo.id" class="item">
      <div class="content">
        <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
        <span @click.stop="toggleCompleted(todo.id)" class="check"
          >&#10004;</span
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
.content {
  display: flex;
  gap: 0.5rem;
}
.check {
  cursor: pointer;
}
</style>
