<template>
    <button :style="{background: color}" class="btn">{{ text }}</button>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            text: String,
            color: String,
        }
    }
</script>

<style scope>
    /* button {
        padding: 8px;
        background: rgb(15, 124, 15);
        color: rgb(239, 236, 236);
        border: 1px rgb(15, 124, 15) solid;
        border-radius: 2px;
        cursor: pointer;
    } */
</style>