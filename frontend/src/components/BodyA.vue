<template>
  <div class="body">
    <h1>{{ msg }}</h1>
    <p>Here is the home page</p>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.body {
  background-color: lightblue;
}
</style>
