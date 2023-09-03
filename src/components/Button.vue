<template>
    <button @click="onClick" :style="{background: color}" class="btn">{{ text }}</button>
</template>

<script>
    export default {
        name: 'Button',
        methods: {
            onClick() {
                this.$emit('toggle-add-task')
            }
        },
        props: {
            text: String,
            color: String
        }
    }
</script>