<template>
  <div class="container">
    <Header title="Vue Task Tracker" />
    <Tasks @add-completed="addCompleted" @delete-task="onDelete" :tasks="tasks" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Tasks from './components/Tasks.vue'

export default {
  name: 'App',
  components: {
    Header,
    Tasks
  },
  data() {
    return {
      tasks: []
    }
  },
  methods: {
    onDelete(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id)
    },
    addCompleted(id) {
      this.tasks = this.tasks.map((task) => task.id === id ?
      {...task, completed: !task.completed} : task
      )
    }
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: 'Buy a bread',
        completed: true
      },
      {
        id: 2,
        text: 'Buy a milk',
        completed: false
      },
      {
        id: 3,
        text: 'Buy a butter',
        completed: true
      },
    ]
  }
}
</script>

<style scope>
#app {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 30px 80px;
  border: 1px black solid;
}

.btn {
  padding: 8px;
  background: black;
  color: rgb(239, 236, 236);
  border: 1px solid;
  border-radius: 4px;
  cursor: pointer;
}

.btn:focus {
  outline: none;
}
</style>