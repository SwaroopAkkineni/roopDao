<template>
  <div class="helloWorld">
    <NavBar />
    <div>{{ message }} page</div>
  </div>
</template>

<script>
// import AccountComponent from './AccountComponent.vue'
import NavBar from './navBar/NavBar.vue'

export default {
  props: {
    msg: String,
  },
  components: {
    // AccountComponent,
    NavBar,
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
.helloWorld {
  text-align: center;

  h3 {
    margin: 40px 0 0;
  }
}
</style>
