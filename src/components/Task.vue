<template>
    <p :class="[task.completed ? 'completed' : '', 'task']" class="task">
        {{ task.text }}
        <i class="fas fa-times" />
    </p>
</template>

<script>
    export default {
        name: 'Task',
        props: {
            task: Object
        },
    }
</script>

<style scope>
.task {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f4f4f4;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
}

.task.completed {
    border-left: 5px solid green;
}

.fas {
    color: red;
}
.task:hover > .fas {
    font-size: 20px;
}
</style>