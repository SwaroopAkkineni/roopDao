<template>
  <div class="navbar">
    <button class="button" @click="render('Home')">Home</button>
    <button class="button" @click="render('Account')">Account</button>
    <button class="button" @click="render('Trade')">Trade</button>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    render(msg) {
      console.log('NavBar: ' + msg)
      this.$emit('msg', msg)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  display: inline-flex;

  .button {
    display: inline-block;
    margin: 0.5em 0;
    padding: 1em 2em;
    background: #fff;
    border: 2px solid tomato;
    border-radius: 3px;
    color: tomato;
    font-family: 'Quicksand', sans-serif;
    font-size: 1em;
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: 1;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s;
  }

  .button:hover {
    background: tomato;
    color: #fff;
  }
}
</style>
