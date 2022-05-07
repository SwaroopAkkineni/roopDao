<template>
  <div>
    <div class="navbar">
      <h1 class="item">Home</h1>
      <h1 class="item">Account</h1>
      <h1 class="item">Buy</h1>
      <h1 class="item">Sell</h1>
    </div>
    <div class="body">
      <h1>{{ msg }}</h1>
      <p>Here is the home page</p>
    </div>
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

.navbar {
  background-color: lightgreen;
  text-align: left;

  h1 {
    color: red;
    display: inline;
    margin: 0 10px 0 10px;
  }
}

h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}
</style>
