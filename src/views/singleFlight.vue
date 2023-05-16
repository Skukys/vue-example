<template>

</template>

<script>
export default {
  name: "singleFlight",
  computed: {
    getId() {
      return parseFloat(this.$router.currentRoute._value.params.id)
    }
  },
  async mounted() {
    let res = await fetch(`http://flights/routes/getSingleFlight.php?id=${this.getId}`, {method: 'GET'})
    let json = await res.json()
  }
}
</script>

<style scoped>

</style>