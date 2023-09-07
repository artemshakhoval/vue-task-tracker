<template>
    <AddTask v-show="showAddTask" @add-task="addTask"/>
    <Tasks @add-completed="addCompleted" @delete-task="onDelete" :tasks="tasks" />
</template>

<script>
import Tasks from '../components/Tasks.vue'
import AddTask from '../components/AddTask.vue'

export default {
    name: 'Home',
    props: {
        showAddTask: Boolean,
    },
    components: {
        Tasks,
        AddTask
    },
    data() {
    return {
      tasks: [],
    }
  },
  methods: {
    async addTask(task) {
      const res = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task),
      })
      const data = await res.json()


      this.tasks = [...this.tasks, data]

    },
    async onDelete(id) {
      const res = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'DELETE'
      })

      res.status === 200 ? (this.tasks = this.tasks.filter((task) => task.id !== id)) : alert('Error deleting task')

      
    },
    async addCompleted(id) {
      const toggleTask = await this.fetchTask(id)
      const updateTask = {...toggleTask, completed: !toggleTask.completed}

      const res = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updateTask)
      })
      const data = await res.json()

      this.tasks = this.tasks.map((task) => task.id === id ?
      {...task, completed: data.completed} : task
      )
    },
    async fetchTasks() {
    const res = await fetch('http://localhost:3000/tasks')

    const data = await res.json()
  
    return data
    },
    async fetchTask(id) {
    const res = await fetch(`http://localhost:3000/tasks/${id}`)

    const data = await res.json()
  
    return data
    }
  },
  async created() {
    this.tasks = await this.fetchTasks()
  }
}

</script>