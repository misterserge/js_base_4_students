<template>
  <div id="app">
    <h1>todo app</h1>
    <TodoItemAdd 
      v-bind:todoListCount="this.todoListData.length"
      @addItem="addItem"
    />
    <hr>
    <TodoList 
      v-bind:todoList="todoListData"
      @removeItemListData="removeItemListData"
    />
  </div>
</template>

<script>

import TodoList from '@/components/TodoList'
import TodoItemAdd from '@/components/TodoItemAdd'

export default {
  data() {
    return {
      todoListData: [
        {id: 1, title: 'купить хлеб', completed: false},
        {id: 2, title: 'купить масло', completed: false},
        {id: 3, title: 'купить воду', completed: false},
      ]
    }
  },
  name: 'App',
  components: {
    TodoList,
    TodoItemAdd
  },
  methods: {
    addItem(data){
      this.todoListData.push(data)
    },
    removeItemListData(id){
      this.todoListData = this.todoListData.filter(el=>el.id != id)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
