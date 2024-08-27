import { defineStore } from "pinia";

export const useTodoListStore = defineStore("todoList", {
  //state
  state: () => ({
    todoList: [],
    id: 0,
  }),
  //actions
  actions: {
    addTodo(item) {
      this.todoList.push({ item, id: this.id++, completed: false });
    },
    deleteTodo(itemId) {
      this.todoList = this.todoList.filter((obj) => {
        return obj.id !== itemId;
      });
    },
    toggleCompleted(id) {
      const toDo = this.todoList.find((i) => i.id === id);
      if (toDo) {
        toDo.completed = !toDo.completed;
      }
    },
  },
  //getters
});
