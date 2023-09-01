<template>
    <div :key="task.id" v-for="task in tasks" class="tasks">
        <Task @add-completed="$emit('add-completed', task.id)" @delete-task="$emit('delete-task', task.id)" :task="task"/>
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
        },
        emits: ['delete-task', 'add-completed']
    }
</script>