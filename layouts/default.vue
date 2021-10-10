<template>
  <div class="corpus">
    <nuxt/>
  </div>
</template>

<script>
export default {
  mounted() {
    if (this.$route.path === '/') {
      this.$router.replace('/red')
    }
  },
}
</script>

<style>
.corpus {
  background-color: #383232;
  width: 250px;
  height: 100vh;
  margin: auto;
  overflow-y: hidden;
}
</style>
