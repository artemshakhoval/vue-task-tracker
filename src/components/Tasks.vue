<template>
    <div :key="task.id" v-for="task in tasks" class="tasks">
        <Task :task="task"/>
    </div>
</template>

<script>
import Task from './Task.vue'
    export default {
        name: 'Tasks',
        props: {
            tasks: Array
        },
        components: {
            Task
        }
    }
</script>