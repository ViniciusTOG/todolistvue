<template>
  <div class='container'>
    <div class="todo-container" v-bind:key="todo.id" v-for="todo in todos">
      <p v-bind:class="{'is-completed' : todo.completed}">{{todo.title}}</p>
      <div class='btn-container'>
        <input type="checkbox" :checked="todo.completed" name="todo-input" id="todo-input" v-on:change="markCompleted(todo)">
        <button @click="$emit('del-todo', todo.id)">x</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   name: "TodosList",
   props: ["todos"],
   methods: {
     markCompleted(todo){
       todo.completed = !todo.completed
       localStorage.setItem('todos', JSON.stringify(this.todos))
       console.log(this.todos)
     }
   }
}
</script>

<style scoped>

  .container {
    margin-top: 20px;
  }

  .todo-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    margin: 10px auto;
    padding: 20px;
    background-color: #dddd;

  }
  .container button {
    margin-left: 15px;
    background: red;
    border: none;
    color: white;
    cursor: pointer;
    transition: 0.3s
  }

  .container button:hover{
    background: darkred;
  }

  .btn-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .is-completed{
    text-decoration: line-through;
  }
</style>
