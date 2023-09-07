<template>
  <div class="container">
    <Header @toggle-add-task="toggleAddTask" :showAddTask="showAddTask" title="Vue Task Tracker" />
    <!-- <div v-if="showAddTask">
      <AddTask @add-task="addTask"/>
    </div>
    <Tasks @add-completed="addCompleted" @delete-task="onDelete" :tasks="tasks" /> -->
    <router-view :showAddTask="showAddTask"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
// import Tasks from './components/Tasks.vue'
// import AddTask from './components/AddTask.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    // Tasks,
    // AddTask,
  },
  data() {
    return {
      // tasks: [],
      showAddTask: false,
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    }
    // async addTask(task) {
    //   const res = await fetch('http://localhost:3000/tasks', {
    //     method: 'POST',
    //     headers: {
    //       'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify(task),
    //   })
    //   const data = await res.json()


    //   this.tasks = [...this.tasks, data]

    // },
    // async onDelete(id) {
    //   const res = await fetch(`http://localhost:3000/tasks/${id}`, {
    //     method: 'DELETE'
    //   })

    //   res.status === 200 ? (this.tasks = this.tasks.filter((task) => task.id !== id)) : alert('Error deleting task')

      
    // },
    // async addCompleted(id) {
    //   const toggleTask = await this.fetchTask(id)
    //   const updateTask = {...toggleTask, completed: !toggleTask.completed}

    //   const res = await fetch(`http://localhost:3000/tasks/${id}`, {
    //     method: 'PUT',
    //     headers: {
    //       'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify(updateTask)
    //   })
    //   const data = await res.json()

    //   this.tasks = this.tasks.map((task) => task.id === id ?
    //   {...task, completed: data.completed} : task
    //   )
    // },
    // async fetchTasks() {
    // const res = await fetch('http://localhost:3000/tasks')

    // const data = await res.json()
  
    // return data
    // },
    // async fetchTask(id) {
    // const res = await fetch(`http://localhost:3000/tasks/${id}`)

    // const data = await res.json()
  
    // return data
    // }
  }
  // async created() {
  //   this.tasks = await this.fetchTasks()
  // }
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
  /* max-width: 800px; */
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