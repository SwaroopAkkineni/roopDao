<template>
  <div>
    <div>{{ this.fullName }} pageddd</div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  computed: {
    fullName: function () {
      return this.$store.getters.currentWebPageGetter
    },
    // ...mapGetters({
    //   poop: 'currentWebPageGetter',
    // }),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
