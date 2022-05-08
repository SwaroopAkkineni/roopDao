<template>
  <div>
    <div class="navbar">
      <button class="button" @click="render('Home')">Home</button>
      <button class="button" @click="render('Account')">Account</button>
      <button class="button" @click="render('Trade')">Trade</button>
    </div>
    <div>{{ message }} page</div>
  </div>
</template>

<script>
// import BodyA from './BodyA.vue'
// import NavBarButton from './navbar/NavBarButton.vue'

export default {
  props: {
    msg: String,
  },
  components: {
    // BodyA,
    // NavBarButton,
  },
  methods: {
    render(msg) {
      this.message = msg
    },
  },
  data() {
    return {
      message: 'Home',
    }
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

h3 {
  margin: 40px 0 0;
}
</style>
