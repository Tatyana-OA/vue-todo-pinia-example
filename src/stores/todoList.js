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
  },
  //getters
});
