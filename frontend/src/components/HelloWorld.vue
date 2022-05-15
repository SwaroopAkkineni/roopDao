<template>
  <div class="helloWorld">
    <NavBar @msg="message = $event" />
    <AccountComponent :message="message" />
  </div>
</template>

<script>
import AccountComponent from './mainBody/AccountComponent.vue'
import NavBar from './navBar/NavBar.vue'

export default {
  components: {
    AccountComponent,
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
