<template>
  <div id="home">
    <form @submit="addTodo">
      <input type="text" name="add-todo" id="add-todo" v-model="title" placeholder="todo" ref="input"/>
      <input type="submit" value="Add Todo" id="submit-btn" />
    </form>
    <TodosList v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
  </div>
</template>

<script>
import TodosList from "./components/Todos.vue"
import uuid from 'uuid-v4'
export default {
  name: 'Home',
  components: {
    TodosList,
  },
  data(){
    return{
      todos: [],
      title: ''
    }
  },
  methods: {
    deleteTodo(id){
      this.todos = this.todos.filter(todo => todo.id !== id)
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
    addTodo(e){
      e.preventDefault()
      if(this.title !== ''){
        const myUUID = uuid()
        const newTodo = {
          id: myUUID,
          title: this.title,
          completed: false
        }
        this.todos = [...this.todos, newTodo]
        localStorage.setItem('todos', JSON.stringify(this.todos))
        this.title=''
        this.$refs.input.focus()
      }
    }
  },
  mounted(){
    if(localStorage.getItem("todos").length > 0){
      this.todos = JSON.parse(localStorage.getItem('todos'))
    }
  }
}
</script>

<style>

body {
  background: whitesmoke;
}

input {
    padding: 10px;
    border: 1px solid rgb(0,0,0,0.2);
    outline: none;
    font-size: 16px;
  }

 #submit-btn {
   cursor: pointer;
   background: white;

 }

</style>

