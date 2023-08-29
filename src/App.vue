<template>
  <div class="container">
    <Header title="Vue Task Tracker"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
#app {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
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
